import BottomNavBar from "@/components/Navbar";
import { Link } from "expo-router";
import { View, Text, StyleSheet} from "react-native";
import UserInfoCard from "@/components/UserInfoCard";

export default function StudyScreen() {
  return <View style={styles.container}>
    <Text >This is Study Page!</Text>
    <UserInfoCard />
    <BottomNavBar />
  </View>
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%"
  }
});

