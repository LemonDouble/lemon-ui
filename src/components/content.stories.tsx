import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Lightbulb, Plus } from "lucide-react";
import { Button } from "./button";
import { Callout } from "./callout";
import { Card } from "./card";
import { EmptyState } from "./empty-state";
import { Progress } from "./progress";
import { Skeleton } from "./skeleton";
import { Tag } from "./tag";

const meta = {
  title: "Content/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm">
      <Tag>TypeScript</Tag>
      <h3 className="mt-3 text-[17px] font-bold">금요미식회 설문 툴</h3>
      <p className="mt-2 text-sm text-fg-secondary">팀 내 식당 투표를 위한 실시간 설문 시스템입니다.</p>
    </Card>
  ),
};

export const Callouts: Story = {
  name: "Callout",
  render: () => (
    <div className="grid max-w-xl gap-3">
      <Callout tone="primary" icon={Lightbulb}>
        Galmuri11은 항상 Bold(700)로만 사용합니다.
      </Callout>
      <Callout tone="info">업로드한 파일은 7일 뒤 자동으로 삭제됩니다.</Callout>
      <Callout tone="success">배포가 완료되었습니다.</Callout>
      <Callout tone="warning">저장 공간이 90% 찼습니다. 오래된 파일을 정리해 주세요.</Callout>
      <Callout tone="error">비밀번호가 올바르지 않습니다.</Callout>
    </div>
  ),
};

export const Tags: Story = {
  name: "Tag",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">전송 완료</Tag>
      <Tag variant="warning">횟수 소진</Tag>
      <Tag variant="error">만료</Tag>
    </div>
  ),
};

export const Empty: Story = {
  name: "EmptyState",
  render: () => (
    <EmptyState
      title="공유한 파일이 없습니다"
      description="파일을 올리면 링크가 만들어집니다."
      action={
        <Button>
          <Plus size={16} />
          파일 공유하기
        </Button>
      }
    />
  ),
};

export const Loading: Story = {
  name: "Skeleton · Progress",
  render: () => (
    <div className="grid max-w-md gap-6">
      <Card className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-lg" />
        <div className="grid flex-1 gap-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </Card>
      <Progress value={72} label="업로드 진행률" />
    </div>
  ),
};
