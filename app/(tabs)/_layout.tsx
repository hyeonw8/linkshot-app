import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { TabItem } from "@/components/TabItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      safeAreaInsets={{ bottom: 0 }} // 자동 safeArea inset 적용을 끔
      screenOptions={{
        // headerShown: false,
        tabBarStyle: [styles.tabBar, { bottom: 10 + insets.bottom }], // 직접 바 위치를 안전영역만큼 올림
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBarItem,
        tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} label="홈" iconName="home-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "마이페이지",
          tabBarIcon: ({ focused }) => (
            <TabItem
              focused={focused}
              label="마이페이지"
              iconName="person-outline"
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    height: 75,
    marginHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.88)",
    borderTopWidth: 0,
    paddingVertical: 0,
    borderRadius: 33,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  tabBarItem: {
    paddingVertical: 0,     
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIcon: {
    height: "100%",         
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
  },
});
