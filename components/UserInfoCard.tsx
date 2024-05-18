import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

const UserInfoCard: React.FC = () => {
  return (
    <ImageBackground
      source={require("../assets/images/UserInfo-BG.png")}
      style={styles.background}
    >
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image source={require("../assets/images/ProfilePic.png")}></Image>
          <Text style={styles.level}>LV 4</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}> HawkHacks</Text>
          <Image source={require("../assets/images/fruits.png")}></Image>
          <Image source={require("../assets/images/UserBar.png")}></Image>
        </View>
      </View>
     
    </ImageBackground>
  );
};
export default UserInfoCard;

const styles = StyleSheet.create({
  background: {
    width: 250,
    height: 125,
    paddingHorizontal: 20,
  },
 
  level: {
    fontFamily: "Handjet-Bold",
    fontSize: 25,
    color: '#8C2C0D',
  },

  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between',
    flex:1,
  },

  profile: {
    display: 'flex',
    flexDirection: 'row',
    flex:1,
    justifyContent:'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontFamily: "Handjet-Medium",
    fontSize: 30,
    color: "white",
  },

  info:{
    display: "flex",
    alignItems: "center",
    paddingTop:30,
  }
});
