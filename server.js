// Discover Game Trends 서버
// 실행: node server.js  (포트 변경: PORT=8080 node server.js)
// 외부 패키지 없이 Node 기본 모듈만 사용한다.
//
// 하는 일
//  1) main/ 폴더의 정적 파일(홈페이지)을 내보낸다.
//  2) test.json(임시 저장소)을 읽고 쓰는 API를 제공한다.
//     GET  /api/games            게임 목록
//     GET  /api/game?name=게임명  게임 하나의 글과 댓글
//     POST /api/comments         댓글 등록 { game, author, text }

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// 공개 폴더는 main/ 뿐이다. 루트의 .env 같은 파일은 절대 내보내지 않는다.
const PUBLIC_DIR = path.join(__dirname, 'main');

// 임시 저장소. 게임명, 글, 댓글이 모두 여기에 들어간다.
const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'test.json');

// main/ 밖에 있지만 공개해야 하는 파일 (index.html 이 ../logo.png 로 참조)
const EXTRA_FILES = {
  '/logo.png': path.join(__dirname, 'logo.png'),
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const MAX_BODY = 10 * 1024;   // 요청 본문 최대 크기
const MAX_TEXT = 500;         // 댓글 최대 글자 수
const MAX_AUTHOR = 20;        // 닉네임 최대 글자 수

// ===== 응답 도우미 =====

function send(res, status, message) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(message);
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(data));
}

// ===== test.json 읽기·쓰기 =====

// test.json 을 읽어 게임 목록을 돌려준다.
// 항목은 "게임명" 문자열이어도 되고 { "name": "게임명", ... } 객체여도 된다.
function loadGames() {
  const raw = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const list = Array.isArray(raw) ? raw : Array.isArray(raw.games) ? raw.games : [];

  return list
    .map((g) => (typeof g === 'string' ? { name: g } : g))
    .filter((g) => g && typeof g.name === 'string' && g.name.trim() !== '')
    .map((g) => ({
      ...g,
      name: g.name.trim(),
      title: typeof g.title === 'string' ? g.title : '',
      content: typeof g.content === 'string' ? g.content : '',
      comments: Array.isArray(g.comments) ? g.comments : [],
    }));
}

function saveGames(games) {
  const tmp = DATA_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify({ games }, null, 2) + '\n', 'utf8');
  fs.renameSync(tmp, DATA_FILE);
}

function findGame(games, name) {
  return games.find((g) => g.name === name);
}

// 눈에 보이지 않는 제어 문자를 지우고 앞뒤 공백을 없앤다.
function clean(value) {
  return String(value ?? '').replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '').trim();
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY) {
        reject(new Error('too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

// ===== API =====

async function handleApi(req, res, url) {
  let games;
  try {
    games = loadGames();
  } catch (err) {
    const reason = err.code === 'ENOENT' ? 'test.json 파일이 없습니다.' : 'test.json 형식이 올바르지 않습니다.';
    return sendJson(res, 500, { error: reason });
  }

  // 게임 목록
  if (url.pathname === '/api/games' && req.method === 'GET') {
    return sendJson(res, 200, games.map((g) => ({
      name: g.name,
      hasPost: g.content.trim() !== '',
      commentCount: g.comments.length,
    })));
  }

  // 게임 하나의 글과 댓글
  if (url.pathname === '/api/game' && req.method === 'GET') {
    const game = findGame(games, url.searchParams.get('name') || '');
    if (!game) return sendJson(res, 404, { error: '등록되지 않은 게임입니다.' });
    return sendJson(res, 200, {
      name: game.name,
      title: game.title,
      content: game.content,
      comments: game.comments,
    });
  }

  // 댓글 등록
  if (url.pathname === '/api/comments' && req.method === 'POST') {
    let body;
    try {
      body = JSON.parse(await readBody(req));
    } catch {
      return sendJson(res, 400, { error: '잘못된 요청입니다.' });
    }

    const game = findGame(games, clean(body.game));
    if (!game) return sendJson(res, 404, { error: '등록되지 않은 게임입니다.' });

    const text = clean(body.text);
    if (!text) return sendJson(res, 400, { error: '댓글 내용을 입력해 주세요.' });
    if (text.length > MAX_TEXT) {
      return sendJson(res, 400, { error: `댓글은 ${MAX_TEXT}자까지 쓸 수 있습니다.` });
    }

    // 닉네임을 비우면 Guest + 무작위 숫자
    let author = clean(body.author).slice(0, MAX_AUTHOR);
    if (!author) author = 'Guest' + Math.floor(1000 + Math.random() * 9000);

    const comment = { author, text, date: new Date().toISOString() };
    game.comments.push(comment);

    try {
      saveGames(games);
    } catch {
      return sendJson(res, 500, { error: '댓글을 저장하지 못했습니다.' });
    }
    return sendJson(res, 201, comment);
  }

  return sendJson(res, 404, { error: '없는 API 입니다.' });
}

// ===== 정적 파일 =====

function resolveFile(urlPath) {
  if (EXTRA_FILES[urlPath]) return EXTRA_FILES[urlPath];

  if (urlPath.endsWith('/')) urlPath += 'index.html';

  const filePath = path.join(PUBLIC_DIR, urlPath);
  // main/ 밖으로 나가는 경로(../ 등)는 차단
  if (filePath !== PUBLIC_DIR && !filePath.startsWith(PUBLIC_DIR + path.sep)) {
    return null;
  }
  return filePath;
}

function handleStatic(req, res, urlPath) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return send(res, 405, '허용되지 않는 요청입니다.');
  }

  const filePath = resolveFile(urlPath);
  if (!filePath) return send(res, 403, '접근할 수 없습니다.');

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      return send(res, 404, '페이지를 찾을 수 없습니다.');
    }

    const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type, 'Content-Length': stat.size });

    if (req.method === 'HEAD') return res.end();
    fs.createReadStream(filePath)
      .on('error', () => res.destroy())
      .pipe(res);
  });
}

// ===== 서버 =====

const server = http.createServer((req, res) => {
  let url;
  let urlPath;
  try {
    url = new URL(req.url, 'http://localhost');
    urlPath = decodeURIComponent(url.pathname);
  } catch {
    return send(res, 400, '잘못된 요청입니다.');
  }

  if (urlPath.startsWith('/api/')) {
    return handleApi(req, res, url).catch(() => {
      if (!res.headersSent) sendJson(res, 500, { error: '서버 오류가 발생했습니다.' });
    });
  }

  handleStatic(req, res, urlPath);
});

server.listen(PORT, HOST, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
