import { View, StyleSheet, Text } from "react-native";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>this is an ex Screen!</Text>
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

export default ExploreScreen;
