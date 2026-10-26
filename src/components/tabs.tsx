import type { ReactNode } from "react";

// 아직 갈 수 없는 단계처럼 보여 주되 누를 수 없어야 하는 탭은 disabled로 둔다
export type TabItem<Value extends string> = { value: Value; label: ReactNode; disabled?: boolean };

// 아래 내용(화면, 목록 필터)을 바꾼다. 폼 값 하나를 고를 때는 SegmentedControl을 쓴다.
// 탭이 많으면 가로로 스크롤되는데, overflow 상자에서는 탭을 아래로 1px 내리면 밑줄이 잘리므로 구분선을 안쪽 그림자로 그린다
export function Tabs<Value extends string>({
  items,
  value,
  onChange,
  className = "",
  ...labelProps
}: {
  items: TabItem<Value>[];
  value: Value;
  onChange: (value: Value) => void;
  className?: string;
} & ({ "aria-label": string } | { "aria-labelledby": string })) {
  return (
    <div role="tablist" className={`flex overflow-x-auto shadow-[inset_0_-1px_0_var(--color-border)] ${className}`} {...labelProps}>
      {items.map((item) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={selected}
            disabled={item.disabled}
            onClick={() => onChange(item.value)}
            className={`shrink-0 border-b-2 px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-40 ${
              selected ? "border-primary text-primary" : "border-transparent text-fg-muted hover:text-fg-secondary"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
