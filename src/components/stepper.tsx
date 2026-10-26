"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

// emptyLabel이 있으면 최솟값에서 한 번 더 줄였을 때 값이 비고(null), 그 상태를 emptyLabel로 보여 준다.
// 범위를 넘기려 하면 경계값으로 보정하고 onOutOfRange로 알린다. 호출한 쪽에서 Warning 토스트로 이유를 보여 준다
export function Stepper({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  emptyLabel,
  caption,
  onChange,
  onOutOfRange,
}: {
  label: string;
  value: number | null;
  min: number;
  max?: number;
  step?: number;
  unit: string;
  emptyLabel?: string;
  caption?: string;
  onChange: (value: number | null) => void;
  onOutOfRange?: (boundary: "min" | "max") => void;
}) {
  const [typed, setTyped] = useState<string | null>(null);

  function commit(next: number) {
    if (max !== undefined && next > max) {
      onOutOfRange?.("max");
      onChange(max);
    } else if (next < min) {
      if (emptyLabel) {
        onChange(null);
      } else {
        onOutOfRange?.("min");
        onChange(min);
      }
    } else {
      onChange(next);
    }
  }

  function finishTyping() {
    if (typed === null) return;
    setTyped(null);
    if (typed !== "") commit(Number(typed));
    else if (emptyLabel) onChange(null);
  }

  const shownText = typed ?? (value === null ? "" : String(value));
  const isEmpty = shownText === "";
  const stepButtonClassName =
    "flex size-10 shrink-0 items-center justify-center rounded-md text-sm font-semibold text-fg-secondary transition-colors hover:bg-surface-hover hover:text-fg";
  const stepText = step === 1 ? null : String(step);

  return (
    <div>
      <div className="flex items-center justify-between rounded-lg border border-border bg-(--field-bg) p-1.5">
        <button
          type="button"
          onClick={() => value !== null && commit(value - step)}
          aria-label={stepText ? `${label} ${stepText} 줄이기` : `${label} 줄이기`}
          className={stepButtonClassName}
        >
          {stepText ? `−${stepText}` : <Minus size={18} />}
        </button>
        <label className="flex items-baseline justify-center gap-1">
          <input
            inputMode="numeric"
            aria-label={label}
            value={shownText}
            placeholder={emptyLabel}
            onChange={(e) => setTyped(e.target.value.replace(/\D/g, ""))}
            onBlur={finishTyping}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.currentTarget.blur();
              }
            }}
            className={`bg-transparent text-lg font-bold text-fg outline-none placeholder:text-base placeholder:font-semibold placeholder:text-fg-secondary ${
              isEmpty ? "w-24 text-center" : "w-14 text-right"
            }`}
          />
          {!isEmpty && <span className="text-sm text-fg-secondary">{unit}</span>}
        </label>
        <button
          type="button"
          onClick={() => commit(value === null ? min : value + step)}
          aria-label={stepText ? `${label} ${stepText} 늘리기` : `${label} 늘리기`}
          className={stepButtonClassName}
        >
          {stepText ? `+${stepText}` : <Plus size={18} />}
        </button>
      </div>
      {caption && <p className="mt-2 text-center text-xs text-fg-muted">{caption}</p>}
    </div>
  );
}
