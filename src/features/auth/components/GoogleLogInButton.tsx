import { Pressable, Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  onPress: () => Promise<void>;
  disabled?: boolean;
  loading?: boolean;
}

export const GoogleLoginButton = ({ onPress, disabled, loading }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        (pressed || disabled) && styles.pressed,
      ]}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <FontAwesome name="google" size={20} color="#4285F4" />
        )}
        <Text style={styles.text}>
          {loading ? "로그인 중..." : "Google로 로그인"}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
  },
  pressed: {
    opacity: 0.6,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
});
