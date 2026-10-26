import type { Preview } from "@storybook/nextjs-vite";
import "./storybook.css";
import { lemonTheme } from "./theme";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
    docs: { theme: lemonTheme },
    options: {
      storySort: {
        order: ["소개", "Foundation", "Action", "Form", "Content", "Feedback", "Overlay", "Navigation", "Page"],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="font-sans text-fg">
        <Story />
      </div>
    ),
  ],
};

export default preview;
