import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SegmentedControl } from "./segmented-control";

const meta = {
  title: "Form/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    docs: { description: { component: "폼 값 하나를 2~5개 선택지 중에서 고릅니다. 아래 내용을 바꿀 때는 Tabs를 씁니다." } },
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const presets = [
  { value: "once", label: "1회성" },
  { value: "secret", label: "비밀" },
  { value: "normal", label: "일반" },
  { value: "long", label: "장기" },
];

export const Default: Story = {
  args: { options: presets, value: "normal", onChange: () => {}, "aria-label": "공유 방식" },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return (
      <div className="max-w-md">
        <SegmentedControl {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const Small: Story = {
  args: {
    options: [
      { value: "translate", label: "번역" },
      { value: "erase", label: "지우기" },
      { value: "keep", label: "그대로" },
    ],
    value: "translate",
    size: "sm",
    onChange: () => {},
    "aria-label": "말풍선 처리",
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: {
    options: presets,
    value: "normal",
    disabled: true,
    onChange: () => {},
    "aria-label": "공유 방식",
  },
  render: (args) => (
    <div className="max-w-md">
      <SegmentedControl {...args} />
    </div>
  ),
};
