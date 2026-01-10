import { View, Text, StyleSheet } from "react-native";
import { LinkShotManager } from "@/features/meta/LinkShotManager";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>새 북마크 추가</Text>
      <Text style={styles.description}>URL을 입력하여 북마크를 저장하세요</Text>
      <LinkShotManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "#6B7280",
    fontSize: 14,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
