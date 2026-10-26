"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  File,
  FileArchive,
  FileAudio,
  FileImage,
  FileSpreadsheet,
  FileText,
  FileVideo,
  Upload,
  X,
  type LucideIcon,
} from "lucide-react";

export function FileTypeIcon({ mimeType, size }: { mimeType: string; size: number }) {
  if (mimeType.startsWith("image/")) return <FileImage size={size} />;
  if (mimeType.startsWith("video/")) return <FileVideo size={size} />;
  if (mimeType.startsWith("audio/")) return <FileAudio size={size} />;
  if (/zip|tar|rar|7z|compressed/.test(mimeType)) return <FileArchive size={size} />;
  if (/spreadsheet|excel|csv/.test(mimeType)) return <FileSpreadsheet size={size} />;
  if (mimeType === "application/pdf" || mimeType.startsWith("text/")) return <FileText size={size} />;
  return <File size={size} />;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

function fileTypeLabel(file: File): string {
  const extension = file.name.includes(".") ? file.name.split(".").pop() : null;
  return extension ? extension.toUpperCase() : file.type || "파일";
}

// 이미지면 썸네일, 아니면 파일 형식 아이콘을 보여 주는 44px 상자
export function FileThumbnail({ file }: { file: File }) {
  const thumbnailUrl = useMemo(() => (file.type.startsWith("image/") ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => {
    return () => {
      if (thumbnailUrl) URL.revokeObjectURL(thumbnailUrl);
    };
  }, [thumbnailUrl]);

  return (
    <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary-dim text-primary">
      {thumbnailUrl ? (
        <img src={thumbnailUrl} alt="" className="size-full object-cover" />
      ) : (
        <FileTypeIcon mimeType={file.type} size={22} />
      )}
    </span>
  );
}

function useDragging() {
  const [dragging, setDragging] = useState(false);
  return {
    dragging,
    dragHandlers: {
      onDragOver: (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(true);
      },
      onDragLeave: () => setDragging(false),
    },
    stopDragging: () => setDragging(false),
  };
}

// 폼의 한 칸. 영역 전체가 버튼이고, 파일을 고르면 파일 카드로 바뀐다
export function FileDropZone({
  file,
  onChange,
  title = "파일을 끌어다 놓거나 눌러서 선택",
  description,
  accept,
}: {
  file: File | null;
  onChange: (file: File | null) => void;
  title?: string;
  description?: string;
  accept?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dragging, dragHandlers, stopDragging } = useDragging();

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    stopDragging();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) onChange(dropped);
  }

  return (
    <div onDrop={onDrop} {...dragHandlers}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        hidden
        onChange={(e) => {
          const picked = e.target.files?.[0];
          if (picked) onChange(picked);
          e.target.value = "";
        }}
      />
      {file ? (
        <div
          className={`flex items-center gap-3 rounded-xl border bg-surface px-4 py-4 transition-colors ${
            dragging ? "border-primary" : "border-border"
          }`}
        >
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            title="다른 파일 선택"
            className="flex min-w-0 flex-1 items-center gap-3 text-left"
          >
            <FileThumbnail file={file} />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-fg">{file.name}</span>
              <span className="mt-0.5 block text-xs text-fg-muted">
                {formatBytes(file.size)} · {fileTypeLabel(file)}
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="파일 제거"
            title="파일 제거"
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-fg-muted transition-colors hover:bg-surface-hover hover:text-fg"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-14 text-center transition-colors ${
            dragging ? "border-primary bg-primary-dim" : "border-border hover:border-border-hover"
          }`}
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-primary-dim text-primary">
            <Upload size={24} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-fg">{dragging ? "여기에 놓으세요" : title}</span>
            {description && <span className="mt-1 block text-xs text-fg-muted">{description}</span>}
          </span>
        </button>
      )}
    </div>
  );
}

// 업로드가 화면의 주 동작일 때 쓰는 큰 영역. 화면 어디에 놓아도 받으려면 호출한 쪽에서 window의 drop을 받고 dragging을 넘긴다
export function FileDropPanel({
  icon: Icon = Upload,
  title,
  description,
  action,
  dragging = false,
}: {
  icon?: LucideIcon;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  dragging?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-3 rounded-xl border-2 border-dashed px-8 py-16 text-center transition-colors ${
        dragging ? "border-primary bg-primary-dim" : "border-border"
      }`}
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-primary-dim text-primary">
        <Icon size={24} />
      </span>
      <p className="text-[17px] font-bold text-fg">{dragging ? "여기에 놓으세요" : title}</p>
      {description && <p className="text-sm text-fg-muted">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
