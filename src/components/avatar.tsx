"use client";

import { useState } from "react";

// 사진이 없거나 불러오지 못하면 이름의 첫 글자를 보여 준다
export function Avatar({ name, src, size = 36 }: { name: string; src?: string | null; size?: number }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = src && src !== failedSrc;
  const initial = Array.from(name.trim())[0]?.toUpperCase() ?? "?";

  return (
    <span
      style={{ width: size, height: size, fontSize: size * 0.42 }}
      className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-bg bg-primary-dim font-semibold text-primary"
    >
      {showImage ? (
        <img src={src} alt="" className="size-full object-cover" onError={() => setFailedSrc(src)} />
      ) : (
        <span aria-hidden="true">{initial}</span>
      )}
    </span>
  );
}
