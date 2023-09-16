import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

const TopBarNavigation = () => {
  return (
    <View style={styles.androidSafeArea}>
      <View style={styles.centeredBox}>
          <Text style={styles.centerText}>This is a top ba asassr navi</Text>
      </View>
      <View style={styles.centeredBox}>
          <Text style={styles.centerText}>This is a top ba asassr navi</Text>
      </View>
    </View>
  );
};

export default TopBarNavigation;

// Custom wrapper?
const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    maxHeight: 40,
    padding: 8,
    width: '100%',
    backgroundColor: "#9EE493",
    justifyContent: 'space-between', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
  },
  centeredBox: {
    flex: 1,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
  },
  centerText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
