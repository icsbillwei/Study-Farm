import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

const BottomNavBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.button} replace href="/farm">
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Image
            source={require("../assets/images/farm-icon-nav.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Farm</Text>
        </View>
      </Link>
      <Link style={styles.button} replace href="/study">
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Image
            source={require("../assets/images/home-icon-nav.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Study</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "transparent",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContent: {
    alignItems: "center",
  },
  icon: {
    width: 45,
    height: 45,
  },
  buttonText: {
    textAlign: 'center',
    color: "#333",
    fontSize: 12,
  },
});

export default BottomNavBar;
