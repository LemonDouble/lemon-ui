import type { ComponentProps } from "react";

export function Card({ className = "", ...rest }: ComponentProps<"div">) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 [--field-bg:var(--color-bg)] ${className}`}
      {...rest}
    />
  );
}
