# LemonDouble Design System

## 1. Visual Theme & Atmosphere

LemonDouble Design System은 개인 프로젝트 전반에 일관된 브랜드 아이덴티티를 부여하기 위한 다크 모드 기반 디자인 시스템이다. 로고에서 추출한 골든 옐로우(`#F0B90B`)와 코랄 레드(`#CD6B5E`)를 핵심 액센트로, 로고의 다크 브라운에서 파생된 따뜻한 다크 배경(`#12100E`)을 기반으로 한다. 순수 블랙이 아닌 미세한 따뜻함이 깔린 배경은 로고와 자연스러운 색상 연속성을 만든다.

타이포그래피는 이중 폰트 시스템을 사용한다. 페이지 제목 등 브랜딩 요소에는 8bit 픽셀 폰트 **Galmuri11**을 Bold(700) 전용으로 사용하고, 그 외 본문, 버튼, 태그 등 가독성이 필요한 모든 곳에는 **Pretendard**를 사용한다. 코드에는 고정폭 폰트 **JetBrains Mono**를 사용한다. Galmuri11은 레트로 게임 감성을 부여하면서도 Pretendard와의 조합으로 모던한 느낌을 동시에 유지한다.

**Key Characteristics:**
- 로고에서 추출한 골든 옐로우 + 코랄 레드 듀오톤 액센트
- 로고 다크 브라운 파생 따뜻한 다크 배경 (`#12100E`, 순수 블랙이 아님)
- Galmuri11 Bold(700) 전용 — 페이지 제목(h1-h3), 섹션 레이블, Stat 숫자, 로고 텍스트에만 사용
- Pretendard — 본문, 버튼, 태그 등 코드를 제외한 나머지 전부
- JetBrains Mono — 코드 블록, 인라인 코드
- 다크 모드 단일 테마 (라이트 모드 없음)
- "이 사람 작품이구나" 라고 즉시 알아볼 수 있는 개인 브랜드 시스템

### Brand Images
이 레포지토리의 `images/` 폴더에 있는 원본을 항상 사용한다. 프로젝트에는 아래 GitHub Pages URL에서 받아 복사해 넣는다.

- 다운로드 URL: `https://lemondouble.github.io/lemon-ui/` + 파일 경로
  - 예: `https://lemondouble.github.io/lemon-ui/images/lemon-logo.webp`

| 파일 | 용도 | 사용처 |
|------|------|--------|
| `images/lemon-logo.webp` | 로고 (원형 엠블럼) | Nav 로고, OG 이미지 |
| `images/lemon-avatar.webp` | 아바타 (얼굴 크롭) | 프로필 사진, Avatar 컴포넌트, 댓글 프로필 |
| `images/lemon-character.webp` | 마스코트 (풀샷, 투명 배경) | 히어로 일러스트, 랜딩 페이지, About 페이지 |
| `images/lemon-character-sd.webp` | 마스코트 SD (풀샷, 투명 배경) | 빈 상태, 작은 일러스트 영역. 404·안내 화면에는 [Icon Badge](#icon-badge)를 쓴다 |
| `images/lemon-character-mono.svg` | 마스코트 단색 마크 SVG | 푸터, 워터마크 등 한 가지 색만 쓰는 곳. `fill: currentColor`라서 인라인 SVG나 CSS mask로 쓰면 CSS 색상을 따른다 |
| `images/favicon.ico` | 파비콘 (멀티사이즈 ICO) | 브라우저 탭 아이콘 |
| `images/favicon-32.png` | 파비콘 32x32 PNG | 브라우저 탭 아이콘 (모던 브라우저) |
| `images/apple-touch-icon.png` | Apple Touch Icon 180x180 | iOS 홈 화면 아이콘 |
| `images/favicon-192.png` | 파비콘 192x192 PNG | Android/Chrome 앱 아이콘 |
| `images/favicon-512.png` | 파비콘 512x512 PNG | PWA 아이콘, 스플래시 스크린 |
| `images/twitter-bird.svg` | 트위터 새 로고 SVG | 소셜 링크의 Twitter/X 아이콘 (Simple Icons 대신 사용) |

- 새 포즈나 표정의 마스코트 이미지가 필요하면 [LemonDouble/private-resources](https://github.com/LemonDouble/private-resources)(비공개)의 `character/ld/`, `character/sd/` 설정 시트 5종(마스터 비주얼, 삼면도, 의상 시트, 얼굴 표정, 포즈)을 생성형 AI 참조 이미지로 사용한다.

#### Favicon HTML 스니펫
```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192">
```

### Icons
- **UI 아이콘**: [Lucide](https://lucide.dev/) — 2px stroke, 24x24 기본. 미니멀한 선형 아이콘.
  - CDN: `https://unpkg.com/lucide@1.50.0/dist/umd/lucide.min.js`
  - React: `lucide-react`
  - Size: 기본 20px (본문), 16px (버튼/태그 내), 24px (네비게이션)
  - Stroke width: 2px (기본), 1.5px (큰 사이즈에서)
  - Color: 주변 텍스트 색상을 따른다 (`currentColor`)
- **브랜드 아이콘**: [Simple Icons](https://simpleicons.org/) — GitHub, Discord 등 브랜드 로고 전용.
  - Slack, LinkedIn처럼 브랜드 측 요청으로 삭제된 아이콘도 있으므로, 쓰기 전에 고정한 버전에 해당 아이콘이 있는지 확인한다.
  - CDN: `https://cdn.jsdelivr.net/npm/simple-icons@16.33.0/icons`
  - React: `@icons-pack/react-simple-icons`
  - Color: `var(--color-fg-muted)` 기본, 호버 시 `var(--color-fg)`
  - **예외 — Twitter**: Simple Icons의 X 로고 대신 `images/twitter-bird.svg`(클래식 트위터 새 로고)를 사용한다. `fill: currentColor`로 되어 있어 CSS 색상을 따른다.
- **기술 스택 아이콘**: [devicon](https://devicon.dev/) — 블로그 등 기술 스택 표시 용도 (보조).

## 2. Design Tokens

모든 토큰은 [`src/theme.css`](https://github.com/LemonDouble/lemon-ui/blob/main/src/theme.css) 한 곳에서 정의한다. 토큰 이름은 [Tailwind CSS v4의 테마 변수 규칙](https://tailwindcss.com/docs/theme)(`--color-*`, `--font-*`, `--radius-*`)을 따르므로, Tailwind 프로젝트와 일반 CSS 프로젝트가 같은 이름을 쓴다.

- 토큰에 있는 값을 hex나 rgba로 직접 쓰지 않는다. 값을 바꿀 때 `theme.css` 한 곳만 고치면 되도록 하기 위함이다.
- 토큰에 없는 일회성 값(예: Code Block 헤더 배경)은 해당 컴포넌트 스펙에 적힌 값을 그대로 쓴다.
- 토큰 이름을 프로젝트마다 바꾸지 않는다(`--color-bg`를 `--color-page`로 바꾸는 등).
- `theme.css`에는 토큰 외에 z-index 변수(`--z-*`), 입력 요소 배경 변수(`--field-bg`), 기본 스타일(배경, 글자색, `word-break: keep-all`, 포커스 링)도 들어 있다.

### 적용 방법
- **React + Tailwind CSS v4 (Next.js)**: [`@lemondouble/ui`](https://www.npmjs.com/package/@lemondouble/ui) 패키지를 설치하고 전역 CSS에서 `theme.css`를 import한다. 컴포넌트는 직접 만들지 않고 패키지에서 가져다 쓴다. 생김새와 사용법은 [Storybook](https://lemondouble.github.io/lemon-ui/)에서 확인한다.
- **그 외 Tailwind CSS v4 프로젝트**: `theme.css`의 `@theme` 블록과 `:root` 블록을 전역 CSS에 복사한다.
- **일반 CSS 프로젝트**: `theme.css`의 `@theme` 블록 내용과 `:root` 블록 내용을 모두 `:root { }` 안에 복사한다. `@source`와 `@keyframes`는 Tailwind 전용이므로 옮기지 않는다.
- 어느 경우든 CSS에서 `var(--color-primary)`처럼 참조할 수 있다. Tailwind v4는 `@theme` 변수를 `:root`에도 내보낸다.
- 폰트 CDN의 `@import`는 `@import "tailwindcss"`보다 위에 둔다.

```css
/* Next.js 전역 CSS 예시 */
@import url("https://cdn.jsdelivr.net/npm/galmuri@2.40.3/dist/galmuri.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css");
@import url("https://cdn.jsdelivr.net/npm/@fontsource-variable/jetbrains-mono@5.2.8/index.css");
@import "tailwindcss";
@import "@lemondouble/ui/theme.css";
```

## 3. Color Palette & Roles

각 색상의 의미와 사용처를 설명한다. 값은 [Design Tokens](#2-design-tokens)의 `theme.css`를 따른다.

### Brand (로고에서 추출)
- **Lemon Yellow** `--color-primary`: CTA 버튼, 링크, 강조 텍스트, 활성 상태, 섹션 제목 색상. 호버는 `--color-primary-hover`.
- **Coral Red** `--color-secondary`: 보조 강조, 태그 배경, 인라인 코드 텍스트, 보조 버튼.

### Background & Surface
- **BG Dark** `--color-bg`: 페이지 배경. 로고의 다크 브라운(`#5C4A42`)에서 파생, 미세한 따뜻함.
- **BG Glass** `--color-bg-glass`: 고정 네비게이션의 반투명 배경.
- **Surface** `--color-surface`: 카드, 코드 블록, 입력 필드 배경.
- **Surface Hover** `--color-surface-hover`: Surface 요소 호버 상태.
- **Overlay** `--color-overlay`: 모달 뒤 배경을 가리는 오버레이.

### Border
- **Border** `--color-border`: 카드 테두리, 구분선, 입력 필드 테두리.
- **Border Hover** `--color-border-hover`: 호버 상태의 테두리.

### Text
- **Text Primary** `--color-fg`: 제목, 카드 제목, 주요 텍스트. 순백이 아닌 미세한 따뜻함.
- **Text Secondary** `--color-fg-secondary`: 본문, 설명, 부가 텍스트.
- **Text Muted** `--color-fg-muted`: 메타데이터, 비활성 텍스트, 줄번호, placeholder.
- 모든 텍스트 색상은 BG와 Surface 위에서 대비 4.5:1(WCAG AA) 이상을 유지한다. Text Muted는 이 기준의 하한선이므로 더 어둡게 바꾸지 않는다.

### Accent Dim (배경 틴트용)
- `--color-primary-dim`, `--color-secondary-dim`: 배지, 태그, 활성 항목의 배경.
- `--color-primary-dim-border`, `--color-secondary-dim-border`: 액센트 요소의 테두리, 카드 호버 테두리.

### Semantic
- **Info** `--color-info`: 안내, 정보, 알림 상태.
- **Success** `--color-success`: 정상, 활성, 완료 상태.
- **Warning** `--color-warning`: 경고, 진행 중 상태.
- **Error** `--color-error`: 에러, 삭제, 위험 상태. Danger 버튼의 호버는 `--color-error-hover`.
- 상태마다 틴트 토큰 세 가지를 둔다: `-subtle`(Callout처럼 넓은 영역의 배경), `-dim`(배지, 아이콘 배경), `-dim-border`(테두리).
- 상태는 색만으로 전달하지 않는다. 아이콘, 텍스트 레이블, 툴팁 중 하나를 항상 함께 둔다([WCAG 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)). 액센트가 따뜻한 색에 몰려 있어 Warning은 Primary와, Error는 Secondary와 색만으로는 구분이 어렵기 때문이다.

### Disabled State
- **Opacity**: `0.4` — 모든 비활성 요소에 일괄 적용
- **Cursor**: `not-allowed`
- **Pointer Events**: `none`
- 적용 대상: 버튼, 입력 필드, 토글, 체크박스, 라디오, 셀렉트
- 입력 필드 비활성: 배경 `var(--color-surface)`, 텍스트 `var(--color-fg-muted)` + opacity 0.4

### Focus State
- 전역 포커스 링: `:focus-visible { outline: 2px solid var(--color-focus-ring); outline-offset: 2px; }` 하나로 모든 인터랙티브 요소를 처리한다. 컴포넌트마다 포커스 스타일을 따로 정의하지 않는다.
- `:focus-visible`을 쓰므로 마우스 클릭에는 링이 나타나지 않고, 키보드로 이동할 때만 나타난다.
- 예외 — `overflow: hidden` 컨테이너 안에 꽉 차는 요소(Accordion trigger 등): 링이 잘리지 않도록 `outline-offset: -2px`로 안쪽에 그린다.
- 예외 — 텍스트 입력 요소(Input, Select, Textarea): 클릭해도 `:focus-visible`이 적용되므로 링 대신 `outline: none` + `border-color: var(--color-focus-ring)`로 표시한다.
- 포커스 표시는 주변과 대비 3:1 이상이어야 한다([WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)). 투명도가 낮은 `-dim-border` 토큰은 이 기준을 통과하지 못하므로 포커스 표시에 쓰지 않는다.
- 포커스 색은 노란색(Primary)을 쓰지 않는다. Primary는 이미 활성·선택 상태를 뜻하므로, 포커스까지 노란색이면 "선택된 요소"와 "키보드가 가리키는 요소"가 구분되지 않는다.
- 클릭할 수 있는 요소는 `<button>`, `<a href>`, `<input>` 같은 네이티브 요소로 만든다. `<div onclick>`은 키보드로 포커스를 받을 수 없다.

## 4. Typography Rules

### Font Family
- **Heading** `--font-heading`: `Galmuri11`, fallback: `monospace`
  - CDN: `https://cdn.jsdelivr.net/npm/galmuri@2.40.3/dist/galmuri.css`
- **Body** `--font-sans`: `Pretendard`, fallback: `-apple-system, BlinkMacSystemFont, sans-serif`
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css`
- **Mono** `--font-mono`: `JetBrains Mono Variable`, fallback: `Pretendard`, `monospace`
  - CDN: `https://cdn.jsdelivr.net/npm/@fontsource-variable/jetbrains-mono@5.2.8/index.css`
  - JetBrains Mono에는 한글 글리프가 없으므로, 코드 안의 한글은 Pretendard로 표시된다.

### Galmuri11 사용 규칙
- **반드시 font-weight: 700 (Bold)로만 사용한다.** Regular(400) 사용 금지.
- 적용 범위: 페이지 제목 h1, h2, h3 / 섹션 레이블 (소제목 위 카테고리) / Stat 숫자 (큰 강조 숫자) / Nav·Sidebar 로고 텍스트
- 카드, 모달, Empty State 등 컴포넌트 안의 제목과 탭 레이블은 Pretendard를 사용한다.
- 그 외 어떤 곳에도 Galmuri11을 사용하지 않는다.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero Heading | Galmuri11 | 44px | 700 | 1.2 | 히어로 섹션 메인 제목 |
| Section Title | Galmuri11 | 28px | 700 | 1.3 | 섹션 제목 |
| Sub Title | Galmuri11 | 20px | 700 | 1.4 | 페이지 소제목 (h3) |
| Section Label | Galmuri11 | 12px | 700 | 1.0 | 섹션 위 카테고리 레이블, letter-spacing: 1.5px, uppercase |
| Stat Number | Galmuri11 | 32px | 700 | 1.0 | 숫자 강조 카드 |
| Component Title | Pretendard | 15-17px | 700 | 1.4 | 카드, 모달, Empty State 제목 |
| Body Large | Pretendard | 18px | 400 | 1.7 | 히어로 설명, 긴 본문 |
| Body | Pretendard | 16px | 400 | 1.6 | 표준 본문 |
| Body Small | Pretendard | 14px | 400 | 1.6 | 카드 설명, 테이블 내용 |
| Interactive Text | Pretendard | 14px | 500 | 1.0 | Nav 링크, 탭, 페이지네이션, Breadcrumb 현재 항목 |
| Label / Button | Pretendard | 14px | 600 | 1.0 | 버튼 텍스트, 강조 레이블 |
| Tag / Badge | Pretendard | 12px | 600 | 1.0 | 태그, 배지, Chip |
| Caption / Meta | Pretendard | 12px-13px | 400 | 1.0 | 메타데이터, 줄번호 |
| Inline Code | JetBrains Mono | 13px | 500 | inherit | 인라인 코드 |
| Code Block | JetBrains Mono | 14px | 400 | 1.8 | 코드 블록 |

### Principles
- **Galmuri11은 브랜딩 전용**: 제목과 레이블에서만 사용하여 8bit 감성을 포인트로 부여한다. 본문이나 UI 요소에 Galmuri를 사용하면 가독성이 떨어진다.
- **Pretendard가 기본**: 의심스러우면 Pretendard를 쓴다. 코드(코드 블록, 인라인 코드)만 예외로 JetBrains Mono를 쓴다.
- **Weight 절제**: Galmuri11은 700 단일 weight. Pretendard는 400(본문), 500(링크/탭 등 인터랙티브 텍스트), 600(레이블/버튼), 700(컴포넌트 제목) 네 가지만 사용.
- **한글 줄바꿈**: 전역 CSS의 `body`에 `word-break: keep-all`과 `overflow-wrap: break-word`를 둔다. 한글이 단어 중간에서 끊기지 않고, URL처럼 띄어쓰기 없는 긴 문자열은 넘칠 때만 줄을 바꾼다. `overflow-wrap: anywhere`는 표·flex의 칸 너비 계산까지 바꾸므로 쓰지 않는다.

## 5. Component Stylings

React 프로젝트는 아래 컴포넌트를 `@lemondouble/ui`에서 가져다 쓴다. 이 절은 그 컴포넌트가 따르는 규칙과 이유를 적은 것이며, 패키지에 없는 컴포넌트(Code Block, Table, Accordion 등)를 직접 만들 때도 이 규칙을 따른다.

| 스펙 | 패키지 컴포넌트 |
|------|-----------------|
| Buttons | `Button`, `LinkButton`, `TextLink`, `IconButton`, `buttonClassName()` |
| Cards | `Card` |
| Tags / Badges | `Tag` |
| Inputs, Select, Textarea | `Input`, `Select`, `Textarea`, `Label`, `HelpText`, `FieldError` |
| Segmented Control | `SegmentedControl` |
| Stepper | `Stepper` |
| Copy Field | `CopyField`(강조형), `CopyInline`(인라인형) |
| Callout / Alert | `Callout` |
| Navigation | `AppNav`, `NavLink`, `NavButton`, `AccountMenu`(데스크톱), `NavAccount`(모바일) |
| Avatar | `Avatar` |
| Row List | `RowList`, `Row`, `RowIcon` |
| Toggle | `Switch` |
| Progress Bar | `Progress` |
| Tabs | `Tabs` |
| Dropdown Menu | `DropdownMenu`, `MenuItem`, `MenuSeparator`, `CopyMenuItem` |
| Modal / Dialog | `Modal`, `Dialog` |
| Confirm Dialog | `ConfirmDialog` |
| Toast | `ToastProvider`, `useShowToast`, `ToastMessage` |
| Skeleton Loading | `Skeleton` |
| Spinner | `Spinner`, `ButtonSpinner` |
| Empty State | `EmptyState` |
| File Drop Zone | `FileDropZone`(폼 칸형), `FileDropPanel`(페이지형) |
| Icon Badge, Notice Page | `IconBadge`, `NoticePage`, `NoticeLinks` |

### Buttons

**Primary**
- Background: `var(--color-primary)`
- Text: `var(--color-bg)` (배경색)
- Padding: 10px 20px
- Radius: `var(--radius-lg)`
- Font: Pretendard 14px weight 600
- Hover: background `var(--color-primary-hover)`

**Secondary (Outline)**
- Background: transparent
- Text: `var(--color-secondary)`
- Border: 1px solid `var(--color-secondary-dim-border)`
- Padding: 10px 20px
- Radius: `var(--radius-lg)`
- Font: Pretendard 14px weight 600
- Hover: background `var(--color-secondary-dim)`

**Ghost**
- Background: transparent
- Text: `var(--color-fg-secondary)`
- Border: 1px solid `var(--color-border)`
- Padding: 10px 20px
- Radius: `var(--radius-lg)`
- Font: Pretendard 14px weight 600
- Hover: border `var(--color-border-hover)`, text `var(--color-fg)`

**Danger**
- 삭제처럼 되돌릴 수 없는 동작을 최종 확인하는 버튼에만 쓴다. 목록 행처럼 같은 버튼이 반복되는 자리에는 쓰지 않는다.
- Background: `var(--color-error)`
- Text: `var(--color-bg)` (배경색)
- Padding: 10px 20px
- Radius: `var(--radius-lg)`
- Font: Pretendard 14px weight 600
- Hover: background `var(--color-error-hover)`. Primary와 달리 밝아진다. 어둡게 하면 텍스트 대비가 4.5:1 아래로 떨어진다.

**Small variant**: font 13px, padding 6px 14px, radius `var(--radius-md)`.

**Icon Button** (아이콘만 있는 버튼)
- 목록 행의 다운로드·공유·삭제, 네비게이션의 알림 토글처럼 아이콘만으로 뜻이 통하는 반복 동작에 쓴다.
- Size: 40x40px, radius `var(--radius-lg)`, background transparent, border 없음
- Icon: Lucide 16px (목록 행, 인라인 동작), 24px (네비게이션)
- Color: `var(--color-fg-muted)`
- Hover: text `var(--color-primary)`, background `var(--color-primary-dim)`
- Destructive (삭제 등) hover: text `var(--color-error)`, background `var(--color-error-dim)`
- `aria-label`은 필수이고, 호버 시 이름을 보여 주는 `title`을 함께 둔다.

### Cards
- Background: `var(--color-surface)`
- Border: 1px solid `var(--color-border)`
- Radius: `var(--radius-xl)`
- Padding: 24px
- Hover: border-color `var(--color-primary-dim-border)`
- Card footer: `border-top: 1px solid var(--color-border)`, padding-top 16px, margin-top 16px

### Tags / Badges
- Font: Pretendard 12px weight 600
- Padding: 4px 10px
- Radius: `var(--radius-full)`
- Primary variant: text `var(--color-primary)`, background `var(--color-primary-dim)`
- Secondary variant: text `var(--color-secondary)`, background `var(--color-secondary-dim)`
- Success variant: text `var(--color-success)`, background `var(--color-success-dim)`
- Warning variant: text `var(--color-warning)`, background `var(--color-warning-dim)`. 진행 중, 횟수 소진처럼 주의가 필요한 상태
- Error variant: text `var(--color-error)`, background `var(--color-error-dim)`. 만료, 잠김처럼 더 쓸 수 없는 상태

### Inputs
- Background: `var(--color-surface)`
- Border: 1px solid `var(--color-border)`
- Radius: `var(--radius-lg)`
- Padding: 10px 16px
- Font: Pretendard 14px
- Text: `var(--color-fg)`
- Placeholder: `var(--color-fg-muted)`
- Focus: border-color `var(--color-focus-ring)`
- 카드, 모달처럼 `var(--color-surface)` 위에 놓일 때는 background를 `var(--color-bg)`로 바꾼다. 배경색이 같으면 1px 테두리만 남아 입력칸이 묻힌다. Select, Textarea와 아래의 Segmented Control, Stepper, Copy Field, Row List에도 같은 규칙을 적용한다.

### Segmented Control
- 폼 값이나 설정 하나를 여러 선택지 중에서 고른다. 아래 내용(화면)을 바꾸는 데는 Tabs를 쓴다.
- 선택지는 한 줄에 들어가는 2~5개까지 쓴다. 그보다 많으면 Select를 쓴다.
- Markup: 컨테이너 `role="radiogroup"`, 항목 `<button type="button" role="radio" aria-checked="true|false">`
- Container: background `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-lg)`, padding 4px, gap 4px. 항목은 같은 너비로 나눈다.
- Item: Pretendard 13px weight 600, padding 8px 0, radius `var(--radius-md)`, color `var(--color-fg-secondary)`. Hover: color `var(--color-fg)`
- Selected: background `var(--color-primary-dim)`, color `var(--color-primary)`
- Small: 목록 행, 툴바처럼 좁은 자리에 쓴다. 내용 너비만큼만 차지하고, padding 3px, gap 2px, Item 12px, padding 4px 12px, radius `var(--radius-sm)`

### Stepper
- 정해진 범위의 정수(일수, 횟수, 분)를 −/+ 버튼으로 조절한다.
- Container: background `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-lg)`, padding 6px. 왼쪽부터 [−] 값 [+]를 둔다.
- Button: 40x40px, radius `var(--radius-md)`, color `var(--color-fg-secondary)`, hover background `var(--color-surface-hover)`. 한 번에 1씩 바뀌면 Lucide `minus`·`plus` 18px, 그보다 크게 바뀌면 "−5", "+5"처럼 바뀌는 양을 Pretendard 14px weight 600으로 적는다.
- 버튼에는 "만료 기간 줄이기"처럼 `aria-label`을 준다.
- Value: Pretendard 18px weight 700 `var(--color-fg)` + 단위 14px `var(--color-fg-secondary)`. 직접 입력할 수 있다(`inputmode="numeric"`, 숫자 외 문자 제거, Enter나 blur로 확정).
- 범위를 넘기려 하면 최솟값·최댓값으로 보정하고 Warning Toast로 이유를 알린다 ("만료 기간은 최대 90일입니다."). 범위를 입력칸 옆에 미리 적어 두지 않는다.
- 빈 값 허용: "제한 없음"처럼 값이 없는 상태가 있으면, 최솟값에서 한 번 더 줄일 때 값을 비우고 그 상태를 placeholder(Pretendard 16px weight 600 `var(--color-fg-secondary)`)로 보여 준다.

### Copy Field
- 링크, 토큰처럼 사용자가 복사해 가는 값을 보여 준다.
- 강조형: 복사가 그 화면의 주 동작일 때 쓴다.
  - Value box: background `var(--color-bg)`, border 1px solid `var(--color-border)`, radius `var(--radius-lg)`, padding 12px 16px, JetBrains Mono 13px, `word-break: break-all`로 값을 전부 보여 준다.
  - 그 아래 margin-top 12px, 오른쪽 정렬로 Primary 복사 버튼(Lucide `copy` 16px + "링크 복사")을 둔다. 함께 쓰는 동작(QR 코드 등)은 왼쪽에 Ghost로 둔다. 모바일에서는 버튼을 같은 너비로 나눈다.
- 인라인형: 여러 정보 중 하나일 때 쓴다.
  - Box: background `var(--color-bg)`, border 1px solid `var(--color-border)`, radius `var(--radius-lg)`, padding 4px 4px 4px 16px
  - 값은 JetBrains Mono 13px 한 줄로 두고 넘치면 말줄임한다. 오른쪽 끝에 Icon Button(Lucide `copy` 16px)을 둔다.
  - 값의 이름("로그인 토큰")은 상자 안이 아니라 위쪽 Label로 둔다.
  - 새로 만든 값을 알릴 때는 Success callout 안에 넣는다. 별도 색 상자를 만들지 않는다.
- 복사 후: 1.5초 동안 아이콘을 `check`로 바꾼다. 강조형은 버튼 문구를 "복사됨"으로, 인라인형은 아이콘 색을 `var(--color-success)`로 바꾼다.
- 클립보드 권한이 없어 복사에 실패하면 직접 복사할 수 있도록, 값에 `user-select: all`을 줘서 한 번 누르면 전체가 선택되게 한다.

### Code Block
- Container: background `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-xl)`
- Header bar: background `rgba(0,0,0,0.15)`, border-bottom 1px solid `var(--color-border)`
- Header에 트래픽 라이트 dots: Error(`var(--color-error)`), Warning(`var(--color-warning)`), Success(`var(--color-success)`)
- Body: JetBrains Mono 14px, line-height 1.8
- Syntax: keyword → `var(--color-primary)`, string → `var(--color-secondary)`, type → `var(--color-success)`, comment → `var(--color-fg-muted)`
- Line numbers: `var(--color-fg-muted)`, 28px 너비, 우측 정렬, margin-right 20px

### Inline Code
- Font: JetBrains Mono 13px weight 500
- Background: `var(--color-surface)`
- Border: 1px solid `var(--color-border)`
- Padding: 2px 8px
- Radius: `var(--radius-sm)`
- Text color: `var(--color-secondary)`

### Callout / Alert
- Radius: `var(--radius-xl)`
- Padding: 16px 20px
- Font: Pretendard 14px, line-height 1.6
- Primary callout: background `var(--color-primary-dim)`, border `var(--color-primary-dim-border)`
- Secondary callout: background `var(--color-secondary-dim)`, border `var(--color-secondary-dim-border)`
- 상태 callout (Info, Success, Warning, Error): background `var(--color-{상태}-subtle)`, border `var(--color-{상태}-dim-border)`
- Text: `var(--color-fg)`
- Icon: Lucide 20px, 텍스트 왼쪽, gap 12px. Primary·Secondary는 내용에 맞는 아이콘을 액센트 색으로, 상태 callout은 상태 색으로 Info `info`, Success `circle-check`, Warning `triangle-alert`, Error `circle-alert`를 쓴다.
- Error callout에는 `role="alert"`를 줘서 스크린 리더가 바로 읽게 한다.

### Navigation
- Height: 56px
- Background: `var(--color-bg-glass)` + `backdrop-filter: blur(12px)` (글래스 효과)
- Border-bottom: 1px solid `var(--color-border)`
- Position: sticky top 0
- Logo: 32px, radius `var(--radius-lg)`
- Logo text: Galmuri11 Bold 16px, color `var(--color-primary)`
- Links: Pretendard 14px weight 500, color `var(--color-fg-secondary)`
- Active link: color `var(--color-primary)`, background `var(--color-primary-dim)`
- CTA: Small Primary button. 링크 묶음 오른쪽에 margin-left 8px을 두고 놓는다.
- 아이콘 동작: CTA 오른쪽에 세로 구분선(1px x 20px, `var(--color-border)`, 좌우 margin 12px)을 두고, 그 오른쪽에 Icon Button(24px 아이콘)으로 묶는다. 텍스트 링크 사이에 섞지 않는다.
- 계정 메뉴: 로그인하는 앱은 프로필 수정, 알림 설정, 로그아웃처럼 계정에 딸린 동작을 아이콘으로 늘어놓지 않고, 아이콘 동작의 맨 오른쪽에 둔 아바타(32px) 드롭다운 하나로 묶는다. 메뉴 맨 위에 이름(14px weight 500 `var(--color-fg)`, 넘치면 말줄임)과 구분선을 두고, 로그아웃은 구분선 아래 맨 끝에 둔다. 아바타만으로도 내 계정임을 알아볼 수 있고, 상단 바의 아이콘이 늘어나지 않는다.
- Mobile (< 640px): 링크와 CTA를 숨기고 햄버거 버튼(Lucide `menu` 24px, 40x40, `aria-expanded`)을 둔다. 누르면 네비게이션 아래로 메뉴를 세로로 펼치고 아이콘을 `x`로 바꾼다. 좌우 padding은 20px.
  - 알림처럼 자주 쓰는 아이콘 동작은 메뉴에 넣지 않고 상단 바의 햄버거 버튼 왼쪽에 남긴다.
  - 계정 메뉴는 상단 바에 두지 않고 메뉴 맨 아래 계정 줄로 옮긴다. 구분선 아래에 아바타(32px)와 이름(14px weight 600), 그 아래 "프로필 수정"(12px `var(--color-fg-muted)`)을 두고, 이 부분을 누르면 프로필 수정으로 간다. 계정 동작은 줄 오른쪽에 Icon Button(20px 아이콘)으로 둔다. 상단 바에 메뉴 버튼이 둘(아바타, 햄버거) 생기지 않게 하고, 계정 영역이 한 줄로 끝나게 하려는 것이다.
  - CTA는 버튼 모양을 버리고 메뉴 맨 위의 일반 항목으로 둔다. 메뉴 항목은 모두 같은 모양(min-height 40px, padding 0 14px, radius `var(--radius-md)`)이다.
  - 계정 메뉴가 없는 앱에서 로그아웃처럼 아이콘만으로는 뜻이 약한 동작은 메뉴 맨 아래 텍스트 항목으로 둔다.
  - 링크가 없는 한 화면짜리 앱은 햄버거 버튼과 메뉴를 두지 않고, 동작 버튼을 모바일에서도 상단 바에 그대로 둔다. 링크가 없으면 데스크톱의 세로 구분선도 두지 않는다.

### Table
- Container: border 1px solid `var(--color-border)`, radius `var(--radius-xl)`, overflow hidden
- Header: background `var(--color-surface)`
- th: Pretendard 14px weight 600, color `var(--color-fg-secondary)`, padding 12px 16px
- td: Pretendard 14px, color `var(--color-fg)`, padding 12px 16px
- Row divider: border-bottom 1px solid `var(--color-border)` (마지막 행 제외)
- Row hover: background `var(--color-surface)`

### Row List
- 파일, 사용자, 설정처럼 같은 구조의 항목을 세로로 나열한다. 열 이름이 필요한 데이터 비교에는 Table을 쓴다.
- Container: Card와 같다. background `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-xl)`, overflow hidden. 행 사이에 border-top 1px solid `var(--color-border)`
- Row: flex, align center, gap 12px, padding 16px 20px (모바일 16px). 왼쪽부터 세 칸을 둔다.
  - 앞 요소: 40px 아이콘 상자(radius `var(--radius-lg)`, background `var(--color-primary-dim)`, Lucide 20px `var(--color-primary)`), 32px 아바타, 16px 아이콘(`var(--color-fg-muted)`) 중 하나
  - 본문: 제목 Pretendard 14px weight 600 `var(--color-fg)`, 넘치면 말줄임. 부가 정보는 그 아래 12px `var(--color-fg-muted)`이고, 여러 정보는 ` · `로 잇는다. 별명 같은 강조 레이블은 제목 위에 12px weight 600 `var(--color-primary)`로 둔다.
  - 뒤 요소: 상태 텍스트(12px `var(--color-fg-secondary)`), Tag, Dropdown Menu 버튼, `chevron-right` 16px 중 필요한 것
- Compact: 관리자 목록처럼 행이 많을 때 Row padding 10px 16px
- 누를 수 있는 행: 행 전체를 링크나 버튼으로 만들고 hover background `var(--color-surface-hover)`. 행 안의 메뉴를 눌러도 행 링크로 이동하지 않게 한다.
- 머리글(선택): 맨 위에 안내 줄(Pretendard 12px `var(--color-fg-muted)`, padding 8px 16px, border-bottom)을 둔다. 검색 결과처럼 개수나 할 일을 알려 줄 때 쓴다.
- 최대 높이(선택): 목록이 길어질 수 있으면 행 부분에만 max-height를 주고 안에서 스크롤한다. 머리글은 고정한다.
- 상태가 끝난 항목(만료 등)은 아이콘 상자를 `var(--color-border)` 배경과 `var(--color-fg-muted)` 아이콘으로, 제목을 `var(--color-fg-muted)`로 낮춘다.

### Toggle
- Markup: `<button type="button" role="switch" aria-checked="true|false">`
- Track: 44x24px, radius `var(--radius-xl)`
- Off: background `var(--color-border)`
- On: background `var(--color-primary)`
- Thumb: 18px, white, 3px inset

### Progress Bar
- Track: height 6px, background `var(--color-border)`, radius 3px
- Fill: gradient `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`

### Avatar
- Size: 36px
- Radius: 50%
- Border: 2px solid `var(--color-bg)` (배경색, 스택 겹침용)
- Stack: margin-left -8px (첫번째 제외)
- 사진이 없거나 불러오지 못하면 이름의 첫 글자를 background `var(--color-primary-dim)`, color `var(--color-primary)`, weight 600으로 보여 준다.

### Status Dot
- Size: 8px
- Radius: 50%
- Info: `var(--color-info)`, Success: `var(--color-success)`, Warning: `var(--color-warning)`, Error: `var(--color-error)`
- 점만 단독으로 쓰지 않는다. 옆에 텍스트 레이블을 두거나, 최소한 `title`과 `aria-label`로 상태 이름을 제공한다.

### Tabs
- Container: border-bottom 1px solid `var(--color-border)`
- Tab item: Pretendard 14px weight 500, color `var(--color-fg-muted)`
- Active: color `var(--color-primary)`, border-bottom 2px solid `var(--color-primary)`
- Hover: color `var(--color-fg-secondary)`
- Padding: 10px 20px

### Pagination
- Item: min-width 36px, height 36px, radius `var(--radius-lg)`
- Font: Pretendard 14px weight 500, color `var(--color-fg-secondary)`
- Hover: background `var(--color-surface)`, border 1px solid `var(--color-border)`, color `var(--color-fg)`
- Active: background `var(--color-primary)`, color `var(--color-bg)`, weight 600
- Disabled: opacity 0.4, pointer-events none
- Ellipsis: color `var(--color-fg-muted)`
- Gap: 4px
- **Page Jump**: 현재 페이지가 editable input. 우상단에 연필 아이콘(16px circle, `var(--color-surface)` 배경, `var(--color-border)` 테두리) badge로 편집 가능 표시. Focus 시 배경 `var(--color-surface)`, 텍스트 `var(--color-primary)`, border `var(--color-focus-ring)`로 전환.
- **Page Jump 동작**:
  - 숫자만 허용 (`inputmode="numeric"` + 입력 시 non-digit 제거)
  - Focus 시 값을 비워 즉시 입력 가능한 상태로 전환
  - 빈 값으로 blur되면 원래 페이지 번호로 복원 (의도치 않은 포커스로 값이 사라지는 것 방지)
  - Enter 키로 확정 (blur 트리거)

### Breadcrumb
- Font: Pretendard 14px
- Links: color `var(--color-fg-muted)`, hover color `var(--color-primary)`
- Separator: `/`, color `var(--color-fg-muted)`, font-size 12px
- Current: color `var(--color-fg)`, weight 500

### Dropdown Menu
- Container: background `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-lg)`, padding 4px
- Item: Pretendard 14px, padding 8px 12px, radius `var(--radius-md)`
- Item hover: background `var(--color-surface-hover)`, color `var(--color-fg)`
- Active item: color `var(--color-primary)`
- Destructive item: color `var(--color-error)`
- Trigger: Icon Button + Lucide `ellipsis-vertical` 16px. 계정 메뉴는 아이콘 대신 아바타를 넣는다. `aria-haspopup="menu"`, `aria-expanded`를 준다.
- Position: 트리거 아래 4px, 오른쪽 정렬, width 176px, z-index `var(--z-dropdown)`. 메뉴는 `role="menu"`, 항목은 `role="menuitem"`
- Item icon: Lucide 16px, 글자 왼쪽, gap 10px. 아이콘을 쓰면 모든 항목에 둔다. 기본 color `var(--color-fg-secondary)`
- Separator: height 1px, background `var(--color-border)`, margin 4px 0. 삭제처럼 위험한 항목은 구분선 아래 맨 끝에 둔다.
- 닫기: 항목을 고를 때, 메뉴 바깥을 누를 때, ESC를 누를 때 닫는다.
- 복사 항목: 누르면 아이콘을 `check`로, 문구를 "복사됨"으로, 색을 `var(--color-success)`로 0.8초 동안 바꾼 뒤 메뉴를 닫는다.

### Select (Native)
- appearance: none
- Background: `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-lg)`. `var(--color-surface)` 위에서는 Inputs처럼 `var(--color-bg)`
- Padding: 10px 40px 10px 16px (우측에 화살표 공간)
- Font: Pretendard 14px
- Focus: border-color `var(--color-focus-ring)`

### Checkbox
- Size: 18px, radius `var(--radius-sm)`
- Unchecked: background `var(--color-surface)`, border `var(--color-border)`
- Checked: background `var(--color-primary)`, border `var(--color-primary)`, 체크 아이콘 (배경색)
- Focus: 전역 포커스 링

### Radio
- Size: 18px, radius 50%
- Unchecked: background `var(--color-surface)`, border `var(--color-border)`
- Checked: border `var(--color-primary)`, inner dot `box-shadow: inset 0 0 0 4px var(--color-primary)`
- Focus: 전역 포커스 링

### Textarea
- 기본 Input과 동일한 스타일 (`var(--color-surface)` 위의 배경 규칙 포함)
- min-height: 100px
- resize: vertical
- line-height: 1.6

### Modal / Dialog
- Overlay: background `var(--color-overlay)`, `backdrop-filter: blur(4px)`
- Container: background `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-xl)`, max-width 480px
- Header: padding 20px 24px, border-bottom, title Pretendard 15px weight 700
- Close button: 32px, border 1px solid `var(--color-border)`, radius `var(--radius-md)`
- Body: padding 24px, Pretendard 14px, color `var(--color-fg-secondary)`
- Footer: padding 16px 24px, border-top, 버튼 우측 정렬
- 닫기: ESC, 바깥 클릭, 닫기 버튼으로 닫는다. 저장·확정 처리 중처럼 닫히면 안 되는 동안에는 셋 다 막는다(`dismissible={false}`).

### Confirm Dialog (Destructive)
- 삭제처럼 되돌릴 수 없는 동작을 실행하기 직전에 한 번 더 확인한다. 그 외의 확인에는 쓰지 않는다.
- Overlay·Container: Modal과 같다. 단 max-width 460px, padding 24px이고 헤더·푸터 구분선과 닫기(X) 버튼을 두지 않는다. ESC, 바깥 클릭, 취소 버튼으로 닫는다.
- Icon: 40px, radius `var(--radius-lg)`, background `var(--color-error-dim)`, border 1px solid `var(--color-error-dim-border)`, Lucide `triangle-alert` 20px `var(--color-error)`
- Layout: 아이콘 왼쪽, 텍스트 오른쪽 (gap 16px). 모바일(< 640px)에서는 아이콘을 제목 위로 올린다.
- Title: Pretendard 17px weight 700, 질문형으로 쓴다 ("공유를 삭제할까요?")
- Description: Pretendard 14px, line-height 1.6, color `var(--color-fg-secondary)`. 실행하면 무엇이 사라지는지 적는다.
- Target: 무엇을 지우는지 특정할 수 있으면 반드시 보여 준다. 일괄 삭제처럼 대상을 하나로 특정할 수 없을 때만 생략한다.
  - background `var(--color-bg)`, border 1px solid `var(--color-border)`, radius `var(--radius-lg)`, padding 12px 16px, margin-top 16px
  - 아이콘 18px `var(--color-fg-muted)` + 이름 Pretendard 14px weight 600 `var(--color-fg)` + 부가 정보 12px `var(--color-fg-muted)`
  - 이름은 말줄임 없이 전체를 보여 준다 (`word-break: break-all`)
- Actions: margin-top 24px, 우측 정렬, gap 8px. Ghost "취소" + Danger 버튼(Lucide `trash-2` 16px + 동작 이름). 처리 중에는 아이콘 자리에 Spinner sm을 둔다.

### Toast / Notification
- Container: padding 12px 16px, radius `var(--radius-lg)`, border 1px solid `var(--color-{상태})`
- Background: 화면 위에 떠서 뒤의 내용이 비치지 않도록, 불투명한 surface 위에 dim 틴트를 겹친다. `background: linear-gradient(var(--color-{상태}-dim), var(--color-{상태}-dim)), var(--color-surface);`
- Icon: 20px circle, background `var(--color-{상태}-dim)`, Lucide 12px `var(--color-{상태})`. Info `info`, Success `check`, Warning `triangle-alert`, Error `x`
- Message: Pretendard 14px weight 600, color `var(--color-fg)`
- 상태: Info, Success, Warning, Error. `{상태}` 자리에 `info`, `success`, `warning`, `error`를 넣는다.
- Position: 화면 하단 가운데, bottom 24px, 좌우 여백 16px, z-index `var(--z-toast)`
- Duration: 2.5초 뒤 사라진다. 새 메시지가 오면 앞의 메시지를 바로 바꾼다.
- 스크린 리더: `role="status"` 영역을 미리 두고 그 안에 메시지를 넣는다. 영역을 메시지와 함께 새로 만들면 읽히지 않는다.
- 앱에 하나만 둔다. 컴포넌트마다 두면 status 영역이 여러 개 생기고, transform이 걸린 요소 안에서는 fixed 위치가 그 요소 기준으로 잡혀 토스트가 갇힌다. React 프로젝트는 루트 레이아웃을 `ToastProvider`로 감싸고 `useShowToast()`로 띄운다.

### Tooltip
- Background: `var(--color-fg)`, color `var(--color-bg)`
- Font: Pretendard 12px weight 500
- Padding: 6px 12px, radius `var(--radius-md)`
- Arrow: 5px border trick
- Trigger: text에 border-bottom 1px dashed

### Blockquote
- Border-left: 3px solid `var(--color-primary)`
- Background: `var(--color-primary-dim)`
- Padding: 12px 20px
- Radius: `0 var(--radius-lg) var(--radius-lg) 0`
- Font: Pretendard 15px, line-height 1.7, color `var(--color-fg-secondary)`

### List (ul/ol)
- Padding-left: 24px
- Font: Pretendard 15px, line-height 1.8, color `var(--color-fg-secondary)`
- Marker color: `var(--color-primary)`

### Sidebar Navigation
- Width: 240px, background `var(--color-surface)`, border-right 1px solid `var(--color-border)`
- Logo: Galmuri11 Bold 15px, color `var(--color-primary)`
- Section label: Pretendard 11px weight 600, uppercase, letter-spacing 1px, color `var(--color-fg-muted)`
- Link: Pretendard 14px, padding 8px 12px, radius `var(--radius-md)`
- Active link: background `var(--color-primary-dim)`, color `var(--color-primary)`
- Hover: background `var(--color-surface-hover)`

### Accordion
- Container: border 1px solid `var(--color-border)`, radius `var(--radius-xl)`
- Item divider: border-bottom 1px solid `var(--color-border)`
- Trigger: Pretendard 15px weight 600, padding 16px 20px
- Trigger hover: background `var(--color-surface)`
- Icon: 화살표, open 시 180도 회전
- Body: Pretendard 14px, color `var(--color-fg-secondary)`, padding 4px 20px 16px

### Skeleton Loading
- Background: `var(--color-border)`
- Radius: `var(--radius-md)`
- Animation: pulse (opacity 0.4 → 0.8), 1.5s ease-in-out infinite
- Card container: background `var(--color-surface)` + border `var(--color-border)`

### Spinner
- 작업을 처리하는 중임을 나타낸다. 버튼 제출, 데이터 조회, 영역 로딩에 쓴다.
- Markup: `<span class="spinner" role="status" aria-label="로딩 중">`
- Size: sm 16px (버튼 안), md 24px (기본), lg 40px (영역 로딩)
- Ring: border 두께 size / 8, color `var(--color-border)`, 위쪽 호 `var(--color-primary)`
- Animation: rotate 0.8s linear infinite
- 버튼 안: sm 크기, 색은 `currentColor`(트랙 25%)로 버튼 글자색을 따른다. 버튼에 `aria-busy="true"`를 주고 스피너는 `aria-hidden="true"`로 둔다

### Typing Indicator
- 상대(사람, AI)가 응답을 작성하는 중임을 나타낸다. 채팅, AI 응답 대기 같은 대화형 UI에서만 쓰고, 일반 로딩에는 Spinner를 쓴다.
- Markup: `<div class="typing-indicator" role="status" aria-label="응답 작성 중">` + `<span>` 3개
- Container: background `var(--color-surface)`, border `var(--color-border)`, radius `var(--radius-xl)`, padding 14px 18px
- Dot: 7px, gap 6px, `var(--color-primary)`
- Animation: scale 0.7 → 1, opacity 0.3 → 1, 1.2s ease-in-out infinite, 점마다 0.15s 지연

### Reduced Motion
- `prefers-reduced-motion: reduce`에서도 Spinner와 Typing Indicator는 멈추지 않고 느리게만 돌린다 (Spinner 2.4s, Typing Indicator 3s). 멈추면 진행 중이라는 사실이 전달되지 않는다.

### Empty State
- Container: border 1px dashed `var(--color-border)`, radius `var(--radius-xl)`, padding 64px 32px
- Text-align: center
- Title: Pretendard 17px weight 700
- Description: Pretendard 14px, color `var(--color-fg-muted)`
- CTA: Primary button

### File Drop Zone
- 파일을 끌어다 놓거나 눌러서 고르는 영역이다.
- Container: border 2px dashed `var(--color-border)`, radius `var(--radius-xl)`, 내용 가운데 정렬. Empty State(1px)보다 두껍게 해서 놓을 수 있는 자리임을 드러낸다. Hover: border-color `var(--color-border-hover)`
- Icon: 48px 상자, radius `var(--radius-xl)`, background `var(--color-primary-dim)`, Lucide `upload` 24px `var(--color-primary)`
- 끌어다 놓는 중: border-color `var(--color-primary)`, background `var(--color-primary-dim)`, 제목을 "여기에 놓으세요"로 바꾼다.
- 폼 칸형: 폼의 한 칸일 때 쓴다.
  - 영역 전체가 버튼이고 안에 버튼을 따로 두지 않는다. 폼 제출 버튼과 Primary가 겹치지 않게 하기 위함이다.
  - padding 56px 24px, gap 12px. 제목 Pretendard 14px weight 600, 설명(크기 제한 등) 12px `var(--color-fg-muted)`
  - 파일을 고른 뒤에는 영역을 파일 카드로 바꾼다: background `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-xl)`, padding 16px. 44px 썸네일(이미지가 아니면 파일 형식 아이콘) + 이름 14px weight 600 + 크기·형식 12px `var(--color-fg-muted)` + 오른쪽 끝 제거 버튼(Lucide `x`). 카드를 누르면 다른 파일을 고른다.
- 페이지형: 업로드가 그 화면의 주 동작일 때 쓴다.
  - Empty State처럼 padding 64px 32px, 제목 Pretendard 17px weight 700, 설명 14px `var(--color-fg-muted)`, Primary 버튼을 둔다.
  - 영역 밖이라도 화면 어디에 놓든 파일을 받는다.

### Icon Badge
- Size: 64x64px, radius `var(--radius-xl)`
- Background `var(--color-primary-dim)`, border 1px solid `var(--color-primary-dim-border)`
- Icon: Lucide 32px, stroke 1.5px, color `var(--color-primary)`
- 상황별 아이콘: 찾을 수 없음 `file-x`, 만료 `clock-alert`, 권한 없음 `lock`, 이미 사용됨·완료 `circle-check`

### Notice Page (안내 화면)
- 404, 만료, 권한 없음, 승인 대기처럼 화면 전체가 하나의 안내인 페이지다. 마스코트 이미지는 쓰지 않는다.
- Layout: max-width 520px, 남은 화면 높이의 가운데에 모든 요소를 가운데 정렬한다. 위에서부터 아래 순서로 둔다.
  - Icon Badge, margin-bottom 24px
  - 상태 코드(선택): 404, 403, 500 같은 HTTP 오류일 때만 둔다. Galmuri11 Bold 12px, letter-spacing 1.5px, `var(--color-primary)`, margin-bottom 12px
  - 제목: Galmuri11 Bold 28px (모바일 22px), margin-bottom 12px
  - 설명: Pretendard 14px, line-height 1.6, `var(--color-fg-secondary)`. 한 문단으로 쓰고, 어떻게 해결하는지도 같은 문단에 적는다. 사용자 이름 같은 정보는 카드에 따로 넣지 않고 문장 안에 `<strong>`(`var(--color-fg)`)으로 넣는다.
  - 동작: 설명 아래 margin-top 32px, 세로 gap 16px
    - 해결할 동작(승인 확인 등)이 있으면 Primary 버튼, width 100%, max-width 320px. 동작이 실패하면 버튼 아래 12px `var(--color-error)`로 알린다.
    - 돌아가기, 로그아웃, 프로필 수정 같은 보조 동작은 텍스트 링크(Pretendard 14px `var(--color-fg-secondary)`, hover `var(--color-fg)`). 여러 개면 가로로 gap 16px
    - 해결할 동작이 없으면 Lucide `arrow-left` 16px + "홈으로" 텍스트 링크 하나만 둔다.
- 업로드 완료처럼 아래에 내용이 이어지는 화면은 Icon Badge와 제목만 이 패턴으로 두고, 나머지는 일반 페이지로 구성한다.

## 6. Layout Principles

### Spacing
- Base unit: 4px
- Scale: 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- 컴포넌트 내부: 주로 8-24px
- 섹션 간: 64px (padding top/bottom)
- 히어로: 96px top, 80px bottom

### Grid & Container
- Max content width: 1080px (일반 섹션), 800px (히어로, 텍스트 중심)
- 카드 그리드: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`, gap 16px
- 수평 padding: 32px

### Divider
- `border-top: 1px solid var(--color-border)`
- 섹션 사이에 사용, max-width 1016px, 좌우 auto margin

### Border Radius Scale
- `--radius-sm` (4px): 인라인 코드, 체크박스
- `--radius-md` (6px): 작은 버튼, 드롭다운 항목, 툴팁
- `--radius-lg` (8px): 버튼, 입력 필드, 로고
- `--radius-xl` (12px): 카드, 코드 블록, 테이블, callout, 모달
- `--radius-full` (9999px): 태그, 배지, 히어로 배지
- Circle (50%): 아바타, 상태 점, 토글 thumb

## 7. Depth & Elevation

이 디자인 시스템은 shadow 대신 border 기반 depth를 사용한다.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | 없음 | 페이지 배경 |
| Surface (Level 1) | background `var(--color-surface)` + border `var(--color-border)` | 카드, 코드 블록, 입력 필드 |
| Glass (Level 2) | background `var(--color-bg-glass)` + `backdrop-filter: blur(12px)` | 고정 네비게이션 |
| Hover (Level 1+) | border-color → `var(--color-primary-dim-border)` | 카드 호버 |

**Shadow 미사용 원칙**: 따뜻한 다크 배경 위에서는 shadow보다 border가 더 자연스럽다. 깊이는 배경색 차이(BG → Surface)와 border로 표현한다.

### Z-index Scale

| Token | Value | Use |
|-------|-------|-----|
| `--z-base` | 0 | 기본 콘텐츠 |
| `--z-dropdown` | 100 | 드롭다운 메뉴, 셀렉트 팝업 |
| `--z-sticky` | 200 | 고정 네비게이션, sticky 요소 |
| `--z-overlay` | 300 | 모달 배경 오버레이 |
| `--z-modal` | 400 | 모달 다이얼로그 |
| `--z-toast` | 500 | 토스트 알림 |
| `--z-tooltip` | 600 | 툴팁 |

## 8. Do's and Don'ts

### Do
- Galmuri11은 반드시 `font-weight: 700` (Bold)으로만 사용한다
- Galmuri11은 페이지 제목(h1-h3), 섹션 레이블, Stat 숫자, 로고 텍스트에만 사용한다
- 가독성이 필요한 모든 곳에 Pretendard를 사용한다 (태그, 버튼 포함). 코드에만 JetBrains Mono를 사용한다
- 배경색은 `var(--color-bg)`를 사용한다 (순수 `#000000` 아님)
- 텍스트는 `var(--color-fg)`를 사용한다 (순수 `#FFFFFF` 아님) — 따뜻한 톤 유지
- Primary(`var(--color-primary)`)는 CTA, 링크, 활성 상태 등 "행동 유도" 요소에 사용한다
- Secondary(`var(--color-secondary)`)는 보조 강조, 태그, 인라인 코드에 사용한다
- 태그/배지는 `-dim` 토큰 배경 + 액센트 텍스트 조합을 사용한다
- 카드 호버에는 `border-color: var(--color-primary-dim-border)`를 사용한다

### Don't
- Galmuri11을 Regular(400) weight로 사용하지 않는다
- Galmuri11을 본문, 버튼, 태그, 코드 블록, placeholder 등에 사용하지 않는다
- `#000000` 순수 블랙을 배경에 사용하지 않는다 — 항상 따뜻한 다크 사용
- `#FFFFFF` 순수 화이트를 텍스트에 사용하지 않는다 — 항상 따뜻한 화이트 사용
- Primary와 Secondary를 장식적으로 남용하지 않는다 — 기능적 의미가 있어야 한다
- Shadow를 깊이 표현에 사용하지 않는다 — border와 배경색 차이로 표현한다
- 라이트 모드를 만들지 않는다 — 이 시스템은 다크 모드 전용이다
- 텍스트에 Pretendard 800-900 weight를 사용하지 않는다 — 최대 700
- 브라우저 기본 `alert()`/`confirm()`을 쓰지 않는다. 디자인과 맞지 않고 화면 전체를 멈추게 한다. 삭제 확인은 Confirm Dialog, 입력값 문제는 입력칸 아래 FieldError, 동작 실패는 Error 토스트로 알린다

## 9. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | 단일 컬럼, 히어로 32px, 네비 햄버거 |
| Tablet | 640-1024px | 2컬럼 카드 그리드 시작 |
| Desktop | > 1024px | 풀 레이아웃, max-width 적용 |

### Collapsing Strategy
- Hero heading: 44px → 32px (모바일)
- Section title: 28px → 22px (모바일)
- 수평 padding: 32px → 20px (모바일)
- 카드 그리드: 3컬럼 → 2컬럼 → 1컬럼
- 네비게이션: 수평 링크 → 햄버거 메뉴 (모바일)
- Stats: 4컬럼 → 2x2 그리드 (모바일)
- 섹션 간격: 64px → 48px (모바일)

### Touch Targets
- 버튼 최소 높이: 40px
- 탭/링크 padding: 최소 6px 14px
- 토글: 44x24px (충분한 터치 영역)

## 10. Agent Prompt Guide

### Token Setup
- 작업을 시작할 때 [적용 방법](#적용-방법)대로 토큰을 연결한다. Next.js 프로젝트는 `@lemondouble/ui`를 설치하고 `theme.css`를 import한다.
- 패키지에 있는 컴포넌트는 새로 만들지 않는다. 필요한 변형이 없으면 패키지에 추가하고 Storybook에 스토리를 함께 작성한다.
- 자주 쓰는 토큰: 배경 `--color-bg`, 카드 `--color-surface`, 테두리 `--color-border`, 제목 `--color-fg`, 본문 `--color-fg-secondary`, CTA `--color-primary`, 보조 강조 `--color-secondary`
- Tailwind 프로젝트에서는 같은 토큰을 유틸리티로 쓴다: `bg-bg`, `bg-surface`, `border-border`, `text-fg`, `text-fg-secondary`, `bg-primary`, `text-secondary`

### Font Quick Reference
- 페이지 제목/섹션 레이블: `font-family: var(--font-heading); font-weight: 700;`
- 코드: `font-family: var(--font-mono);`
- 그 외 전부: `font-family: var(--font-sans);` (Tailwind에서는 `--font-sans`가 기본 본문 폰트라서 따로 지정하지 않아도 된다)

### Example Component Prompts
- "히어로 섹션을 만들어줘. 배경 `var(--color-bg)`. 제목은 Galmuri11 Bold 44px, 색상 `var(--color-fg)`, 강조 단어는 `var(--color-primary)`. 설명은 Pretendard 18px, 색상 `var(--color-fg-secondary)`. Primary 버튼(`var(--color-primary)` 배경, `var(--color-bg)` 텍스트, radius `var(--radius-lg)`)과 Ghost 버튼(transparent, `var(--color-border)` border)."
- "프로젝트 카드를 만들어줘. 배경 `var(--color-surface)`, border 1px solid `var(--color-border)`, radius `var(--radius-xl)`, padding 24px. 태그는 Pretendard 12px weight 600, `var(--color-primary)` 텍스트, `var(--color-primary-dim)` 배경, radius `var(--radius-full)`. 제목 Pretendard 17px weight 700. 설명 Pretendard 14px `var(--color-fg-secondary)`. 호버 시 border-color `var(--color-primary-dim-border)`."
- "코드 블록을 만들어줘. 컨테이너: `var(--color-surface)` 배경, `var(--color-border)` border, radius `var(--radius-xl)`. 헤더에 트래픽 라이트 dots(`var(--color-error)`, `var(--color-warning)`, `var(--color-success)`)와 파일명. 본문 JetBrains Mono 14px line-height 1.8. 키워드 `var(--color-primary)`, 문자열 `var(--color-secondary)`, 주석 `var(--color-fg-muted)`."
- "네비게이션 바를 만들어줘. 높이 56px, sticky top. 배경 `var(--color-bg-glass)` + backdrop-filter blur(12px). 왼쪽에 로고 32px + Galmuri11 Bold 16px `var(--color-primary)` 텍스트. 링크는 Pretendard 14px weight 500 `var(--color-fg-secondary)`, active는 `var(--color-primary)` + `var(--color-primary-dim)` 배경."

### Iteration Guide
1. 항상 Galmuri11은 Bold(700)으로만, 페이지 제목/섹션 레이블에만 적용
2. 의심스러우면 Pretendard를 쓴다 — 가독성이 최우선
3. 순수 블랙/화이트 대신 따뜻한 변형 사용 (`var(--color-bg)` / `var(--color-fg)`)
4. 깊이는 shadow 없이 border + 배경색 차이로 표현
5. 액센트 색상은 기능적 맥락에서만 사용 (CTA, 상태, 링크)
6. Dim 배경은 `-dim` 토큰으로 — 불투명 색상을 사용하지 않음
7. 색상, 폰트, radius, z-index는 hex나 숫자 대신 토큰으로 참조
8. CDN은 이 문서에 적힌 정확한 버전 그대로 쓴다. `@latest`를 쓰거나 버전을 생략하지 않는다
