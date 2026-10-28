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
