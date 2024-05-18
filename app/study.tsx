import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function StudyScreen() {
  return <View>
    <Text>This is Study Page!!</Text>
    <Text>This is Study Page!!</Text>
    <Text>This is Study Page!!</Text>
    <Text>This is Study Page!!</Text>
    <Link replace href="/farm">Go to Farm</Link>
    <Link replace href="/study">Go to Study</Link>
  </View>
}

