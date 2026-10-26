import type { ReactNode } from "react";

export type SegmentedOption<Value extends string> = { value: Value; label: ReactNode };

// 폼 값 하나를 고른다. 아래 내용(화면)을 바꿀 때는 Tabs를 쓴다
export function SegmentedControl<Value extends string>({
  options,
  value,
  onChange,
  size = "md",
  disabled = false,
  className = "",
  ...labelProps
}: {
  options: SegmentedOption<Value>[];
  value: Value | null;
  onChange: (value: Value) => void;
  size?: "md" | "sm";
  disabled?: boolean;
  className?: string;
} & ({ "aria-label": string } | { "aria-labelledby": string })) {
  const containerClassName =
    size === "md"
      ? "grid auto-cols-fr grid-flow-col gap-1 p-1"
      : "inline-grid auto-cols-fr grid-flow-col gap-0.5 p-[3px]";
  const itemClassName =
    size === "md" ? "rounded-md py-2 text-[13px]" : "rounded-sm px-3 py-1 text-xs";

  return (
    <div
      role="radiogroup"
      aria-disabled={disabled || undefined}
      className={`rounded-lg border border-border bg-(--field-bg) ${disabled ? "opacity-40" : ""} ${containerClassName} ${className}`}
      {...labelProps}
    >
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={disabled}
            onClick={() => onChange(option.value)}
            className={`font-semibold whitespace-nowrap transition-colors disabled:cursor-not-allowed ${itemClassName} ${
              selected ? "bg-primary-dim text-primary" : "text-fg-secondary hover:text-fg"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
