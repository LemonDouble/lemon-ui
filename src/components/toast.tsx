"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Info, TriangleAlert, X, type LucideIcon } from "lucide-react";

export type ToastTone = "info" | "success" | "warning" | "error";

const VISIBLE_MS = 2500;

// 화면 위에 떠서 뒤의 내용이 비치지 않도록, 불투명한 surface 위에 dim 틴트를 겹친다
const toneStyles: Record<ToastTone, { box: string; icon: string; Icon: LucideIcon }> = {
  info: { box: "border-info from-info-dim to-info-dim", icon: "bg-info-dim text-info", Icon: Info },
  success: { box: "border-success from-success-dim to-success-dim", icon: "bg-success-dim text-success", Icon: Check },
  warning: {
    box: "border-warning from-warning-dim to-warning-dim",
    icon: "bg-warning-dim text-warning",
    Icon: TriangleAlert,
  },
  error: { box: "border-error from-error-dim to-error-dim", icon: "bg-error-dim text-error", Icon: X },
};

// 반환된 toast 요소를 화면 어딘가에 한 번 렌더링하고, showToast로 메시지를 띄운다
export function useToast() {
  const [current, setCurrent] = useState<{ message: string; tone: ToastTone } | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const showToast = useCallback((message: string, tone: ToastTone = "info") => {
    clearTimeout(hideTimer.current);
    setCurrent({ message, tone });
    hideTimer.current = setTimeout(() => setCurrent(null), VISIBLE_MS);
  }, []);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  // 스크린 리더가 새 메시지를 읽으려면 role="status" 영역이 메시지보다 먼저 있어야 한다
  const toast = (
    <div role="status" className="pointer-events-none fixed inset-x-0 bottom-6 z-(--z-toast) flex justify-center px-4">
      {current && <ToastMessage tone={current.tone}>{current.message}</ToastMessage>}
    </div>
  );

  return { toast, showToast };
}

type ShowToast = (message: string, tone?: ToastTone) => void;

const ShowToastContext = createContext<ShowToast>(() => {
  console.error("useShowToast를 ToastProvider 밖에서 호출했습니다. 루트 레이아웃을 ToastProvider로 감싸 주세요.");
});

// 토스트를 앱에 하나만 둔다. 컴포넌트마다 useToast를 쓰면 status 영역이 여러 개 생기고,
// transform·perspective가 걸린 요소 안에서는 fixed 위치가 그 요소 기준으로 잡혀 토스트가 갇힌다
export function ToastProvider({ children }: { children: ReactNode }) {
  const { toast, showToast } = useToast();

  return (
    <ShowToastContext value={showToast}>
      {children}
      {toast}
    </ShowToastContext>
  );
}

export function useShowToast() {
  return useContext(ShowToastContext);
}

export function ToastMessage({ tone, children }: { tone: ToastTone; children: string }) {
  const { box, icon, Icon } = toneStyles[tone];

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border bg-surface bg-linear-to-r px-4 py-3 text-sm font-semibold text-fg ${box}`}
    >
      <span className={`flex size-5 shrink-0 items-center justify-center rounded-full ${icon}`}>
        <Icon size={12} aria-hidden="true" />
      </span>
      {children}
    </div>
  );
}
