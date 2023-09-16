import { SafeAreaView, StyleSheet, Text, Platform, StatusBar } from "react-native";

const EventsScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Text>this is an Events Screen!</Text>
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

export default EventsScreen;
