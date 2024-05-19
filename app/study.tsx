import BottomNavBar from "@/components/Navbar";
import { colors } from "@/assets/color";
import { Link } from "expo-router";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import UserInfoCard from "@/components/UserInfoCard";

export default function StudyScreen() {

  const line1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,a pariatur.";
  const line2 = "a pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,";
  const line3 = "lorem ipsum dolor sit amet, consectetur adipiscing elit, a pariatur. lorem lorem lorem ipsum asdasdas fish TOUCH FISH";

  

  return <ImageBackground source={require('../assets/images/farm.png') }>
    <View style={styles.container}>
      <UserInfoCard />

      <View style={{ height: 20 }} />

      <Link href="study/timeline">
        <View style={styles.btnShit} >
          <Text style={styles.btnText}>Timeline</Text>
          <View style={styles.arrow} />
        </View>
      </Link>

      <View style={{ height: 10 }} />

      <Link href="study/timelinesetting">
        <View style={[styles.btnShit, styles.btnShit2]} >
          <Text style={[styles.btnText, styles.btnText2]}>Timeline Settings</Text>
          <View style={styles.arrow} />
        </View>
      </Link>

      <View style={{ height: 20 }} />

      <View style={[styles.btnShit, styles.btnShit3]} >
        <Text style={[styles.btnText, styles.btnText3]}>Daily Mission</Text>
        <Text style={[styles.btnText, styles.btnText4]}>Items ranked based on priority</Text>

        <View style={{ height: 5 }} />
        <ScrollView>
          
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.star}>⭐⭐⭐</Text>
            <Text style={[styles.btnText, styles.btnTextMain]}>{line1}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.star}>⭐⭐     </Text>
            <Text style={[styles.btnText, styles.btnTextMain]}>{line2}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.star}>⭐          </Text>
            <Text style={[styles.btnText, styles.btnTextMain]}>{line3}</Text>
        </View>
         
        </ScrollView>
      </View>

      

      <BottomNavBar />
    </View>
  </ImageBackground>
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    height: "100%",
    width: "100%"
  },

  btnShit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1A570', 
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 300,
    height: 80,
    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  btnShit2: {
    backgroundColor: '#C0C276', 
    height: 60,
  },

  btnShit3: {
    backgroundColor: 'rgba(149, 172, 112, 1)', 
    height: 320,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },

  btnText: {
    fontFamily: 'Handjet-Bold', // Ensure this matches the font file name
    fontSize: 32,
    color: colors.text,
    marginRight: 150,
  },

  btnText2: {
    fontSize: 26,
    marginRight: 82,
  },

  btnText3: {
    fontSize: 32,
    marginRight: 0,
    marginBottom: -10
  },

  btnText4: {
    fontSize: 16,
    marginRight: 0,
    marginTop: 8
  },

  btnTextMain: {
    fontSize: 20,
    marginRight: 0,
    fontFamily: 'Handjet-Medium',
  },

  star: {
    fontSize: 16,
    marginRight: 10,
  },

  arrow: {
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

