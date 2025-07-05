import { View, Text, StyleSheet } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Name: {user?.firstName} {user?.lastName}</Text>
      <Text style={styles.info}>Email: {user?.primaryEmailAddress?.emailAddress}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});