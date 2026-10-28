"use client";

import { type ReactNode } from "react";
import { Avatar } from "./avatar.js";
import { DropdownMenu, MenuSeparator } from "./dropdown-menu.js";

// 메뉴 항목(프로필 수정, 알림, 로그아웃 등)은 앱마다 달라서 children으로 받는다
export function AccountMenu({
  name,
  picture,
  children,
}: {
  name: string;
  picture?: string | null;
  children: ReactNode;
}) {
  return (
    <DropdownMenu label="계정 메뉴" trigger={<Avatar name={name} src={picture} size={32} />}>
      <p className="truncate px-3 py-2 text-sm font-medium text-fg">{name}</p>
      <MenuSeparator />
      {children}
    </DropdownMenu>
  );
}

// 모바일 햄버거 메뉴 맨 아래(AppNav의 mobileFooter)에 두는 계정 줄. 계정 동작(알림, 로그아웃 등)은 IconButton으로 children에 넘긴다
export function NavAccount({
  name,
  picture,
  profileHref,
  children,
}: {
  name: string;
  picture?: string | null;
  profileHref: string;
  children?: ReactNode;
}) {
  return (
    <>
      <div role="separator" className="my-2 h-px bg-border" />
      <div className="flex items-center gap-1 pl-3.5">
        <a href={profileHref} className="flex min-w-0 flex-1 items-center gap-2.5 py-1">
          <Avatar name={name} src={picture} size={32} />
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-semibold text-fg">{name}</span>
            <span className="text-xs text-fg-muted">프로필 수정</span>
          </span>
        </a>
        {children}
      </div>
    </>
  );
}
