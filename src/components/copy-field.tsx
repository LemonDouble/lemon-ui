"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./button.js";
import { IconButton } from "./icon-button.js";

const COPIED_MS = 1500;

// 복사에 성공하면 COPIED_MS 동안 copied가 true가 된다. 권한이 없어 실패하면 값 상자를 눌러 직접 복사한다
export function useCopy() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), COPIED_MS);
    } catch {
      setCopied(false);
    }
  }

  return { copied, copy };
}

// 강조형: 복사가 그 화면의 주 동작일 때 값을 전부 보여 주고 Primary 복사 버튼을 둔다. actions는 복사 버튼 왼쪽에 놓인다
export function CopyField({
  value,
  copyLabel = "링크 복사",
  actions,
}: {
  value: string;
  copyLabel?: string;
  actions?: ReactNode;
}) {
  const { copied, copy } = useCopy();

  return (
    <div>
      <p className="rounded-lg border border-border bg-bg px-4 py-3 font-mono text-[13px] break-all text-fg select-all">
        {value}
      </p>
      <div className="mt-3 flex gap-2 sm:justify-end [&>*]:flex-1 sm:[&>*]:flex-none">
        {actions}
        <Button onClick={() => copy(value)}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "복사됨" : copyLabel}
        </Button>
      </div>
    </div>
  );
}

// 인라인형: 여러 정보 중 하나일 때 값을 한 줄로 보여 주고 오른쪽 끝에 복사 아이콘 버튼을 둔다
export function CopyInline({ value, label }: { value: string; label: string }) {
  const { copied, copy } = useCopy();

  return (
    <div className="flex items-center gap-2 rounded-lg border border-border bg-bg py-1 pr-1 pl-4">
      <span className="min-w-0 flex-1 truncate font-mono text-[13px] text-fg select-all">{value}</span>
      <IconButton label={`${label} 복사`} onClick={() => copy(value)} className={copied ? "text-success" : ""}>
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </IconButton>
    </div>
  );
}
