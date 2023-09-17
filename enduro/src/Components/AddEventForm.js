import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from "react-native";

export const AddEventForm = () => {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
        <Text>234</Text>
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
