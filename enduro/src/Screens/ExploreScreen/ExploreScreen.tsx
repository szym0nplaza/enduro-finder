import { SafeAreaView, StyleSheet, Text, Platform, StatusBar } from "react-native";

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text>this is an ex Screen!</Text>
    </SafeAreaView>
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


export default ExploreScreen;
