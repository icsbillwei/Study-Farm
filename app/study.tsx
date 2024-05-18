import BottomNavBar from "@/components/Navbar";
import { colors } from "@/assets/color";
import { Link } from "expo-router";
import { View, Text, StyleSheet, ImageBackground, } from "react-native";
import UserInfoCard from "@/components/UserInfoCard";

export default function StudyScreen() {
  return <ImageBackground source={require('../assets/images/farm.png')}>
    <View style={styles.container}>
      <UserInfoCard />

      <View style={{ height: 20 }} /> 

      <View style={styles.btn} >
        <Text style={styles.btnText}>Timeline</Text>
        <View style={styles.arrow} />
      </View>

      <BottomNavBar />
    </View>
  </ImageBackground>
}

const styles = StyleSheet.create({

  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    height: "100%",
    width: "100%"
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1A570', // Color from the image
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 300,
    height: 100,
    elevation: 5,
  },

  btnText: {
    fontFamily: 'Handjet-Bold', // Ensure this matches the font file name
    fontSize: 34,
    color: colors.text,
  },

  arrow: {
    marginLeft: 130,
    width: 0,
    height: 0,
    borderTopWidth: 12,
    borderRightWidth: 0,
    borderBottomWidth: 12,
    borderLeftWidth: 12,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'white',
  },
});

