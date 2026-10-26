export type SpinnerSize = "sm" | "md" | "lg";

const sizeClassNames: Record<SpinnerSize, string> = {
  sm: "size-4 border-2",
  md: "size-6 border-[3px]",
  lg: "size-10 border-[5px]",
};

// 줄어든 동작 설정에서도 멈추지 않고 느리게만 돈다. 멈추면 진행 중이라는 사실이 전달되지 않는다
const spin = "rounded-full animate-[spin_0.8s_linear_infinite] motion-reduce:animate-[spin_2.4s_linear_infinite]";

export function Spinner({ size = "md", label = "로딩 중" }: { size?: SpinnerSize; label?: string }) {
  return (
    <span
      role="status"
      aria-label={label}
      className={`inline-block border-border border-t-primary ${spin} ${sizeClassNames[size]}`}
    />
  );
}

// 버튼 안에서는 버튼 글자색을 따른다. 상태 안내는 버튼의 aria-busy가 맡는다
export function ButtonSpinner() {
  return <span aria-hidden="true" className={`inline-block border-current/25 border-t-current ${spin} ${sizeClassNames.sm}`} />;
}
