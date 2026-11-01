import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoginPage } from "./login-page";

const meta = {
  title: "Page/LoginPage",
  component: LoginPage,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <main className="flex min-h-dvh flex-col">
        <Story />
      </main>
    ),
  ],
  args: {
    logoSrc: "/images/lemon-logo.webp",
    name: "Lemon",
    accent: "Protocol",
    description: "큰 파일도 링크 하나로",
    loginHref: "#",
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const KoreanName: Story = {
  name: "한글 이름",
  args: { name: "만화", accent: "번역기", description: "일본어 만화 이미지를 한국어로 번역합니다." },
};

export const MascotLogo: Story = {
  name: "캐릭터 로고",
  args: {
    logoSrc: "/images/lemon-character-sd.webp",
    name: "금요미식회",
    accent: "지도",
    description: "멤버들이 다녀온 맛집을 한 지도에",
  },
};

export const WithoutAccent: Story = {
  name: "강조 없음",
  args: { name: "대사 검색", accent: undefined, description: "대사로 이미지를 찾습니다." },
};
