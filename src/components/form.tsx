import type { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";

// 배경은 --field-bg를 따른다. Card, Dialog처럼 surface 위의 컨테이너가 bg로 바꿔서 입력칸이 묻히지 않게 한다
const fieldClassName =
  "w-full bg-(--field-bg) text-fg border border-border rounded-lg text-sm transition-colors focus:border-focus-ring focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed aria-invalid:border-error-dim-border";

export function Input({ className = "", ...rest }: ComponentProps<"input">) {
  return <input className={`${fieldClassName} px-4 py-2.5 ${className}`} {...rest} />;
}

export function Textarea({ className = "", ...rest }: ComponentProps<"textarea">) {
  return (
    <textarea className={`${fieldClassName} min-h-[100px] resize-y px-4 py-2.5 leading-relaxed ${className}`} {...rest} />
  );
}

export function Select({ className = "", children, ...rest }: ComponentProps<"select">) {
  return (
    <div className={`relative ${className}`}>
      <select className={`${fieldClassName} cursor-pointer appearance-none py-2.5 pr-10 pl-4`} {...rest}>
        {children}
      </select>
      <ChevronDown
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-fg-muted"
      />
    </div>
  );
}

export function Label({ className = "", ...rest }: ComponentProps<"label">) {
  return <label className={`mb-2 block text-sm font-semibold text-fg-secondary ${className}`} {...rest} />;
}

export function HelpText({ className = "", ...rest }: ComponentProps<"p">) {
  return <p className={`mt-1.5 text-xs text-fg-muted ${className}`} {...rest} />;
}

export function FieldError({ className = "", ...rest }: ComponentProps<"p">) {
  return <p role="alert" className={`mt-1.5 text-xs text-error ${className}`} {...rest} />;
}
