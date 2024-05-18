import { ImageBackground, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import EntranceScreen from "../pages/EntranceScreen";
import TimelineView from "@/app/study/timeline";
// import SetTimelinePage from "../../pages/SetTimelinePage";

import { Image } from 'react-native';
import { useEffect } from "react";

// const images = [
//   require('../assets/images/farm.png'),
//   // add farm 2 png
// ];

// const cacheImages = (images: Array<string>): Array<Promise<boolean>> => {
//   return images.map((image: string) => {
//     return Image.prefetch(image);
//   });
// };

// const preloadImages = async () => {
//   const imageAssets = cacheImages(images);
//   await Promise.all([...imageAssets]);
// };

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

  // useEffect(() => {
  //   const loadResources = async () => {
  //     try {
  //       const imageAssets = cacheImages(images);
  //       await Promise.all([...imageAssets]);
  //     } catch (error) {
  //       console.warn('Error loading images:', error);
  //     }
  //   };

  //   loadResources();
  // }, []);

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
        {/* <TimelineView /> */}
        {/* <SetTimelinePage /> */}
      </View>
  );
}

