import AuthInitializer from "@/features/auth/AuthInitializer";
import QueryProvider from "@/providers/QueryProvider";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Stack } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

export default function RootLayout() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID!,
      iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID!,
    });
  }, []);

  return (
    <>
      <QueryProvider>
        <AuthInitializer />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryProvider>
    </>
  );
}
