import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ChartNoAxesColumn, ChevronRight, FileArchive, FileText, Image, Lock, Trash2 } from "lucide-react";
import { Card } from "./card";
import { CopyMenuItem, DropdownMenu, MenuItem, MenuSeparator } from "./dropdown-menu";
import { Row, RowIcon, RowList } from "./row-list";

const meta = {
  title: "Content/RowList",
  component: RowList,
  parameters: {
    docs: {
      description: {
        component:
          "같은 구조의 항목을 세로로 나열합니다. Row는 서버 컴포넌트에서도 쓸 수 있고, href가 있으면 링크, onClick이 있으면 버튼이 됩니다.",
      },
    },
  },
} satisfies Meta<typeof RowList>;

export default meta;
type Story = StoryObj<typeof meta>;

function RowMenu() {
  return (
    <DropdownMenu label="더보기">
      <CopyMenuItem value="https://share.lemondouble.com/s/Xk29fQa" />
      <MenuItem icon={ChartNoAxesColumn} onSelect={() => {}}>
        다운로드 기록
      </MenuItem>
      <MenuSeparator />
      <MenuItem icon={Trash2} destructive onSelect={() => {}}>
        삭제
      </MenuItem>
    </DropdownMenu>
  );
}

export const Items: Story = {
  name: "항목 목록",
  args: { children: null },
  render: () => (
    <div className="max-w-xl">
      <RowList>
        <Row
          href="#"
          leading={
            <RowIcon>
              <FileText size={20} />
            </RowIcon>
          }
          eyebrow="회의 자료"
          title="회의록_최종.pdf"
          titleSuffix={<Lock size={13} aria-label="비밀번호" className="shrink-0 text-fg-muted" />}
          meta="2.4 MB · 다운로드 3회"
          trailing={
            <>
              3일 남음
              <RowMenu />
            </>
          }
        />
        <Row
          href="#"
          leading={
            <RowIcon>
              <FileArchive size={20} />
            </RowIcon>
          }
          title="디자인 시안 모음.zip"
          meta="148 MB · 다운로드 0회"
          trailing="7일 남음"
        />
        <Row
          href="#"
          dimmed
          leading={
            <RowIcon dimmed>
              <Image size={20} />
            </RowIcon>
          }
          title="휴가 사진.jpg"
          meta="5.1 MB · 다운로드 12회"
          trailing="만료"
        />
      </RowList>
    </div>
  ),
};

export const SearchResults: Story = {
  name: "Compact · 머리글 · 최대 높이",
  args: { children: null },
  render: () => (
    <Card className="max-w-md">
      <p className="mb-3 text-[15px] font-bold">가게 바꾸기</p>
      <RowList compact header="5건 검색됨. 해당하는 가게를 선택하세요." maxHeight={200}>
        {[
          ["레몬 국밥", "한식 › 국밥 · 서울 마포구 망원로 12"],
          ["더블 순대국", "한식 › 국밥 · 서울 마포구 포은로 8"],
          ["망원 돼지국밥", "한식 › 국밥 · 서울 마포구 망원동 401-3"],
          ["합정 곰탕", "한식 › 곰탕 · 서울 마포구 합정동 377"],
          ["상수 설렁탕", "한식 › 설렁탕 · 서울 마포구 상수동 92"],
        ].map(([name, meta]) => (
          <Row
            key={name}
            onClick={() => {}}
            title={name}
            meta={meta}
            trailing={<ChevronRight size={16} className="text-fg-muted" />}
          />
        ))}
      </RowList>
    </Card>
  ),
};
