import { create } from "storybook/theming";

export const lemonTheme = create({
  base: "dark",
  brandTitle:
    '<span style="display:flex;align-items:center;gap:10px;font-family:Galmuri11,monospace;font-weight:700;font-size:16px;color:#F0B90B"><img src="images/lemon-logo.webp" alt="" width="32" height="32" style="border-radius:8px">Lemon UI</span>',
  brandUrl: "https://github.com/LemonDouble/lemon-ui",
  brandTarget: "_blank",

  colorPrimary: "#F0B90B",
  colorSecondary: "#F0B90B",

  appBg: "#1C1816",
  appContentBg: "#12100E",
  appPreviewBg: "#12100E",
  appBorderColor: "#2E2723",
  appBorderRadius: 8,

  fontBase: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
  fontCode: "'JetBrains Mono Variable', monospace",

  textColor: "#F5F0EB",
  textInverseColor: "#12100E",
  textMutedColor: "#8D7E72",

  barBg: "#1C1816",
  barTextColor: "#A89E95",
  barSelectedColor: "#F0B90B",
  barHoverColor: "#F5F0EB",

  inputBg: "#12100E",
  inputBorder: "#2E2723",
  inputTextColor: "#F5F0EB",
  inputBorderRadius: 8,
});
