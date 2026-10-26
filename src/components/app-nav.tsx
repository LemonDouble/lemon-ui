"use client";

import Link from "next/link";
import { Children, createContext, useContext, useState, type ComponentProps, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { LinkButton } from "./button.js";

type Placement = "desktop" | "mobile";

const NavContext = createContext<{ placement: Placement; closeMenu: () => void }>({
  placement: "desktop",
  closeMenu: () => {},
});

const itemClassNames: Record<Placement, string> = {
  desktop: "rounded-md px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
  mobile: "flex min-h-10 w-full items-center gap-2 rounded-md px-3.5 text-left text-sm font-medium transition-colors",
};

// NavLink로 감쌀 수 없는 항목(모달을 여는 버튼 등)이 같은 모양을 쓰고, 모바일 메뉴를 닫을 수 있게 한다
export function useNavItem(active = false) {
  const { placement, closeMenu } = useContext(NavContext);
  const stateClassName = active ? "bg-primary-dim text-primary" : "text-fg-secondary hover:text-fg";
  return { className: `${itemClassNames[placement]} ${stateClassName}`, placement, closeMenu };
}

export function NavLink({
  active = false,
  onClick,
  ...rest
}: ComponentProps<typeof Link> & { active?: boolean }) {
  const { className, closeMenu } = useNavItem(active);
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={className}
      onClick={(e) => {
        closeMenu();
        onClick?.(e);
      }}
      {...rest}
    />
  );
}

export function NavButton({ onClick, ...rest }: ComponentProps<"button">) {
  const { className, closeMenu } = useNavItem();
  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        closeMenu();
        onClick?.(e);
      }}
      {...rest}
    />
  );
}

// 데스크톱: 로고 | 링크 · CTA | 구분선 · 아이콘 동작
// 모바일: 로고 | 자주 쓰는 아이콘 동작 · 햄버거. 메뉴에는 CTA를 일반 항목으로 맨 위에, mobileFooter를 맨 아래에 둔다
export function AppNav({
  logoSrc,
  name,
  homeHref = "/",
  reloadOnHome = false,
  cta,
  actions,
  mobileActions,
  mobileFooter,
  maxWidthClassName = "max-w-[1080px]",
  children,
}: {
  logoSrc: string;
  name: string;
  homeHref?: string;
  reloadOnHome?: boolean;
  cta?: { href: string; label: string; active?: boolean };
  actions?: ReactNode;
  mobileActions?: ReactNode;
  mobileFooter?: ReactNode;
  maxWidthClassName?: string;
  children?: ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const hasLinks = Children.toArray(children).length > 0 || cta !== undefined;
  // 메뉴에 넣을 항목이 없으면 햄버거 버튼과 모바일 메뉴를 그리지 않는다
  const hasMobileMenu = hasLinks || mobileFooter !== undefined;
  const brand = (
    <>
      <img src={logoSrc} alt="" width={32} height={32} className="size-8 rounded-lg" />
      <span className="font-heading text-base leading-none font-bold text-primary">{name}</span>
    </>
  );

  return (
    <header className="sticky top-0 z-(--z-sticky) h-14 border-b border-border bg-bg-glass backdrop-blur-md">
      <div className={`mx-auto flex h-full items-center justify-between gap-6 px-5 sm:px-8 ${maxWidthClassName}`}>
        {/* 한 화면짜리 앱은 로고를 눌러 작업 중이던 상태를 처음으로 되돌리므로, 페이지를 새로 불러오는 링크를 쓴다 */}
        {reloadOnHome ? (
          <a href={homeHref} className="flex shrink-0 items-center gap-2.5">
            {brand}
          </a>
        ) : (
          <Link href={homeHref} className="flex shrink-0 items-center gap-2.5">
            {brand}
          </Link>
        )}

        <NavContext.Provider value={{ placement: "desktop", closeMenu }}>
          <nav className="hidden items-center gap-1 sm:flex">
            {children}
            {cta && (
              <LinkButton href={cta.href} size="sm" className="ml-2" aria-current={cta.active ? "page" : undefined}>
                {cta.label}
              </LinkButton>
            )}
            {actions && (
              <>
                {hasLinks && <span aria-hidden="true" className="mx-3 h-5 w-px bg-border" />}
                {actions}
              </>
            )}
          </nav>
        </NavContext.Provider>

        <div className="-mr-2 flex items-center sm:hidden">
          {mobileActions}
          {hasMobileMenu && (
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="app-nav-mobile-menu"
              aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
              className="inline-flex size-10 items-center justify-center rounded-lg text-fg-secondary transition-colors hover:text-fg"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* 메뉴 항목이 연 모달이 함께 사라지지 않도록, 닫을 때 언마운트하지 않고 숨기기만 한다 */}
      {hasMobileMenu && (
        <NavContext.Provider value={{ placement: "mobile", closeMenu }}>
          <nav
            id="app-nav-mobile-menu"
            className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-border bg-bg px-5 py-3 sm:hidden`}
          >
            {cta && (
              <NavLink href={cta.href} active={cta.active}>
                {cta.label}
              </NavLink>
            )}
            {children}
            {mobileFooter}
          </nav>
        </NavContext.Provider>
      )}
    </header>
  );
}
