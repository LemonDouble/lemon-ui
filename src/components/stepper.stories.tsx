import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stepper } from "./stepper";
import { useToast } from "./toast";

const meta = {
  title: "Form/Stepper",
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component:
          "정해진 범위의 정수를 조절합니다. 범위를 넘기려 하면 경계값으로 보정하고, 호출한 쪽에서 onOutOfRange로 Warning 토스트를 띄웁니다.",
      },
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpiryDays: Story = {
  name: "범위 보정 (최대 90일)",
  args: { label: "만료 기간", value: 88, min: 1, max: 90, unit: "일", onChange: () => {} },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    const { toast, showToast } = useToast();
    return (
      <div className="max-w-xs">
        <Stepper
          {...args}
          value={value}
          onChange={setValue}
          onOutOfRange={() => showToast("만료 기간은 최대 90일입니다.", "warning")}
        />
        {toast}
      </div>
    );
  },
};

export const Unlimited: Story = {
  name: "빈 값 허용",
  args: { label: "다운로드 제한", value: null, min: 1, unit: "회", emptyLabel: "제한 없음", onChange: () => {} },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return (
      <div className="max-w-xs">
        <Stepper {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const StepFive: Story = {
  name: "5씩 바뀜",
  args: { label: "대기 시간", value: 15, min: 0, max: 999, step: 5, unit: "분", onChange: () => {} },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return (
      <div className="max-w-xs">
        <Stepper {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};
