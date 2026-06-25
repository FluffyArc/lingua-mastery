import { fontFamilies } from "./fonts";

export const typography = {
  fontFamilyName: "Poppins",
  scale: {
    h1: {
      usage: "Page / Screen Title",
      fontSize: 32,
      lineHeight: 38.4,
      lineHeightRatio: 1.2,
      fontFamily: fontFamilies.bold,
    },
    h2: {
      usage: "Section Title",
      fontSize: 24,
      lineHeight: 31.2,
      lineHeightRatio: 1.3,
      fontFamily: fontFamilies.semiBold,
    },
    h3: {
      usage: "Card / Module Title",
      fontSize: 20,
      lineHeight: 26,
      lineHeightRatio: 1.3,
      fontFamily: fontFamilies.semiBold,
    },
    h4: {
      usage: "Subheading",
      fontSize: 16,
      lineHeight: 22.4,
      lineHeightRatio: 1.4,
      fontFamily: fontFamilies.medium,
    },
    bodyLarge: {
      usage: "Important content",
      fontSize: 16,
      lineHeight: 25.6,
      lineHeightRatio: 1.6,
      fontFamily: fontFamilies.regular,
    },
    bodyMedium: {
      usage: "Body text",
      fontSize: 14,
      lineHeight: 22.4,
      lineHeightRatio: 1.6,
      fontFamily: fontFamilies.regular,
    },
    bodySmall: {
      usage: "Supporting text",
      fontSize: 13,
      lineHeight: 20.8,
      lineHeightRatio: 1.6,
      fontFamily: fontFamilies.regular,
    },
    caption: {
      usage: "Labels, meta text",
      fontSize: 11,
      lineHeight: 15.4,
      lineHeightRatio: 1.4,
      fontFamily: fontFamilies.regular,
    },
  },
} as const;

export type AppTypography = typeof typography;
