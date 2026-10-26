import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QrCode } from "lucide-react";
import { Button } from "./button";
import { Callout } from "./callout";
import { CopyField, CopyInline } from "./copy-field";
import { Label } from "./form";

const meta = {
  title: "Form/CopyField",
  component: CopyField,
  args: { value: "https://share.lemondouble.com/s/Xk29fQa" },
} satisfies Meta<typeof CopyField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Emphasis: Story = {
  name: "강조형",
  render: (args) => (
    <div className="max-w-lg">
      <CopyField
        {...args}
        actions={
          <Button variant="ghost">
            <QrCode size={16} />
            QR 코드
          </Button>
        }
      />
    </div>
  ),
};

export const Inline: Story = {
  name: "인라인형",
  render: () => (
    <div className="grid max-w-md gap-6">
      <div>
        <Label>로그인 토큰</Label>
        <CopyInline label="로그인 토큰" value="a91f3c7e0b2d48e6c55d0f7a1e9b2c4d" />
      </div>
      <Callout tone="success">
        <p className="mb-3">로그인 토큰을 만들었습니다.</p>
        <CopyInline label="로그인 토큰" value="5d0f7a1e9b2c4da91f3c7e0b2d48e6c5" />
      </Callout>
    </div>
  ),
};
