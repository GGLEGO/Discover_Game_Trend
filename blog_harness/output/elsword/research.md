# 조사 자료: 엘소드 (Elsword)

조사일: 2026-11-24

읽기 전에: 이 자료의 대상은 스팀 앱 ID 237310 으로 올라와 있는 **KOG Games 배급 해외 서비스판**이다. 넥슨이 운영하는 한국 서비스와는 다른 판이며, 아래에서 한국 서비스 이야기는 항목마다 "(한국 서비스)"라고 따로 표시했다. 표시가 없는 내용은 모두 스팀판 이야기다.

## 1. 기본 정보 (스팀판)

- 정식 이름: Elsword [출처1]
- 개발사: KOG [출처1]
- 배급사: KOG Games [출처1]
- 스팀 출시일: 2014년 7월 2일 [출처1]
- 장르(스팀 분류): 액션, 어드벤처, 캐주얼, 대규모 멀티플레이어, RPG, 무료 플레이 [출처1]
- 이용자 지정 인기 태그: Free to Play, Anime, RPG, Action, MMORPG, Massively Multiplayer, Adventure, Multiplayer, Fighting, Side Scroller, PvP, Online Co-Op, Hack and Slash, 2D 등 [출처2]
- 지원 플랫폼: Windows 만 지원. macOS, Linux 는 지원 목록에 없음 [출처1]
- 지원 언어: 영어(인터페이스, 음성, 자막), 포르투갈어(브라질)(인터페이스, 자막), 태국어(인터페이스, 자막). **한국어는 지원 언어 목록에 없음** [출처1][출처2]
- 계정: 제3자 계정 필요. "New or Existing KOG Games account (Supports Linking to Steam Account)" 로 표기 [출처2]
- 안티치트: "Uses Kernel Level Anti-Cheat XIGNCODE3" (커널 수준 안티치트) 로 표기 [출처2]
- 제3자 EULA(Elsword EULA) 동의 필요 [출처2]
- 공식 사이트: https://elsword.koggames.com/ , 고객 지원: https://support.koggames.com/ [출처1]

## 2. 스팀판의 서비스 지역과 한국에서의 접속 가능 여부

- **한국 스팀 상점에서는 제공되지 않는다.** 스팀 상점 API 를 한국 지역(cc=kr)으로 조회하면 `{"237310":{"success":false}}` 가 돌아온다 (2026-11-24 조회) [출처3]
- 한국 지역, 한국어로 상점 페이지를 열면 "이런, 죄송합니다! 해당 작업을 처리하는 도중 오류가 발생했습니다. 이 아이템은 현재 해당 지역에서 제공되지 않습니다." 라는 안내가 나온다 (2026-11-24 조회) [출처4]
- 같은 API 를 지역 코드만 바꿔 조회한 결과 (2026-11-24 조회, 조사자가 직접 확인한 25개 지역 한정) [출처3]
  - 조회되는 지역: 미국, 캐나다, 브라질, 멕시코, 아르헨티나, 태국, 필리핀, 인도네시아, 싱가포르, 베트남, 인도, 호주, 튀르키예
  - 조회되지 않는 지역: 한국, 일본, 대만, 홍콩, 중국, 독일, 영국, 프랑스, 스페인, 이탈리아, 폴란드, 러시아
- KOG Games 공식 사이트(elsword.koggames.com)는 조사자의 접속 환경에서 HTTP 403 과 함께 "ACCESS RESTRICTIONS. This service is not available in your country." 안내 페이지를 돌려줬다 (2026-11-24 조회). 조사자의 접속 국가가 어디로 판정됐는지는 응답에 나오지 않는다 [출처5]
- 스팀 공지의 점검 시간은 미국 태평양 시간(PST/PDT) 기준으로 적혀 있다. 예: "Maintenance: November 18, 2026, 12:00 AM PST ~ 3:00 AM PST" [출처6]
- 스팀 한국어 평가 가운데 한국에서 실행되지 않는다는 내용이 여러 건 있다. 아래는 각각 별개의 평가다 [출처7]
  - "한국에서는 정상적인 방법으로는 플레이가 불가능한 것 같습니다. 시간 날리지 말고 그냥 넥슨이나 네이버 PC게임 찾아가세요." (2021-10-08, 비추천)
  - "왜 한국빼고 다되냐" (2019-10-09, 비추천)
  - "아니 ㅋㅋㅋ게임은 깔리고 실행이 안돼면 어떻게하라는거임? VPN 무조건 써야 하는거임??" (2019-07-06, 비추천)
  - "한국인이라면 VPN은 사드세요..... 제발" (2020-11-09, 추천)
  - "한국어 지원만 해줘라" (2023-01-28, 추천)
  - "북미 한국인들을 위해 한글화를 해주면 좋겠다. 왜 해외진출 한국 게임들은 한국어를 지원하지 않는걸까?" (2019-02-06, 추천)
- (한국 서비스) 넥슨이 elsword.nexon.com 에서 엘소드를 서비스하고 있다. 2026-11-24 조회 시 해당 주소는 2026년 11월 21일자 이벤트 페이지("이름 없는 섬, 연구원 모집")로 넘어갔고, 넥슨캐시 쿠폰과 "네이버 채널링" 이용자 안내가 적혀 있었다. 이 페이지는 스팀판과 무관한 한국 서비스 자료다 [출처8]

## 3. 가격과 요금 방식 (스팀판)

- 기본 플레이 무료 (is_free: true). 스팀 상점에 가격 정보가 없고 "Free to Play / Play Game" 으로 표시된다 (2026-11-24 조회) [출처1][출처2]
- 스팀에 등록된 DLC 와 별도 에디션(패키지)은 확인되지 않았다. 상점 API 응답에 dlc, packages 항목이 없고 상점 페이지에도 DLC 구역이 없다 (2026-11-24 조회) [출처1][출처2]
- 유료 결제는 게임 안의 "Item Mall" 에서 이뤄진다. KOG Games 가 스팀 공지에 거의 매주 Item Mall 갱신 소식을 올리며, 내용은 코스튬 재판매(Reorder Shop), 커스텀 모션, 커스텀 눈 모양, 펫, 하우징 가구 등이다 [출처6]
  - 예: 2026-11-23 공지 "Festive Finds and Holiday Deals" 는 Reorder Shop 의 코스튬 재판매를 알린다 [출처6]
  - 예: 2026-11-09 공지 "Adventure Pup, Incoming!" 은 Item Mall 에 추가된 "Yoolmoo" 를 알린다 [출처6]
- Item Mall 개별 상품의 가격과 결제 통화(캐시 단위)는 스팀 자료에서 확인하지 못했다 ("확인하지 못한 것" 참고)

## 4. 게임 내용 (스팀판 상점 설명 기준)

- 상점 소개: "Elsword is a free-to-play, online action RPG that uses classic side-scrolling game mechanics in an immersive manga inspired world." 횡스크롤 방식의 무료 온라인 액션 RPG 다 [출처1]
- 핵심 플레이: 횡스크롤 벨트스크롤(beat 'em up) 전투로 던전을 도는 방식 [출처1]
- 상점 설명의 주요 특징 [출처1]
  - 협동: 친구와 파티를 맺고 "50개가 넘는" 던전, 마을, 비밀 스테이지를 탐험
  - 캐릭터: "13명"의 캐릭터 가운데 선택, 캐릭터마다 고유한 이야기와 플레이 방식 (상점 설명에 적힌 숫자이며, 현재 게임 안 실제 캐릭터 수와 같은지는 확인하지 못함)
  - PvP: 매치메이킹과 여러 경쟁 모드, 최대 8인 대전
  - 육성: 캐릭터마다 여러 차례 전직, 스킬과 외형 꾸미기
  - 운영: 지속적인 업데이트와 이벤트
- 싱글·멀티: 스팀 분류는 싱글 플레이어, 멀티 플레이어, MMO, PvP, 온라인 PvP, 협동, 부분적 컨트롤러 지원, 가족 공유 [출처1]
- 온라인 접속이 전제인 게임이다. 최근 부정 평가에 "No response from server" 메시지로 게임이 종료된다는 내용이 반복해서 나온다 (5절 참고) [출처9]

## 5. 평가 (스팀)

모든 수치는 2026-11-24 조회 기준이다.

- 전체 평가(모든 언어): **대체로 긍정적**, 9,733건 가운데 긍정 7,096건, 부정 2,637건. 긍정 비율 약 72.9% (조사자 계산: 7,096 ÷ 9,733) [출처10]
- 영어 평가: 대체로 긍정적, 6,400건 가운데 긍정 4,526건, 부정 1,874건. 스팀 상점 표기로 70% 긍정 [출처2][출처10]
- 한국어 평가: **복합적**, 41건 가운데 긍정 17건, 부정 24건 (긍정 비율 약 41.5%, 조사자 계산) [출처7]
- 최근 30일 평가: **복합적(Mixed)**, 13건 가운데 53% 긍정 [출처2]
- 메타크리틱: 스팀 상점 API 응답에 메타크리틱 점수 항목이 없다 [출처1]
- 스팀 동시 접속자: 조회 시점 181명 (스팀 공식 API, 2026-11-24 조회) [출처11]
- 참고(제3자 집계 사이트 SteamCharts, 2026-11-24 조회): 최근 30일 평균 160.69명, 최근 30일 최고 315명, 역대 최고 2,524명. 2026년 10월 평균 177.85명, 9월 203.01명, 8월 242.47명 [출처12]
  - 주의: 이 숫자는 스팀으로 실행한 이용자만 센다. 스팀 평가에는 스팀 밖의 자체 런처로 플레이했다는 언급이 있어(예: "2000 hours on the launcher and 1000hrs on the steam version", 2026-09-06 평가), 게임 전체 이용자 수와는 다를 수 있다 [출처9]

## 6. 이용자 반응 (스팀 평가에서 옮김)

아래는 스팀 평가 원문에서 옮긴 것이고, 각 줄은 서로 다른 평가 한 건이다. 괄호 안은 작성일, 추천 여부, 작성자의 스팀 기록 플레이 시간이다. 영어 평가는 조사자가 뜻을 옮겼고 핵심 구절은 원문을 함께 적었다.

참고 집계: 조사자가 최근순 영어 평가 가운데 비추천 100건(2025-06-10 ~ 2026-11-18)과 추천 100건(2025-04-02 ~ 2026-11-04)을 받아 단어를 세어 봤다. 비추천 100건 중 "no response" 가 들어간 평가는 23건, p2w·pay to win·paywall 이 들어간 평가는 15건이었다. 추천 100건 중 combat·gameplay·combo 가 들어간 평가는 16건이었다. 단순 단어 검색이라 문맥은 반영하지 않는다 [출처9]

### 긍정 평가에서 나온 장점

- 전투와 조작감: "It gives off strong MapleStory vibes, but with faster, more action-heavy combat. Leveling is super easy" 메이플스토리 느낌인데 전투가 더 빠르고 액션 비중이 크며 레벨업이 쉽다 (2026-03-26, 추천, 131시간) [출처9]
- 캐릭터 디자인과 연출: "The character designs are cool, the attack effects are awesome looking, and the gameplay is just fun." 다만 같은 평가에서 게임이 오래된 티가 나는 부분이 있다고도 적었다 (2026-01-22, 추천, 358시간) [출처9]
- 복귀 경험: 10년 만에 돌아왔는데 캐릭터가 그대로 남아 있었고, "it's entirely progress able for free" 무료로도 진행할 수 있으며 이벤트로 꾸미기 아이템을 받을 수 있다고 적었다. 채팅창 외 글자가 너무 작다는 불만도 함께 적었다 (2026-09-05, 추천, 49시간) [출처9]
- 신규·복귀 이용자 지원: "Master Class is pretty easy to get with more frequent events to create a new character and jump up in Combat Power" 이벤트 덕에 새 캐릭터를 빠르게 키울 수 있다. 같은 평가에서 돈을 많이 쓰는 것은 권하지 않는다고 적었다 (2026-11-04, 추천, 211시간) [출처9]
- 가볍게 하기 좋음: "If you're looking for a comfort game that can be played casually ... this is it" 혼자 해도 괜찮다고 적었다 (2025-08-02, 추천, 2시간) [출처9]
- 콘텐츠 종류: 혼자 하거나 친구와 하거나, PvE 던전을 돌거나 PvP 랭크를 올리는 등 플레이 방식이 여러 가지라고 적었다 (2026-02-14, 추천, 165시간) [출처9]
- 한국어 평가: "오래된 게임임을 감안하면 꽤 잘만들었다. 타격감도 괜찮고 시스템도 그렇게 어렵지 않다. 다만 2019년에 플레이하기에는 해상도가 너무 낮고 오래된 느낌이 많이 난다." (2019-02-06, 추천, 1시간) [출처7]

### 부정 평가에서 나온 단점

- 접속 끊김("No response from server")
  - "You get kicked out of the game every few minutes with a message that says 'no response from server'." 게임 자체는 좋지만 지금 상태로는 첫 던전도 끝내기 어렵다고 적었다 (2026-06-29, 비추천, 4시간) [출처9]
  - 스팀판과 공식 사이트 설치판을 모두 써 보고 백신, 가상 머신, 원격 데스크톱, VPN 프로그램을 다 지워도 같은 메시지가 떴다고 적었다 (2026-09-24, 비추천, 0시간) [출처9]
  - VPN 과 디스코드 등 화면 공유 프로그램이 설치돼 있으면 3분쯤 뒤 끊긴다고 들었고, 시작 프로그램에서 빼도 해결되지 않았다고 적었다 (2026-05-13, 비추천, 39시간) [출처9]
  - 개발사 답변(같은 문구가 여러 평가에 달림): "Virtual Machine Software such as Teamviewer can cause connection issues with the game. Please disable or remove it from your PC" 해결되지 않으면 my.koggames.com/support 로 문의하라는 안내 (2026-08-18, 08-23, 09-02 평가에 대한 답변) [출처9]
- 커널 수준 안티치트: XIGNCODE3 가 게임 실행 전에 커널 모드 드라이버를 올리며, 이를 위해 보안 기능을 꺼야 한다는 점을 문제 삼았다 (2026-08-14, 비추천, 1시간) [출처9]
- 과금 부담(이용자 주장)
  - "Pay-to-Win ... Skin give stats & not permanent if you dnt play the gacha ice burner which cost you $$" 레이드는 장비를 갖춘 파티가 필요하고, 재료 수급에 시간 제한이 있으며, 스탯이 붙는 코스튬이 유료 뽑기(아이스 버너)에서 나온다고 적었다 (2026-01-24, 비추천, 267시간) [출처9]
  - 강화 비용과 신규 뽑기 코스튬에 따른 파워 인플레이션, 캐릭터 간 성능 격차를 지적했다 (2025-08-22, 비추천, 7,240시간) [출처9]
  - 초반은 장비를 그냥 받아 한 방에 다 잡다가 엔드게임에서 결제 장벽을 만난다고 적었다. "until you hit end-game where they paywall you to progress further" (2026-03-05, 비추천, 12시간) [출처9]
  - 반대 의견도 있다: "There are microtransactions, but they didn't feel pay-to-win to me." (2026-03-26, 추천, 131시간) [출처9]
  - 반대 의견: "this game is NOT P2w by the way" 라고 하면서도 꾸미기 아이템 가격이 지나치게 비싸다고 적었다. "the cash shop is despicable" (2025-06-09, 추천, 3시간) [출처9]
  - 추천 평가 안의 불만: 강화가 힘들고 아이스 버너 확률이 낮으며 기간제 아이템이 여전히 많다고 적었다 (2025-11-07, 추천, 20시간) [출처9]
  - 한국어 평가: "재미는 있다. 하지만 예나 지금이나 여전히 유저에게 과금을 요구하고 있다. 인간적으로 스킬 슬롯이 900캐시인 건 비싸다고 본다." (2014-11-25, 추천, 287시간. 2014년 평가라 현재 가격과 다를 수 있음) [출처7]
  - 한국어 평가: "필드화 / 고인물화 / 낯선 그래픽 / 캐시와 포인트 아이템의 스펙격차" (2019-08-27, 비추천, 1시간) [출처7]
- 초중반 구간 인구 부족: "no on is playing in mid game everyone who still plays is in end game" 도와줄 친구 무리가 없으면 피하라고 적었다 (2026-04-26, 비추천, 187시간) [출처9]
- 반복 사냥 부담: "this game is a true grindfest. Just to get to 3 million power was so much work." 추천 평가지만 시간을 많이 요구한다고 적었다 (2025-04-27, 추천, 539시간) [출처9]
- PvP: 상대가 끊겨 보이는 지연 문제와 스탯 차이를 지적하고, 스탯을 동일하게 맞춰 달라고 적었다 (2026-08-02, 비추천, 0시간) [출처9]
- 컨트롤러와 음성: "부분적 컨트롤러 지원"으로 표시돼 있지만 컨트롤러 입력이 되지 않았고, 영어 음성 지원 표시와 달리 스토리 대사는 한국어 음성이었다고 적었다 (2026-01-12, 추천, 3시간) [출처9]
- 고객 지원: 계정이 잠긴 뒤 비밀번호 메일이 오지 않았고 문의에도 답을 받지 못했다고 적었다 (2026-01-18, 비추천, 1,219시간). 한 이용자의 주장이며 다른 출처로 확인하지 못했다 [출처9]
- 예전과 달라졌다는 반응: "추억 보정으로 하기에는 게임이 아예 달라졌다." (2014-07-22, 추천, 11시간, 한국어 평가) [출처7]

## 7. 사양 (스팀판)

- 스팀 상점에는 **권장 사양만** 적혀 있고 최소 사양은 없다 (2026-11-24 조회) [출처1]
- 권장 사양 [출처1]
  - 운영체제: Windows 10 64비트 이상
  - CPU: Intel Core i5 이상
  - 메모리: 8GB 이상
  - 그래픽 카드: NVIDIA GeForce GTX 1050 이상
  - DirectX: 9.0c 이상
  - 저장 공간: 30GB 이상
- 스팀덱 호환 등급: 스팀의 호환성 조회 응답이 빈 결과(`"results":[]`)였고 상점 페이지에도 등급 표시가 없었다 (2026-11-24 조회). 등급이 매겨져 있지 않은 것으로 보이나 단정하지 않는다 [출처13]
- 컨트롤러: 스팀 분류상 "부분적 컨트롤러 지원" [출처1]

## 8. 최근 동향 (스팀판 공지 기준)

KOG Games 가 스팀 커뮤니티 공지에 패치 노트와 Item Mall 소식을 올린다. 조회한 최근 30건(2026-08-11 ~ 2026-11-23) 기준으로 패치 노트는 매주 한 번꼴로 올라왔다 [출처6]

- 2026-11-23 "Festive Finds and Holiday Deals": Item Mall 갱신, Reorder Shop 코스튬 재판매 [출처6]
- 2026-11-18 "November 18th Patch Notes": 새 PvP 리그 시작, 거래 게시판에서 세트 아이템을 묶음으로 사고파는 기능 추가, 캐릭터·던전 버그 수정 [출처6]
- 2026-11-04 "November 4th Patch Notes": 네뷸론(Nebulon) 지역에 새 던전 "Methane Mining Transport Route" 추가(입장 조건 Lv.99, 전투력 1,200,000 이상, 1인), 파티 찾기 기능 개선 [출처6]
- 2026-10-21 "October 21st Patch Notes": 거래 게시판에 시세 조회 탭 추가, 2026 핼러윈 이벤트(10월 21일 ~ 11월 3일) [출처6]
- 2026-09-23 "September 23rd Patch Notes": 네뷸론 레이드 4번째·5번째 던전 "Operation Undertow: Alpha & Omega" 추가, 엘 하우스(하우징) 개편 이벤트 [출처6]
- 2026-09-09 "September 9th Patch Notes": 네뷸론 지역 캠프 "Camp: Subsector F" 와 네뷸론 레이드 추가 [출처6]
- 2026-08-26 "August 26th Patch Notes": 새 지역 네뷸론과 던전 "Methane Loading Dock" 추가, PvP 리그 초기화 [출처6]
- 2026-08-12 "August 12th Patch Notes": "Doom Aporia" 레이드에 1인용 솔로 모드 추가(전투력 120만, 입장 횟수 제한 없음) [출처6]
- 신규·복귀 지원 성격의 이벤트: "Quick Start Event", "Combat Power Boost Event", "+11 Submergence of Abyss Weapon Provision Event" (모두 2026-07-29 ~ 2026-10-20), "Hedgehog's Attendance Event" (2026-11-04 ~ 2026-12-29) [출처6]
- 논란: 운영 관련 논란을 다룬 공식 발표나 매체 기사는 찾지 못했다. 이용자 불만(접속 끊김, 안티치트, 과금)은 6절에 평가 단위로 옮겼다
- (한국 서비스) 넥슨 페이지에 2026년 11월 21일 오프라인 행사 이후 시작된 사전 등록 이벤트("이름 없는 섬, 연구원 모집", "키림 티징 영상", 12월 2일까지)가 올라와 있다. 스팀판에 같은 내용이 언제 들어오는지는 확인하지 못했다 [출처8]

## 9. 비슷한 게임

스팀 평가에서 이용자가 직접 비교 대상으로 든 게임이다. 수치는 2026-11-24 조회.

- **그랜드체이스(GrandChase)**: 같은 개발사 KOG, 무료, 스팀 출시 2021-07-27, 스팀 전체 평가 26,353건 "복합적". 한국 스팀 상점에서 조회되고 한국어를 지원한다. 평가에서 "If you played grand chase, its basically the step above that game" 으로 언급됨 (2026-06-29 평가) [출처14][출처9]
- **던전 파이터 온라인(Dungeon Fighter Online)**: 개발·배급 Neople, 무료, 스팀 출시 2016-08-09, 스팀 전체 평가 5,746건 "복합적". 한국 지역 조회 시 success:false. 평가에서 같은 횡스크롤 MMO 로 비교됨 (2026-04-13 평가) [출처14][출처9]
- **메이플스토리(MapleStory)**: 개발 NEXON Korea, 스팀 배급 Nexon America, 무료, 스팀 출시 2012-08-09, 스팀 전체 평가 16,587건 "복합적". 한국 지역 조회 시 success:false. 평가에서 "strong MapleStory vibes" 로 언급됨 (2026-03-26 평가) [출처14][출처9]

## 확인하지 못한 것

- **스팀판의 서버 지역 이름**: 스팀 상점 자료에 서버 지역(북미, 인터내셔널 등)이 명시돼 있지 않다. 단서는 점검 시간이 미국 태평양 시간 기준이라는 점 [출처6], 지원 언어가 영어·브라질 포르투갈어·태국어라는 점 [출처1], 한 평가가 실행 파일 이름을 "xldr_elsword_na_loader_x64.exe" 라고 적은 점 [출처9] 정도다. 공식 사이트가 접속 제한으로 열리지 않아 공식 확인은 못 했다
- **한국에서 VPN 등 우회로 실제 접속이 되는지, 약관상 허용되는지**: 한국어 평가에 VPN 언급이 있으나 2019~2020년 글이고, 현재 가능 여부와 약관 위반 여부는 확인하지 못했다. 글에서 우회 방법을 권하는 근거로 쓰기 어렵다
- **한국에서 막힌 이유**: 스팀은 "이 지역에서 제공되지 않습니다" 라고만 안내한다. 넥슨 한국 서비스와의 지역 구분 때문이라는 공식 설명은 찾지 못했다
- **지역 제공 범위 전체**: 조사자가 조회한 25개 지역 결과만 있다. 스팀판이 제공되는 국가 전체 목록은 확인하지 못했다. 유럽 지역이 조회되지 않는 이유와 유럽용 별도 서비스 유무도 확인하지 못했다
- **Item Mall 상품 가격, 캐시 단위, 확률형 아이템(아이스 버너)의 확률**: 스팀 자료에 없고 공식 사이트가 열리지 않았다. 이용자 평가의 주장만 있다
- **최소 사양**: 스팀 상점에 권장 사양만 있다
- **스팀덱 호환 등급**: 스팀 응답이 빈 값이었다
- **메타크리틱 등 외부 점수**: 스팀 API 응답에 없었고 따로 찾지 못했다
- **예상 플레이 시간**: 끝이 정해지지 않은 온라인 게임이고, 근거로 삼을 공식 자료를 찾지 못했다
- **현재 플레이 가능한 캐릭터 수와 던전 수**: 상점 설명의 "13명", "50개 이상"은 갱신 시점을 알 수 없어 현재 수치와 같은지 확인하지 못했다
- **원작(한국 서비스)의 최초 출시일과 서비스 이력**: 이번 조사에서는 넥슨 페이지가 운영 중이라는 것만 확인했다. 한국 출시 연도 등은 출처를 확보하지 못해 적지 않았다
- **"No response from server" 문제의 원인과 발생 비율**: 개발사는 평가 답변에서 가상 머신·원격 제어 프로그램과의 충돌을 원인으로 들었지만, 해당 프로그램을 지워도 같았다는 평가가 있어 원인을 단정할 수 없다. 전체 이용자 중 얼마나 겪는지도 알 수 없다
- **레딧 반응**: 자동 접근이 막혀 있어 조사하지 않았다
- **주요 게임 매체의 최근 기사**: 찾아보지 못했다. 이 자료의 이용자 반응은 스팀 평가에만 근거한다

## 출처

1. 스팀 상점 API, Elsword 앱 정보 (미국 지역, 영어) - https://store.steampowered.com/api/appdetails?appids=237310&cc=us&l=english (2026-11-24)
2. 스팀 상점 페이지, Elsword (미국 지역, 영어) - https://store.steampowered.com/app/237310/Elsword/?cc=us&l=english (2026-11-24)
3. 스팀 상점 API, 지역별 조회 (cc 값을 kr, us, jp, de, gb, br, th, tw, cn, fr, es, ph, id, in, au, ca, mx, ar, sg, hk, vn, ru, tr, pl, it 로 바꿔 조회) - https://store.steampowered.com/api/appdetails?appids=237310&cc=kr&l=korean (2026-11-24)
4. 스팀 상점 페이지, Elsword (한국 지역, 한국어) 지역 제한 안내 - https://store.steampowered.com/app/237310/Elsword/?cc=kr&l=koreana (2026-11-24)
5. KOG Games 엘소드 공식 사이트와 접속 제한 안내 페이지 - https://elsword.koggames.com/ , https://img.koggames.com/maintenance/access-restrictions.html (2026-11-24)
6. 스팀 커뮤니티 공지(KOG Games 작성), 스팀 뉴스 API 로 최근 30건 조회 - https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=237310&count=30 , 공지 목록 https://steamcommunity.com/app/237310/allnews/ (2026-11-24)
7. 스팀 이용자 평가, 한국어 41건 - https://store.steampowered.com/ajaxappreviews/237310?json=1&language=koreana&filter=recent&num_per_page=100&purchase_type=all (2026-11-24)
8. (한국 서비스) 넥슨 엘소드 공식 사이트, 2026년 11월 21일자 이벤트 페이지 - https://elsword.nexon.com/Events2026/1121/Event (2026-11-24)
9. 스팀 이용자 평가, 영어 최근순 (추천 100건, 비추천 100건, 개발사 답변 포함) - https://store.steampowered.com/ajaxappreviews/237310?json=1&language=english&filter=recent&review_type=negative&num_per_page=100&purchase_type=all , 같은 주소에서 review_type=positive (2026-11-24). 평가 목록 화면은 https://steamcommunity.com/app/237310/reviews/
10. 스팀 이용자 평가 요약, 모든 언어와 영어 - https://store.steampowered.com/ajaxappreviews/237310?json=1&language=all&filter=all&num_per_page=100&purchase_type=all , 같은 주소에서 language=english (2026-11-24)
11. 스팀 공식 API, 현재 접속자 수 - https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=237310 (2026-11-24)
12. SteamCharts, Elsword (제3자 집계 사이트) - https://steamcharts.com/app/237310 (2026-11-24)
13. 스팀 덱 호환성 조회 - https://store.steampowered.com/saleaction/ajaxgetdeckappcompatibilityreport?nAppID=237310&l=english (2026-11-24)
14. 스팀 상점 API 와 평가 요약, 비교 게임 3종 (GrandChase 985810, Dungeon Fighter Online 495910, MapleStory 216150. 미국·한국 지역으로 각각 조회) - https://store.steampowered.com/api/appdetails?appids=985810&cc=us&l=english , https://store.steampowered.com/api/appdetails?appids=495910&cc=us&l=english , https://store.steampowered.com/api/appdetails?appids=216150&cc=us&l=english (2026-11-24)
