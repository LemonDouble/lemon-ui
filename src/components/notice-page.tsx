import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-16 shrink-0 items-center justify-center rounded-xl border border-primary-dim-border bg-primary-dim text-primary">
      <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}

// 404, 만료, 권한 없음처럼 화면 전체가 하나의 안내인 페이지.
// children에는 해결할 동작(Primary 버튼)과 보조 동작(TextLink)을 둔다
export function NoticePage({
  icon,
  code,
  title,
  description,
  children,
}: {
  icon: LucideIcon;
  code?: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[520px] flex-1 flex-col items-center justify-center px-5 py-12 text-center sm:px-8 sm:py-16">
      <div className="mb-6">
        <IconBadge icon={icon} />
      </div>
      {code && <p className="mb-3 font-heading text-xs font-bold tracking-[1.5px] text-primary">{code}</p>}
      <h1 className="mb-3 font-heading text-[28px] font-bold text-fg max-sm:text-[22px]">{title}</h1>
      <p className="text-sm leading-relaxed text-fg-secondary [&_strong]:text-fg">{description}</p>
      {children && <div className="mt-8 flex w-full max-w-[320px] flex-col items-center gap-4">{children}</div>}
    </div>
  );
}

// NoticePage 안에서 보조 동작이 여러 개일 때 가로로 묶는다
export function NoticeLinks({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap justify-center gap-4">{children}</div>;
}
