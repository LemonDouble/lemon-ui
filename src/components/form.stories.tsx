import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./card";
import { FieldError, HelpText, Input, Label, Select, Textarea } from "./form";

const meta = {
  title: "Form/Input",
  component: Input,
  args: { placeholder: "이메일 주소를 입력하세요" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <Input {...args} />
    </div>
  ),
};

export const Fields: Story = {
  render: () => (
    <div className="grid max-w-md gap-5">
      <div>
        <Label htmlFor="memo">메모</Label>
        <Input id="memo" placeholder="받는 사람에게 보일 메모" />
        <HelpText>최대 100자까지 적을 수 있습니다.</HelpText>
      </div>
      <div>
        <Label htmlFor="ip">허용할 IP</Label>
        <Input id="ip" aria-invalid defaultValue="192.168.1.300" />
        <FieldError>&quot;192.168.1.300&quot;은(는) 올바른 IP 주소나 대역이 아닙니다.</FieldError>
      </div>
      <div>
        <Label htmlFor="category">분류</Label>
        <Select id="category" defaultValue="doc">
          <option value="doc">문서</option>
          <option value="image">이미지</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="feedback">피드백</Label>
        <Textarea id="feedback" placeholder="의견이나 제안 사항을 자유롭게 작성해 주세요" />
      </div>
    </div>
  ),
};

export const InsideCard: Story = {
  name: "Card 안에서",
  render: () => (
    <Card className="grid max-w-md gap-4">
      <p className="text-xs text-fg-muted">Card 안에서는 입력 요소의 배경이 자동으로 bg가 됩니다.</p>
      <div>
        <Label htmlFor="card-memo">메모</Label>
        <Input id="card-memo" placeholder="받는 사람에게 보일 메모" />
      </div>
      <div>
        <Label htmlFor="card-category">분류</Label>
        <Select id="card-category">
          <option>문서</option>
        </Select>
      </div>
    </Card>
  ),
};
