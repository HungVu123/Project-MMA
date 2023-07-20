import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DetailSrceen from "./src/DetailScreen/DetailSrceen";
import ProfileScreen from "./src/ProfileScreen/ProfileScreen";
import ReviewScreen from "./src/ReviewScreen/ReviewScreen";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <ReviewScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
