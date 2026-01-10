import { useAuthStore } from "@/store/authStore";
import { View, Text, Pressable, Alert } from "react-native";
import { router } from "expo-router";
import { MyPageGuestView } from "@/features/mypage/MyPageGuestView";

export default function MyPage() {
  const { user, initialized, signOut, isLoading } = useAuthStore();

  if (!initialized) return null;

  if (!user) {
    return <MyPageGuestView />;
  }

  const onLogout = () => {
    Alert.alert("로그아웃", "로그아웃 하시겠어요?", [
      { text: "취소", style: "cancel" },
      {
        text: "로그아웃",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut();
            router.replace("/");
          } catch (e) {
            Alert.alert("오류", "로그아웃에 실패했어요. 다시 시도해주세요.");
          }
        },
      },
    ]);
  };

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 12 }}>
        마이페이지
      </Text>

      <Text style={{ marginBottom: 24 }}>{user.email ?? "이메일 없음"} 님</Text>

      <Pressable
        disabled={isLoading}
        onPress={onLogout}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 14,
          borderRadius: 10,
          borderWidth: 1,
          opacity: isLoading ? 0.6 : 1,
          alignSelf: "flex-start",
        }}
      >
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
}
