import { Badge, Input, NativeBaseProvider, View, button } from "native-base";
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Button } from "react-native";


export const RegisterTrackForm = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
        <NativeBaseProvider>
        <View style={styles.form}>
        <View style={styles.form2}>
            <Badge style={{marginBottom: 20}} colorScheme={"success"}>REGISTER TRACK</Badge>
            <Input mx="3" placeholder="Name" w="100%" />
            <Input mx="3" placeholder="Difficulty" w="100%" />
            <Input mx="3" placeholder="Stroke" w="100%"/>
            <Input mx="3" placeholder="Color" w="100%"/>
        </View>
        <View style={styles.form2}>
            <Button title="Submit"/>
        </View></View>
        </NativeBaseProvider>
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
  });
