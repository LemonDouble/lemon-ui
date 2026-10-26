import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ArrowLeft, ClockAlert, FileX, Lock } from "lucide-react";
import { Button, TextLink } from "./button";
import { NoticeLinks, NoticePage } from "./notice-page";

const meta = {
  title: "Page/NoticePage",
  component: NoticePage,
  parameters: { layout: "fullscreen" },
  args: { icon: FileX, title: "찾을 수 없는 페이지", description: "" },
} satisfies Meta<typeof NoticePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const backHome = (
  <TextLink href="#">
    <ArrowLeft size={16} />
    홈으로
  </TextLink>
);

export const NotFound: Story = {
  name: "404",
  render: () => (
    <NoticePage icon={FileX} code="404" title="찾을 수 없는 페이지" description="주소가 바뀌었거나, 이미 삭제되었을 수 있습니다.">
      {backHome}
    </NoticePage>
  ),
};

export const Expired: Story = {
  name: "만료",
  render: () => (
    <NoticePage
      icon={ClockAlert}
      title="만료된 링크"
      description="파일 보내기 링크는 만든 뒤 24시간 동안만 쓸 수 있습니다. 링크를 보낸 분께 새 링크를 요청해 주세요."
    >
      {backHome}
    </NoticePage>
  ),
};

export const PendingApproval: Story = {
  name: "승인 대기",
  render: () => (
    <NoticePage
      icon={Lock}
      title="접근 권한이 필요합니다"
      description={
        <>
          <strong>레몬</strong>님, 로그인은 완료되었지만 아직 접근 승인이 없습니다. 관리자에게 승인을 요청한 뒤 아래 버튼을 눌러 주세요.
        </>
      }
    >
      <Button className="w-full">승인 확인</Button>
      <NoticeLinks>
        <TextLink href="#">프로필 수정</TextLink>
        <TextLink href="#">로그아웃</TextLink>
      </NoticeLinks>
    </NoticePage>
  ),
};
