export function Progress({ value, label }: { value: number; label?: string }) {
  const percent = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      className="h-1.5 w-full overflow-hidden rounded-[3px] bg-border"
    >
      <div
        className="h-full rounded-[3px] bg-linear-to-r from-primary to-secondary transition-[width] duration-300 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
