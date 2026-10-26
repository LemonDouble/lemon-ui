# Lemon UI

LemonDouble 개인 프로젝트에 공통으로 쓰는 디자인 시스템입니다. 규칙 문서(`DESIGN.md`)와 그 규칙을 구현한 React 컴포넌트 패키지(`@lemondouble/ui`)가 함께 있습니다.

- 컴포넌트 미리보기(Storybook): https://lemondouble.github.io/lemon-ui/
- npm: https://www.npmjs.com/package/@lemondouble/ui
- AI 에이전트용 규칙 문서: `https://raw.githubusercontent.com/LemonDouble/lemon-ui/main/DESIGN.md`
- 로고, 아바타, 파비콘 등 이미지는 GitHub Pages URL로 받습니다. 경로는 `DESIGN.md`의 Brand Images 표를 참고합니다.

## 사용법

Next.js 16 이상, React 19 이상, Tailwind CSS v4, lucide-react를 쓰는 프로젝트에서 사용합니다.

```bash
pnpm add @lemondouble/ui
```

```css
/* 전역 CSS */
@import url("https://cdn.jsdelivr.net/npm/galmuri@2.40.3/dist/galmuri.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css");
@import url("https://cdn.jsdelivr.net/npm/@fontsource-variable/jetbrains-mono@5.2.8/index.css");
@import "tailwindcss";
@import "@lemondouble/ui/theme.css";
```

```tsx
import { Button, Callout } from "@lemondouble/ui";
```

- `theme.css`가 패키지 폴더를 Tailwind 스캔 대상에 넣으므로, 프로젝트에서 따로 `@source`를 적지 않아도 됩니다.
- React를 쓰지 않는 프로젝트는 `DESIGN.md`의 [적용 방법](DESIGN.md#적용-방법)대로 토큰만 복사합니다.

## 구조

| 경로 | 내용 |
|------|------|
| `DESIGN.md` | 토큰, 컴포넌트 규칙과 그 이유 |
| `src/theme.css` | 토큰과 기본 스타일. 패키지의 `@lemondouble/ui/theme.css`로 배포됩니다 |
| `src/components/` | 컴포넌트와 Storybook 스토리(`*.stories.tsx`) |
| `images/` | 로고, 아바타, 마스코트, 파비콘. Pages의 `/images/` 경로로 배포됩니다 |

## 개발

```bash
pnpm install
pnpm storybook        # http://localhost:6006
pnpm typecheck
pnpm build            # dist/ 생성
```

## 배포

- **Storybook**: `main`에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 올립니다.
- **npm**: `package.json`의 `version`을 올리고 GitHub Release를 만들면 GitHub Actions가 npm에 배포합니다. 사용하는 레포에는 Renovate가 버전 업데이트 PR을 만듭니다.

## Key Decisions

- **Colors**: Logo Yellow `#F0B90B` + Coral `#CD6B5E` on Warm Dark `#12100E`
- **Fonts**: Galmuri11 Bold (headings only) + Pretendard (everything else) + JetBrains Mono (code)
- **Icons**: Lucide (UI) + Simple Icons (brands)
- **Theme**: Dark mode only
