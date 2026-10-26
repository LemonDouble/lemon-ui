"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { File, Trash2, TriangleAlert, X, type LucideIcon } from "lucide-react";
import { Button } from "./button.js";
import { ButtonSpinner } from "./spinner.js";

// 여는 버튼이 목록 행(<Link>) 안에 있을 수 있어서, body로 portal하고 클릭 전파를 막아 행 링크로 이동하지 않게 한다
export function Dialog({
  labelledBy,
  onClose,
  className = "",
  children,
}: {
  labelledBy: string;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) onClose();
      }}
      className={`m-auto w-[calc(100%-2rem)] rounded-xl border border-border bg-surface p-0 text-fg [--field-bg:var(--color-bg)] backdrop:bg-overlay backdrop:backdrop-blur-[4px] ${className}`}
    >
      {children}
    </dialog>,
    document.body,
  );
}

export function Modal({
  title,
  onClose,
  footer,
  wide = false,
  children,
}: {
  title: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  wide?: boolean;
  children: ReactNode;
}) {
  const titleId = useId();

  return (
    <Dialog labelledBy={titleId} onClose={onClose} className={wide ? "max-w-[960px]" : "max-w-[480px]"}>
      <div className="flex items-center justify-between gap-4 border-b border-border px-6 py-5">
        <h2 id={titleId} className="min-w-0 truncate text-[15px] font-bold">
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:border-border-hover hover:text-fg"
        >
          <X size={16} />
        </button>
      </div>
      <div className="p-6 text-sm text-fg-secondary">{children}</div>
      {footer && <div className="flex justify-end gap-2 border-t border-border px-6 py-4">{footer}</div>}
    </Dialog>
  );
}

// 삭제처럼 되돌릴 수 없는 동작을 실행하기 직전에 한 번 더 확인한다
export function ConfirmDialog({
  title,
  description,
  target,
  confirmLabel = "삭제",
  pending = false,
  onConfirm,
  onClose,
}: {
  title: string;
  description: ReactNode;
  target?: { icon?: LucideIcon; name: string; meta?: string };
  confirmLabel?: string;
  pending?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}) {
  const titleId = useId();
  const TargetIcon = target?.icon ?? File;

  return (
    <Dialog labelledBy={titleId} onClose={onClose} className="max-w-[460px] p-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-error-dim-border bg-error-dim text-error">
          <TriangleAlert size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <h2 id={titleId} className="text-[17px] font-bold">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{description}</p>
          {target && (
            <div className="mt-4 flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3">
              <TargetIcon size={18} className="shrink-0 text-fg-muted" />
              <div className="min-w-0">
                <p className="break-all text-sm font-semibold text-fg">{target.name}</p>
                {target.meta && <p className="mt-0.5 text-xs text-fg-muted">{target.meta}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose} disabled={pending}>
          취소
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={pending} aria-busy={pending}>
          {pending ? <ButtonSpinner /> : <Trash2 size={16} />}
          {confirmLabel}
        </Button>
      </div>
    </Dialog>
  );
}
