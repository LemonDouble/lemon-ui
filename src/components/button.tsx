import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none select-none";

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "bg-primary text-bg hover:bg-primary-hover",
  secondary: "bg-transparent text-secondary border border-secondary-dim-border hover:bg-secondary-dim",
  ghost: "bg-transparent text-fg-secondary border border-border hover:border-border-hover hover:text-fg",
  danger: "bg-error text-bg hover:bg-error-hover",
};

const sizeClassNames: Record<ButtonSize, string> = {
  md: "text-sm px-5 py-2.5 rounded-lg min-h-10",
  sm: "text-[13px] px-3.5 py-1.5 rounded-md",
};

// Button 모양을 다른 요소(라벨, 외부 링크 등)에 입힐 때 쓴다
export function buttonClassName({
  variant = "primary",
  size = "md",
}: { variant?: ButtonVariant; size?: ButtonSize } = {}) {
  return `${base} ${variantClassNames[variant]} ${sizeClassNames[size]}`;
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({
  variant,
  size,
  className = "",
  type = "button",
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button type={type} className={`${buttonClassName({ variant, size })} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant,
  size,
  className = "",
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={`${buttonClassName({ variant, size })} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function TextLink({ className = "", ...rest }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`inline-flex items-center gap-1 text-sm text-fg-secondary transition-colors hover:text-fg ${className}`}
      {...rest}
    />
  );
}
