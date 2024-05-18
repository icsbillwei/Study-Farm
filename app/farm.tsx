import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function FarmScreen() {
  return <View>
    <Text>This is Farm Page!</Text>
    <Text>This is Farm Page!</Text>
    <Text>This is Farm Page!</Text>
    <Text>This is Farm Page!</Text>
    <Link replace href="/farm">Go to Farm</Link>
    <Link replace href="/study">Go to Study</Link>
  </View>
}
