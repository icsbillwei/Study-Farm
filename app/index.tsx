import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import EntranceScreen from "../pages/EntranceScreen";

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Handjet-Black': require('../assets/fonts/Handjet-Black.ttf'),
    'Handjet-Bold': require('../assets/fonts/Handjet-Bold.ttf'),
    'Handjet-ExtraBold': require('../assets/fonts/Handjet-ExtraBold.ttf'),
    'Handjet-ExtraLight': require('../assets/fonts/Handjet-ExtraLight.ttf'),
    'Handjet-Light': require('../assets/fonts/Handjet-Light.ttf'),
    'Handjet-Medium': require('../assets/fonts/Handjet-Medium.ttf'),
    'Handjet-Regular': require('../assets/fonts/Handjet-Regular.ttf'),
    'Handjet-SemiBold': require('../assets/fonts/Handjet-SemiBold.ttf'),
    'Handjet-Thin': require('../assets/fonts/Handjet-Thin.ttf'),

  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <EntranceScreen />
    </View>
  );
}

