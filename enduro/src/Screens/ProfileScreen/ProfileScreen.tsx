import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, Platform, StatusBar, View } from "react-native";
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
    <View style={styles.androidSafeArea}>
      <Text>this is an pr asdsadsa 5 Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default ProfileScreen;
