import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./switch";

const meta = {
  title: "Form/Switch",
  component: Switch,
  args: { checked: true, onCheckedChange: () => {} },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);
    return (
      <label className="flex items-center gap-3 text-sm text-fg-secondary">
        <Switch checked={checked} onCheckedChange={setChecked} aria-label="이 기록 공개" />
        이 기록 공개
      </label>
    );
  },
};
