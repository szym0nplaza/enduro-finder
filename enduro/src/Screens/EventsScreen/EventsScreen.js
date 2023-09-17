import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, Platform, StatusBar, ScrollView, View, Button } from "react-native";
import { supaBaseclient } from "../../../utilities/supabaseclient";
import { Event } from "../../Components/Event";
import { useNavigation } from '@react-navigation/native';

const EventsScreen = () => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useEffect(()=>{
    const call = async ()=>{
      const response = await supaBaseclient.from('events').select(`id,date,title,organizer(name, surname),journey(name)`)
      if (response.data) {
        console.log(response.data)
        setData(response.data)
      }
    }
    call();
  }, [])

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Button style={styles.topBar} title="Add new Event" 
      onPress={() =>
        navigation.navigate('AddEventForm')
      }/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollArea}>
        {data ? data.map((element, index) => {
          return <Event data={element} key={index}/>
        }):<Text>Siema</Text>}
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
  },
  scrollArea:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  topBar:{
    height: "7%",
    width: "100%",
    backgroundColor: "#9EE493",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  }
});

export default EventsScreen;
