import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { getUserData } from "../../Client/usersTest";
import { useQuery } from "@tanstack/react-query";
const ProfileScreen = () => {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["getUserData"],
    queryFn: getUserData,
  });

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Text>this is an pr asdsadsa 5 Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
