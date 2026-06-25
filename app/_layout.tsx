import "../global.css";

import { useEffect } from "react";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { designTokens } from "@/theme/designTokens";

SplashScreen.preventAutoHideAsync().catch(() => {
  // The splash screen can already be hidden during fast refresh.
});

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(designTokens.fonts.assets);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {
        // No-op: hiding twice should not block rendering.
      });
    }
  }, [fontError, fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: designTokens.colors.neutral.background,
        },
        headerShown: false,
      }}
    />
  );
}
