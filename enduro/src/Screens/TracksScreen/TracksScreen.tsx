import { View, StyleSheet, Text } from "react-native";

const TracksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>this is an t Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TracksScreen;
