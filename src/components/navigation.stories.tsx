import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bell, LogOut, UserPen } from "lucide-react";
import { AccountMenu, NavAccount } from "./account-menu";
import { AppNav, NavButton, NavLink } from "./app-nav";
import { MenuItem, MenuSeparator } from "./dropdown-menu";
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
          "데스크톱은 링크 · CTA | 구분선 · 아이콘 동작 순서입니다. 모바일(640px 미만)은 자주 쓰는 아이콘 동작을 상단 바에 남기고, 메뉴에서는 CTA를 일반 항목으로 맨 위에 둡니다. 로그인하는 앱은 계정 관련 동작을 데스크톱에서는 AccountMenu 하나로 묶고, 모바일에서는 메뉴 맨 아래의 NavAccount 한 줄로 둡니다.",
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

const accountMenu = (
  <AccountMenu name="LemonDouble" picture="images/lemon-avatar.webp">
    <MenuItem icon={UserPen} onSelect={() => {}}>
      프로필 수정
    </MenuItem>
    <MenuItem icon={Bell} keepOpen onSelect={() => {}}>
      알림 켜기
    </MenuItem>
    <MenuSeparator />
    <MenuItem icon={LogOut} onSelect={() => {}}>
      로그아웃
    </MenuItem>
  </AccountMenu>
);

export const Default: Story = {
  render: (args) => (
    <div className="h-80">
      <AppNav
        {...args}
        cta={{ href: "#", label: "파일 공유하기" }}
        actions={accountMenu}
        mobileFooter={
          <NavAccount name="LemonDouble" picture="images/lemon-avatar.webp" profileHref="#">
            <IconButton label="알림 켜기">
              <Bell size={20} />
            </IconButton>
            <IconButton label="로그아웃">
              <LogOut size={20} />
            </IconButton>
          </NavAccount>
        }
      >
        <NavButton>파일 요청</NavButton>
        <NavLink href="#" active>
          내 공유
        </NavLink>
      </AppNav>
    </div>
  ),
};

export const ActionsOnly: Story = {
  name: "링크 없이 동작만",
  render: (args) => (
    <div className="h-40">
      <AppNav {...args} name="만화 번역기" reloadOnHome actions={notificationButton} />
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
