import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Audio } from 'expo-av';

const UserInfoCard: React.FC = () => {
  const sound = useRef<Audio.Sound | null>(null);

  const playSound = async () => {
    try {
      const { sound: soundObject } = await Audio.Sound.createAsync(
        require('../assets/Audio/moo.wav')
      );
      sound.current = soundObject;
      await sound.current.playAsync();
    } catch (error) {
      console.error('Error loading or playing sound:', error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/UserInfo-BG.png")}
      style={styles.background}
    >
      <View style={styles.profile}>
        <View style={styles.avatar}>

          <TouchableOpacity onPress={playSound}>
            <Image source={require("../assets/images/ProfilePic.png")}
            style={styles.profilePic}/>
          </TouchableOpacity>

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

  profilePic: {

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
  },
});
