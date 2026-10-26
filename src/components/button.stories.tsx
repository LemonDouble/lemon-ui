import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bell, Download, QrCode, Trash2 } from "lucide-react";
import { Button, LinkButton, TextLink } from "./button";
import { IconButton } from "./icon-button";

const meta = {
  title: "Action/Button",
  component: Button,
  args: { children: "저장", variant: "primary", size: "md" },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost", "danger"] },
    size: { control: "inline-radio", options: ["md", "sm"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">
        <Trash2 size={16} />
        삭제
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Primary</Button>
      <Button size="sm" variant="secondary">
        Secondary
      </Button>
      <Button size="sm" variant="ghost">
        Ghost
      </Button>
      <Button size="sm" variant="danger">
        Danger
      </Button>
    </div>
  ),
};

export const Links: Story = {
  name: "LinkButton · TextLink",
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <LinkButton href="#">파일 공유하기</LinkButton>
      <LinkButton href="#" variant="ghost">
        내 공유에서 보기
      </LinkButton>
      <TextLink href="#">로그아웃</TextLink>
    </div>
  ),
};

export const IconButtons: Story = {
  name: "IconButton",
  render: () => (
    <div className="flex items-center gap-1">
      <IconButton label="다운로드">
        <Download size={16} />
      </IconButton>
      <IconButton label="QR 코드">
        <QrCode size={16} />
      </IconButton>
      <IconButton label="삭제" tone="error">
        <Trash2 size={16} />
      </IconButton>
      <IconButton label="알림" className="ml-3">
        <Bell size={24} />
      </IconButton>
    </div>
  ),
};
