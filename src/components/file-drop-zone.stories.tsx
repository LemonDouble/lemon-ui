import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ImageUp, Upload } from "lucide-react";
import { Button } from "./button";
import { FileDropPanel, FileDropZone } from "./file-drop-zone";

const meta = {
  title: "Form/FileDropZone",
  component: FileDropZone,
  args: { file: null, onChange: () => {}, description: "크기 제한 없음" },
} satisfies Meta<typeof FileDropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormField: Story = {
  name: "폼 칸형",
  render: function Render(args) {
    const [file, setFile] = useState<File | null>(null);
    return (
      <div className="max-w-lg">
        <FileDropZone {...args} file={file} onChange={setFile} />
      </div>
    );
  },
};

export const Selected: Story = {
  name: "파일을 고른 뒤",
  render: function Render(args) {
    const [file, setFile] = useState<File | null>(
      () => new File([new Uint8Array(2_400_000)], "회의록_최종.pdf", { type: "application/pdf" }),
    );
    return (
      <div className="max-w-lg">
        <FileDropZone {...args} file={file} onChange={setFile} />
      </div>
    );
  },
};

export const Panel: Story = {
  name: "페이지형",
  render: () => (
    <div className="grid max-w-2xl gap-6">
      <FileDropPanel
        icon={ImageUp}
        title="번역할 만화 이미지를 올려 주세요"
        description="이미지를 끌어다 놓거나 Ctrl+V로 붙여넣을 수도 있어요"
        action={
          <Button>
            <Upload size={16} />
            이미지 선택
          </Button>
        }
      />
      <FileDropPanel
        icon={ImageUp}
        title="번역할 만화 이미지를 올려 주세요"
        description="끌어다 놓는 중일 때의 모습입니다"
        dragging
      />
    </div>
  ),
};
