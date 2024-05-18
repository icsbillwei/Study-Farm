import { Link, useNavigation } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, View, Text, ImageBackground, StyleSheet, Image} from "react-native";
import { TouchableOpacity } from "react-native";

export default function EntranceScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground 
      source={require('../assets/images/farm-blurry.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../assets/images/geese-logo.png')} />
        <Animated.Text style={{...styles.title, opacity: fadeAnim}}>Study Farm</Animated.Text>
        <Link href="/study" style={styles.button}>
          <Text style={styles.buttonText}>Enter</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Handjet-Bold',
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 15,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,

  },
  button: {
    backgroundColor: '#556B2F', // Olive green color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 100,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Handjet-Medium',
    fontSize: 20,
    color: 'white',
  },
});