import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { AUTH_COPY } from '@/constants/authCopy';

const AuthCodeErrorScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{AUTH_COPY.AUTH_ERROR.TITLE}</Text>

      <Text style={styles.description}>
        {AUTH_COPY.AUTH_ERROR.DESCRIPTION}
      </Text>

      <TouchableOpacity onPress={() => router.replace("/auth/signin")}>
        <Text style={styles.link}>{AUTH_COPY.AUTH_ERROR.BACK_TO_SIGNIN}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthCodeErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
    textAlign: "center",
  },
  link: {
    fontSize: 14,
    color: "#3B82F6",
    textDecorationLine: "underline",
  },
});