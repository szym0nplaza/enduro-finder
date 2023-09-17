import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Track = ({ geoJson }) => {
  return (
    <View style={styles.androidSafeArea}>
    <MapView style={styles.map}>
      <Geojson
        key={geoJson.id}
        geojson={geoJson}
        strokeColor={geoJson.stroke}
        fillColor={geoJson.color}
        strokeWidth={2}
      />
  </MapView>
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
