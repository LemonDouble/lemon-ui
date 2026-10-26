import type { ReactNode } from "react";
import { CircleAlert, CircleCheck, Info, TriangleAlert, type LucideIcon } from "lucide-react";

export type CalloutTone = "primary" | "secondary" | "info" | "success" | "warning" | "error";

const toneClassNames: Record<CalloutTone, { box: string; icon: string }> = {
  primary: { box: "bg-primary-dim border-primary-dim-border", icon: "text-primary" },
  secondary: { box: "bg-secondary-dim border-secondary-dim-border", icon: "text-secondary" },
  info: { box: "bg-info-subtle border-info-dim-border", icon: "text-info" },
  success: { box: "bg-success-subtle border-success-dim-border", icon: "text-success" },
  warning: { box: "bg-warning-subtle border-warning-dim-border", icon: "text-warning" },
  error: { box: "bg-error-subtle border-error-dim-border", icon: "text-error" },
};

const stateIcons: Partial<Record<CalloutTone, LucideIcon>> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
};

// 상태 callout은 상태마다 아이콘이 정해져 있고, Primary·Secondary는 내용에 맞는 아이콘을 넘긴다
export function Callout({
  tone,
  icon,
  className = "",
  children,
}: {
  tone: CalloutTone;
  icon?: LucideIcon;
  className?: string;
  children: ReactNode;
}) {
  const Icon = icon ?? stateIcons[tone];
  const { box, icon: iconClassName } = toneClassNames[tone];

  return (
    <div
      role={tone === "error" ? "alert" : undefined}
      className={`flex gap-3 rounded-xl border px-5 py-4 text-sm leading-relaxed text-fg ${box} ${className}`}
    >
      {Icon && <Icon size={20} aria-hidden="true" className={`mt-px shrink-0 ${iconClassName}`} />}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
