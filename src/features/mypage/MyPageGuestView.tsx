import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const MyPageGuestView = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        로그인이 필요합니다
      </Text>
      <Pressable onPress={() => router.push("/auth/signin")}>
        <Text style={{ color: "#2563EB" }}>로그인 하러 가기</Text>
      </Pressable>
    </View>
  );
};
