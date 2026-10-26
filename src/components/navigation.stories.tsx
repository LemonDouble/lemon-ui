import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bell, LogOut } from "lucide-react";
import { AppNav, NavButton, NavLink } from "./app-nav";
import { IconButton } from "./icon-button";
import { Tabs } from "./tabs";

const meta = {
  title: "Navigation/AppNav",
  component: AppNav,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "데스크톱은 링크 · CTA | 구분선 · 아이콘 동작 순서입니다. 모바일(640px 미만)은 자주 쓰는 아이콘 동작을 상단 바에 남기고, 메뉴에서는 CTA를 일반 항목으로 맨 위에 둡니다.",
      },
    },
  },
  args: { logoSrc: "images/lemon-logo.webp", name: "Lemon Protocol" },
} satisfies Meta<typeof AppNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const notificationButton = (
  <IconButton label="알림">
    <Bell size={24} />
  </IconButton>
);

export const Default: Story = {
  render: (args) => (
    <div className="h-80">
      <AppNav
        {...args}
        cta={{ href: "#", label: "파일 공유하기" }}
        actions={
          <>
            {notificationButton}
            <IconButton label="로그아웃">
              <LogOut size={24} />
            </IconButton>
          </>
        }
        mobileActions={notificationButton}
        mobileFooter={<NavButton>로그아웃</NavButton>}
      >
        <NavButton>파일 요청</NavButton>
        <NavLink href="#" active>
          내 공유
        </NavLink>
      </AppNav>
    </div>
  ),
};

export const Mobile: Story = {
  ...Default,
  globals: { viewport: { value: "mobile1" } },
};

export const TabsStory: Story = {
  name: "Tabs",
  parameters: { layout: "padded" },
  render: function Render() {
    const [value, setValue] = useState("all");
    return (
      <Tabs
        aria-label="검색 범위"
        value={value}
        onChange={setValue}
        items={[
          { value: "all", label: "전체" },
          { value: "anime", label: "애니메이션" },
          { value: "game", label: "게임" },
          { value: "drama", label: "드라마 (준비 중)", disabled: true },
        ]}
      />
    );
  },
};
