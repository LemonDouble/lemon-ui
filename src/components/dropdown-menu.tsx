"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Copy, EllipsisVertical, type LucideIcon } from "lucide-react";
import { IconButton } from "./icon-button.js";

const CloseMenuContext = createContext<() => void>(() => {});

export function useCloseMenu() {
  return useContext(CloseMenuContext);
}

// 메뉴가 목록 행(<Link>) 안에 있을 수 있어서, 메뉴 안의 클릭이 행 링크로 이동하지 않도록 막는다
function stopRowNavigation(e: React.MouseEvent) {
  e.preventDefault();
  e.stopPropagation();
}

export function DropdownMenu({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnOutsidePointer(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function closeOnEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative" onClick={stopRowNavigation}>
      <IconButton
        label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((wasOpen) => !wasOpen)}
      >
        <EllipsisVertical size={16} />
      </IconButton>

      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 z-(--z-dropdown) mt-1 w-44 rounded-lg border border-border bg-surface p-1"
        >
          <CloseMenuContext.Provider value={() => setOpen(false)}>{children}</CloseMenuContext.Provider>
        </div>
      )}
    </div>
  );
}

export function MenuItem({
  icon: Icon,
  destructive = false,
  done = false,
  keepOpen = false,
  onSelect,
  children,
}: {
  icon: LucideIcon;
  destructive?: boolean;
  done?: boolean;
  keepOpen?: boolean;
  onSelect: () => void;
  children: ReactNode;
}) {
  const closeMenu = useCloseMenu();
  const toneClassName = done ? "text-success" : destructive ? "text-error" : "text-fg-secondary hover:text-fg";

  return (
    <button
      type="button"
      role="menuitem"
      onClick={() => {
        onSelect();
        if (!keepOpen) closeMenu();
      }}
      className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-surface-hover ${toneClassName}`}
    >
      <Icon size={16} className="shrink-0" />
      {children}
    </button>
  );
}

export function MenuSeparator() {
  return <div role="separator" className="my-1 h-px bg-border" />;
}

// 복사 결과를 메뉴 안에서 바로 보여 준 뒤 닫는다. 오래 열려 있으면 다음 동작을 막는다.
// value를 함수로 넘기면 누르는 순간에 계산한다 (서버 렌더링 중에는 window.location이 없다)
export function CopyMenuItem({
  value,
  children = "링크 복사",
}: {
  value: string | (() => string);
  children?: ReactNode;
}) {
  const closeMenu = useCloseMenu();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(typeof value === "function" ? value() : value);
      setCopied(true);
      setTimeout(closeMenu, 800);
    } catch {
      closeMenu();
    }
  }

  return (
    <MenuItem icon={copied ? Check : Copy} done={copied} keepOpen onSelect={copy}>
      {copied ? "복사됨" : children}
    </MenuItem>
  );
}
