import { SafeAreaView, StyleSheet, Text, Platform, StatusBar, View, Button } from "react-native";
import { getUserData } from "../../Client/usersTest";
import { useQuery } from "@tanstack/react-query";
import { Badge, Input, NativeBaseProvider } from "native-base";
import { useEffect, useState } from "react";
import { supaBaseclient } from "../../../utilities/supabaseclient";

const ProfileScreen = () => {
const [data, setData] = useState(null)

  useEffect(()=>{
    const call = async ()=>{
      const response = await supaBaseclient.from('users').select(`*`).eq("id", "dfb351d3-5c13-4cdd-b3ee-8d2e625fc7ef")
      if (response.data) {
        console.log(response.data)
        setData(response.data[0])
      }
    }
    call();
  }, [])

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
      <NativeBaseProvider>
        <View style={styles.form}>
        <View style={styles.form2}>
            <Badge style={{marginBottom: 20}} colorScheme={"success"}>USER PROFILE</Badge>
            <Input mx="3" placeholder="Email" w="100%" defaultValue={data.email}/>
            <Input mx="3" placeholder="name" w="100%" defaultValue={data.name}/>
            <Input mx="3" placeholder="surname" w="100%" defaultValue={data.surname}/>
        </View>
        <View style={styles.form2}>
            <Button title="Submit"/>
        </View></View>
        </NativeBaseProvider>
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
  },
  form:{
      width: "100%",
      gap: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "space-between"
  },
  form2:{
      width: "100%",
  }
});

export default ProfileScreen;
