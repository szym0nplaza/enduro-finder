import { SafeAreaView, StyleSheet, Text, Platform, StatusBar, View } from "react-native";
import TopBarNavigation from "../../Components/TopBarNavigation/TopBarNavigation";
import data from '../../../spatial_data/data.json'
import Track from "./Track";

const TracksScreen = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <TopBarNavigation />
      {data ? data.map((element) => {
          return <Track geoJson={element}/>
        }):<Text>Siema</Text>}
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
