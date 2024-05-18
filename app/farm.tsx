import BottomNavBar from "@/components/Navbar";
import { Link } from "expo-router";
import { View, Text, StyleSheet} from "react-native";

export default function FarmScreen() {
  return <View style={styles.container}>
    <Text >This is Farm Page!</Text>
    <BottomNavBar />
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  }
});
