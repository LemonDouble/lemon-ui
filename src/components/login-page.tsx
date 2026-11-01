import { LEMON_LOGO_DATA_URI } from "./lemon-logo-data.js";

// Google 로그인 버튼 브랜드 가이드의 컬러 G 로고. 색을 바꾸면 가이드 위반이다
function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

// 레몬 통합 계정(auth-server, Google 로그인)으로 들어가는 앱의 첫 화면.
// 버튼 색은 Google 로그인 버튼 가이드의 다크 테마 규격이라 토큰을 쓰지 않는다
export function LoginPage({
  logoSrc,
  name,
  accent,
  description,
  loginHref,
}: {
  logoSrc: string;
  name: string;
  accent?: string;
  description: string;
  loginHref: string;
}) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-5 py-12 text-center sm:px-8">
      <img src={logoSrc} alt="" width={120} height={120} className="size-[120px] object-contain" />
      <p className="mt-8 inline-flex items-center gap-1.5 font-heading text-xs font-bold tracking-[1.5px] text-primary">
        <img src={LEMON_LOGO_DATA_URI} alt="" width={16} height={16} className="size-4 rounded-full" />
        LEMON ACCOUNT
      </p>
      <h1 className="mt-3 font-heading text-[44px] font-bold leading-[1.2] text-fg max-sm:text-[32px]">
        {name}
        {accent && <span className="text-primary"> {accent}</span>}
      </h1>
      <p className="mt-4 text-lg leading-[1.7] text-fg-secondary">{description}</p>
      <a
        href={loginHref}
        className="mt-10 inline-flex h-12 w-full max-w-[360px] items-center justify-center gap-3 rounded-full border border-[#8E918F] bg-[#131314] text-[15px] font-medium text-[#E3E3E3] transition-colors hover:border-[#E3E3E3]"
      >
        <GoogleMark />
        Google 계정으로 로그인
      </a>
    </main>
  );
}
