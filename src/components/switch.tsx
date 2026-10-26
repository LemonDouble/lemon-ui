import type { ComponentProps } from "react";

export function Switch({
  checked,
  onCheckedChange,
  className = "",
  ...rest
}: Omit<ComponentProps<"button">, "onChange" | "role"> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-xl transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        checked ? "bg-primary" : "bg-border"
      } ${className}`}
      {...rest}
    >
      <span
        className={`inline-block size-[18px] rounded-full bg-fg transition-transform ${
          checked ? "translate-x-[23px]" : "translate-x-[3px]"
        }`}
      />
    </button>
  );
}
