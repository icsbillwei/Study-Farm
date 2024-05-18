import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

const UserInfoCard: React.FC = () => {
    return (
      <ImageBackground 
        source={require('../assets/images/UserInfo-BG.png' )}
        style={styles.background}
      >
        <View style={styles.profile}>
            <Image source={require('../assets/images/ProfilePic.png')}></Image>
            <Text style={styles.level}>LV 4</Text>
        </View> 
      </ImageBackground>
      
      
    );
};
export default UserInfoCard;

const styles = StyleSheet.create({
  background: {
    width: 250,
    height: 125,
  },

  level: {
    fontFamily: 'Handjet-Medium',
    fontSize: 20,
    color: 'black',

  },

  profile: {
   alignItems: 'flex-start',
  }

});