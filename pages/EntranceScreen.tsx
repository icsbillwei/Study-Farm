import { User, useGlobalState } from "@/components/GlobalState";
import { Link, useNavigation } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native";

export default function EntranceScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useGlobalState();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground
      source={require("../assets/images/farm-blurry.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require("../assets/images/geese-logo.png")} />
        <Animated.Text style={{ ...styles.title, opacity: fadeAnim }}>
          Study Farm
        </Animated.Text>
      </View>

      <View style={styles.username}>
        <View style={styles.inputWrapper}>
          <Text style={styles.loginTitle}> Username</Text>
          <View style={styles.inputRow}>
            <Image
              source={require("../assets/images/username.png")}
              style={styles.icon}
            />
            <TextInput
              onChangeText={setUsername}
              style={styles.inputUser}
              placeholder="Type your username"
              placeholderTextColor="white"
              value={username}
            />
          </View>
          <View style={styles.lineStyle} />
        </View>
      </View>

      <View style={styles.username}>
        <Text style={styles.loginTitle}> Password</Text>
        <View style={styles.inputRow}>
          <Image
            source={require("../assets/images/password.png")}
            style={styles.icon}
          />
          <TextInput
            onChangeText={setPassword}
            style={styles.inputUser}
            secureTextEntry={true}
            placeholder="Type your password"
            placeholderTextColor="white"
            value={password}
          />
        </View>
        <View style={styles.lineStyle} />
      </View>

      <Link href="/study" style={styles.button} onPress={() => {
        const user: User = {username, password}
        setUser(user);
      }}>
        <Text style={styles.buttonText}>Enter</Text>
      </Link>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "Handjet-Bold",
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
    marginVertical: 15,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
  loginTitle: {
    fontFamily: "Handjet-SemiBold",
    fontSize: 28,
    color: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 5,
    marginTop: 5,
  },

  icon: {
    width: 15,
    height: 20,
    marginRight: 20,
    marginLeft: 25,
  },

  username: {
    width: "80%",
  },

  inputWrapper: {
    marginBottom: 25,
    marginTop: 20,
  },

  inputUser: {
    fontFamily: "Handjet-Regular",
    fontSize: 15,
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "white",
  },

  button: {
    backgroundColor: "#556B2F", // Olive green color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 100,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
  buttonText: {
    fontFamily: "Handjet-Medium",
    fontSize: 20,
    color: "white",
  },
});
