import type { ReactNode } from "react";

export type TabItem<Value extends string> = { value: Value; label: ReactNode };

// 아래 내용(화면, 목록 필터)을 바꾼다. 폼 값 하나를 고를 때는 SegmentedControl을 쓴다
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
    <div role="tablist" className={`flex overflow-x-auto border-b border-border ${className}`} {...labelProps}>
      {items.map((item) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(item.value)}
            className={`-mb-px shrink-0 border-b-2 px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
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
