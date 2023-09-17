// import Track from "./Track";
import { SafeAreaView, StyleSheet, Text, Platform, StatusBar, View, Button, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { supaBaseclient } from "../../../utilities/supabaseclient";
import { Track } from "../../Components/Track";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, Spinner } from "native-base";


const TracksScreen = () => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useEffect(()=>{
    const call = async ()=>{
      const response = await supaBaseclient.from('routes').select(`*`)
      if (response.data) {
        console.log(response.data)
        setData(response.data)
      }
    }
    call();
  }, [])

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Button style={styles.topBar} title="Register new Track" 
      onPress={() =>
        navigation.navigate('RegisterTrackForm')
      }/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollArea}>
        {data ? data.map((element, index) => {
          return <Track data={element} key={index}/>
        }):<NativeBaseProvider style={{display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner accessibilityLabel="Loading posts" /></NativeBaseProvider>}
      </ScrollView>
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
    flexDirection: "column"
  },
  textContent: {
    flex: 1,
    color: "red",
  },
  topBar:{
    height: "7%",
    width: "100%",
    backgroundColor: "#9EE493",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  scrollArea:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});

export default TracksScreen;
