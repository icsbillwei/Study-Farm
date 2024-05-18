import BottomNavBar from "@/components/Navbar";
import { Link } from "expo-router";
import { View, Text, StyleSheet} from "react-native";

export default function StudyScreen() {
  return <View style={styles.container}>
    <Text >This is Study Page!</Text>
    <BottomNavBar />
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  }
});

