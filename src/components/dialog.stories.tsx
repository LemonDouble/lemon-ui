import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartNoAxesColumn, FolderOpen, QrCode, Trash2 } from "lucide-react";
import { Button } from "./button";
import { ConfirmDialog, Modal } from "./dialog";
import { CopyMenuItem, DropdownMenu, MenuItem, MenuSeparator } from "./dropdown-menu";
import { Input, Label } from "./form";

const meta = {
  title: "Overlay/Dialog",
  component: Modal,
  args: { title: "프로젝트 이름 변경", onClose: () => {}, children: null },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  name: "Modal",
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        {open && (
          <Modal
            title="프로젝트 이름 변경"
            onClose={() => setOpen(false)}
            footer={
              <>
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                  취소
                </Button>
                <Button size="sm">저장</Button>
              </>
            }
          >
            <p>프로젝트 이름은 대시보드와 공유 링크에 표시됩니다.</p>
            <div className="mt-4">
              <Label htmlFor="project-name">새 프로젝트 이름</Label>
              <Input id="project-name" defaultValue="lemon-protocol" />
            </div>
          </Modal>
        )}
      </>
    );
  },
};

export const Confirm: Story = {
  name: "ConfirmDialog",
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="ghost" onClick={() => setOpen(true)}>
          삭제 확인 열기
        </Button>
        {open && (
          <ConfirmDialog
            title="프로젝트를 삭제할까요?"
            description="삭제하면 프로젝트의 모든 데이터가 영구적으로 사라지며, 복구할 수 없습니다."
            target={{ icon: FolderOpen, name: "lemon-protocol", meta: "파일 128개 · 2026. 10. 26. 생성" }}
            onConfirm={() => setOpen(false)}
            onClose={() => setOpen(false)}
          />
        )}
      </>
    );
  },
};

export const Menu: Story = {
  name: "DropdownMenu",
  render: () => (
    <div className="flex h-56 justify-end">
      <DropdownMenu label="더보기">
        <CopyMenuItem value="https://share.lemondouble.com/s/Xk29fQa" />
        <MenuItem icon={QrCode} onSelect={() => {}}>
          QR 코드
        </MenuItem>
        <MenuItem icon={ChartNoAxesColumn} onSelect={() => {}}>
          다운로드 기록
        </MenuItem>
        <MenuSeparator />
        <MenuItem icon={Trash2} destructive onSelect={() => {}}>
          삭제
        </MenuItem>
      </DropdownMenu>
    </div>
  ),
};
