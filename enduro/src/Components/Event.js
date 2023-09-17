import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Event = ({ data }) => {
  return (
    <View style={styles.androidSafeArea}>
      <Text style={{ fontWeight: 'bold' }}>{data.title}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 15
        }}
      >
        <View style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Text>Track Name: {data.journey.name}</Text>
          <Text>
            Organizer: {data.organizer.name} {data.organizer.surname}
          </Text>
          <Text>Date: {data.date}</Text>
        </View>
        <View style={{ width: "50%" }}>
          <Image source={require("../../assets/trasa1.jpeg")} style={{ width: "95%", height: 100 }}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidSafeArea: {
    backgroundColor: "#DDD",
    padding: 10,
    borderRadius: 5,
    width: "95%",
    display: "flex",
    alignItems: "center",
    gap: 25,
    marginBottom: 5,
  },
});
