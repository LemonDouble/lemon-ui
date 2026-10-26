import Link from "next/link";
import type { ReactNode } from "react";

// Row를 서버 컴포넌트에서도 쓸 수 있도록, 밀도는 context 대신 RowList의 data 속성을 CSS로 읽는다
const rowClassName =
  "flex w-full items-center gap-3 border-t border-border px-4 py-4 text-left first:border-t-0 sm:px-5 group-data-[density=compact]/rows:py-2.5 group-data-[density=compact]/rows:sm:px-4";

export function RowList({
  header,
  maxHeight,
  compact = false,
  children,
}: {
  header?: ReactNode;
  maxHeight?: number;
  compact?: boolean;
  children: ReactNode;
}) {
  // 행 안의 Dropdown Menu가 잘리지 않도록 상자에 overflow-hidden을 쓰지 않고, 행의 호버 배경 모서리를 직접 둥글게 한다
  const roundedRowsClassName = `${header ? "" : "[&>:first-child]:rounded-t-[11px]"} [&>:last-child]:rounded-b-[11px]`;

  return (
    // 페이지 위에서는 surface, Card·Dialog 안에서는 bg가 되도록 --field-bg를 배경으로 쓰고, 행 안의 입력칸은 bg로 둔다
    <div className="rounded-xl border border-border bg-(--field-bg)">
      {header && <div className="border-b border-border px-4 py-2 text-xs text-fg-muted">{header}</div>}
      <div
        data-density={compact ? "compact" : "default"}
        className={`group/rows [--field-bg:var(--color-bg)] ${maxHeight ? "overflow-y-auto" : ""} ${roundedRowsClassName}`}
        style={maxHeight ? { maxHeight } : undefined}
      >
        {children}
      </div>
    </div>
  );
}

// 앞 요소로 쓰는 40px 아이콘 상자. 상태가 끝난 항목(만료 등)은 dimmed로 낮춘다
export function RowIcon({ dimmed = false, children }: { dimmed?: boolean; children: ReactNode }) {
  return (
    <span
      className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${
        dimmed ? "bg-border text-fg-muted" : "bg-primary-dim text-primary"
      }`}
    >
      {children}
    </span>
  );
}

// href가 있으면 링크, onClick이 있으면 버튼, 둘 다 없으면 일반 행이 된다
export function Row({
  href,
  onClick,
  leading,
  eyebrow,
  title,
  titleSuffix,
  meta,
  trailing,
  dimmed = false,
}: {
  href?: string;
  onClick?: () => void;
  leading?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  titleSuffix?: ReactNode;
  meta?: ReactNode;
  trailing?: ReactNode;
  dimmed?: boolean;
}) {
  const content = (
    <>
      {leading}
      <div className="min-w-0 flex-1">
        {eyebrow && <p className="mb-0.5 truncate text-xs font-semibold text-primary">{eyebrow}</p>}
        <div className="flex items-center gap-1.5">
          <p className={`min-w-0 truncate text-sm font-semibold ${dimmed ? "text-fg-muted" : "text-fg"}`}>{title}</p>
          {titleSuffix}
        </div>
        {meta && <p className="mt-0.5 truncate text-xs text-fg-muted">{meta}</p>}
      </div>
      {trailing && <div className="flex shrink-0 items-center gap-1 text-xs text-fg-secondary">{trailing}</div>}
    </>
  );

  const interactiveClassName = `${rowClassName} transition-colors hover:bg-surface-hover`;
  if (href) {
    return (
      <Link href={href} className={interactiveClassName}>
        {content}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={interactiveClassName}>
        {content}
      </button>
    );
  }
  return <div className={rowClassName}>{content}</div>;
}
