import { SafeAreaView, StyleSheet, Text, Platform, StatusBar, View } from "react-native";
import TopBarNavigation from "../../Components/TopBarNavigation/TopBarNavigation";


const TracksScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <TopBarNavigation />
      <View style={styles.content}>
        <Text style={styles.textContent}>this is an t Screen! sadsad sadd sa sadsadsa</Text>
      </View>
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
  },
  content: {
    flex: 1,
  },
  textContent: {
    flex: 1,
    color: "red",
  }
});

export default TracksScreen;
