import type { ReactNode } from "react";

export type TagVariant = "primary" | "secondary" | "success" | "warning" | "error";

const variantClassNames: Record<TagVariant, string> = {
  primary: "text-primary bg-primary-dim",
  secondary: "text-secondary bg-secondary-dim",
  success: "text-success bg-success-dim",
  warning: "text-warning bg-warning-dim",
  error: "text-error bg-error-dim",
};

export function Tag({ variant = "primary", children }: { variant?: TagVariant; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${variantClassNames[variant]}`}
    >
      {children}
    </span>
  );
}
