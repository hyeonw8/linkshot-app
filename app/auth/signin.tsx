import { View, Text, StyleSheet } from "react-native";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { router } from "expo-router";
import { AUTH_COPY } from "@/constants/authCopy";
import { useGoogleLogin } from "@/features/auth/hooks/useGoogleLogin";
import { GoogleLoginButton } from "@/features/auth/components/GoogleLogInButton";

export default function SignInScreen() {
  const { user, initialized } = useAuthStore();
  const { login, isLoading } = useGoogleLogin();

  useEffect(() => {
    if (initialized && user) {
      router.replace("/");
    }
  }, [initialized, user]);

  if (!initialized) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {AUTH_COPY.SIGN_IN.TITLE}
      </Text>

      <GoogleLoginButton
        onPress={login}
        loading={isLoading}
        disabled={isLoading}
      />

      <Text style={styles.description}>
        {AUTH_COPY.SIGN_IN.DESCRIPTION}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    marginTop: 16,
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
  },
});