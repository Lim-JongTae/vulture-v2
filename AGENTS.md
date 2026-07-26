## 1. 프로젝트 개요 및 기술 스택 (TECH STACK - STRICT)
본 프로젝트는 구글 애드센스 수익 극대화와 모던 UI/UX 리뉴얼을 목표로 합니다. 에이전트는 반드시 아래의 확정된 기술 스택만을 사용해야 합니다.
* **프레임워크:** Nuxt 4 (컴포지션 API 활용), @nuxt/ui v3.
* **스타일링:** TailwindCSS v4, PC/Tablet/Mobile 3단계 반응형(Mobile-First).
* **상태 관리:** Pinia 단일 스토어 (Vuex 절대 사용 금지).
* **데이터 & 인증:** Firebase (Auth, Firestore, FCM), Google/Naver OAuth.
* **이미지 처리:** Firebase Storage 대신 반드시 **Cloudinary CDN**을 연동하여 이미지 최적화 및 로딩 속도를 향상시킬 것.
* **에디터:** Quill 대신 **Tiptap Editor**를 사용하고 커스텀 글래스모피즘 UI를 적용할 것.
* **폼 검증:** Zod + Vee-Validate 조합을 사용할 것.

## 2. 디자인 철학 및 UI/UX 절대 규칙 (DESIGN CONSTRAINTS - HARDCODED)
모든 컴포넌트는 `DESIGN.md`의 규칙을 위반해서는 안 됩니다. Aurora UI, Glassmorphism, Bento UI 개념을 결합하되 아래의 세부 규칙을 엄수하십시오.
* **색상 팔레트 (Monochrome UI):** UI 인터페이스는 흑백 및 회색(Obsidian, Paper, Slate Pill 등)만 사용해야 합니다. **UI 요소에 다른 색상(Chromatic color)을 절대 도입하지 마십시오**.
* **포인트 그라데이션 (Iridescent Fade):** 빛을 발하는 듯한 그라데이션(linear-gradient)은 **오직 Hero 섹션의 배경(미디어 백그라운드)에만 제한적으로 사용**합니다.
* **모서리 반경 (Border Radius):** 중간 둥글기는 없습니다. 
  * 버튼(Button), 태그(Tag): **무조건 75px (Full pill)**.
  * 카드(Card), 이미지(Image), 입력창(Input): **무조건 0px (완전한 직각)**.
* **입체감 제거 (No Elevation):** 모든 Box-shadow 및 그림자 효과 사용을 엄격히 금지합니다. 평면적인 표면(Flat surfaces)과 1px의 얇은 테두리(Hairline borders)로만 계층을 구분하십시오.
* **타이포그래피:** 기본 폰트는 Roobert(대체: Inter/Söhne)를 사용하며, 특정 강조 헤딩에만 Raleway를 사용합니다. 큰 텍스트는 300(Whisper) 또는 400(Anchor) 웨이트를 사용하며 절대 600 이상의 볼드체를 남발하지 마십시오.
* **애니메이션:** 모든 화면 전환 및 색상/투명도 트랜지션에는 `cubic-bezier(0.19, 1, 0.22, 1)` 곡선을 적용하고 지속 시간은 0.8s ~ 1.25s의 여유로운(Patient) 속도로 설정하십시오.

## 3. 수익화 및 컴포넌트 특화 규칙 (COMPONENTS & REVENUE)
* **AdSense 전략:** `AdUnit` 컴포넌트를 활용하여 사용자 경험을 해치지 않고 글래스모피즘 디자인과 어우러지도록 전략적으로 배치할 것.
* **동적 모달 시스템:** 독수리 먹이주기 행사 모달(`ModalEvent`)과 설문조사(`ModalSurvey`)는 코드 상단의 주석 스위치 변수(예: `const IS_EVENT_ACTIVE = false`)를 통해 즉시 켜고 끌 수 있도록 설계할 것.
* **에러 핸들링:** Firebase의 영문 에러 코드는 반드시 한글 커스텀 에러 매퍼를 통해 사용자 친화적으로 출력할 것.
* **시각 효과:** 로딩 뷰(`LoadingView`)에는 독수리 로딩 애니메이션을, 배경과 푸터에는 기하학적 패턴 SVG(산맥, 비행 V자 등)를 반영할 것.

## 4. 검증 및 작업 프로세스 (VERIFICATION & WORKFLOW)
* **Phase 단위 작업:** `task.md`에 명시된 Phase 0 ~ Phase 6의 순서를 준수하여 작업을 진행할 것.
* **시각적 검증 필수:** 디자인 및 레이아웃이 변경되면 내장 브라우저 서브 에이전트를 통해 렌더링 스크린샷을 찍고, 0px 카드 모서리와 75px 버튼 규칙, 그림자 제거 규칙이 잘 적용되었는지 자체 검증(Self-Validation)할 것.
* **MCP 데이터 연동:** 서브 에이전트를 통해 수집한 '국내 독수리 생태 및 먹이주기' 정보는 `about.vue` 및 블로그 섹션에 자연스럽게 배치할 것.

## 5. 기획 및 설계 문서 참조 (REFERENCES & PLANNING DOCS)
* **문서 위치:** 프로젝트의 세부 디자인 가이드(`DESIGN.md`), 작업 계획서(`task.md`), 구현 계획서(`implementation_plan.md`) 등은 모두 `/docs` 폴더 내에 위치해 있습니다.
* **사전 필독(Read First):** 에이전트는 새로운 컴포넌트를 개발하거나 다음 Phase를 진행하기 전에, 반드시 `/docs` 폴더 안의 기획 문서들을 먼저 읽고 컨텍스트와 규칙을 완벽히 파악한 뒤 코드를 작성해야 합니다.
