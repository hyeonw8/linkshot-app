import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export function TabItem({
  focused,
  label,
  iconName,
}: {
  focused: boolean;
  label: string;
  iconName: IoniconName;
}) {
  return (
    <View
      style={[styles.item, focused ? styles.itemActive : styles.itemInactive]}
    >
      <Ionicons
        name={iconName}
        size={22}
        color={focused ? "#FFFFFF" : "#9CA3AF"}
      />
      <Text
        style={[
          styles.label,
          focused ? styles.labelActive : styles.labelInactive,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 92,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  itemActive: { backgroundColor: "#10b981" },
  itemInactive: { backgroundColor: "transparent" },

  label: { fontSize: 12, fontWeight: "600" },
  labelActive: { color: "#FFFFFF" },
  labelInactive: { color: "#9CA3AF" },
});
