import { colors } from "./colors";
import { fontAssets, fontFamilies } from "./fonts";
import { typography } from "./typography";

export const designTokens = {
  brand: {
    name: "Lingua",
  },
  colors,
  fonts: {
    assets: fontAssets,
    family: fontFamilies,
  },
  typography,
  radius: {
    swatch: 10,
    card: 16,
    button: 16,
    pill: 999,
  },
  spacing: {
    screenX: 24,
    sectionGap: 24,
    cardPadding: 20,
  },
} as const;

export type DesignTokens = typeof designTokens;
