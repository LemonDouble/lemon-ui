import type { ComponentProps } from "react";

export type IconButtonTone = "primary" | "error";

const toneClassNames: Record<IconButtonTone, string> = {
  primary: "hover:text-primary hover:bg-primary-dim",
  error: "hover:text-error hover:bg-error-dim",
};

// 아이콘만으로는 이름을 알 수 없으므로 label을 aria-label과 호버 title로 함께 보여 준다
export function IconButton({
  label,
  tone = "primary",
  className = "",
  ...rest
}: Omit<ComponentProps<"button">, "aria-label" | "title"> & { label: string; tone?: IconButtonTone }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-fg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${toneClassNames[tone]} ${className}`}
      {...rest}
    />
  );
}
