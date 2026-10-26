// 크기와 모양은 className으로 정한다 (예: "h-4 w-32", "size-10 rounded-lg")
export function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-skeleton rounded-md bg-border ${className}`} />;
}
