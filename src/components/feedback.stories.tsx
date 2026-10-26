import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";
import { ButtonSpinner, Spinner } from "./spinner";
import { ToastMessage, useToast } from "./toast";

const meta = {
  title: "Feedback/Toast",
  component: ToastMessage,
  args: { tone: "warning", children: "만료 기간은 최대 90일입니다." },
  parameters: {
    docs: {
      description: {
        component:
          "useToast()가 돌려주는 toast 요소를 화면에 한 번 렌더링하고 showToast(메시지, 상태)로 띄웁니다. 화면 하단 가운데에 2.5초 동안 나타납니다.",
      },
    },
  },
} satisfies Meta<typeof ToastMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tones: Story = {
  render: () => (
    <div className="grid justify-items-start gap-2">
      <ToastMessage tone="success">링크를 복사했습니다.</ToastMessage>
      <ToastMessage tone="warning">만료 기간은 최대 90일입니다.</ToastMessage>
      <ToastMessage tone="error">업로드에 실패했습니다.</ToastMessage>
      <ToastMessage tone="info">새 버전이 출시되었습니다.</ToastMessage>
    </div>
  ),
};

export const Live: Story = {
  name: "띄워 보기",
  render: function Render() {
    const { toast, showToast } = useToast();
    return (
      <div className="flex flex-wrap gap-2">
        <Button variant="ghost" onClick={() => showToast("링크를 복사했습니다.", "success")}>
          Success
        </Button>
        <Button variant="ghost" onClick={() => showToast("만료 기간은 최대 90일입니다.", "warning")}>
          Warning
        </Button>
        <Button variant="ghost" onClick={() => showToast("업로드에 실패했습니다.", "error")}>
          Error
        </Button>
        {toast}
      </div>
    );
  },
};

export const Spinners: Story = {
  name: "Spinner",
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      <Button disabled aria-busy>
        <ButtonSpinner />
        저장 중
      </Button>
    </div>
  ),
};
