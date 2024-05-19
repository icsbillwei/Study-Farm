import BottomNavBar from "@/components/Navbar";
import { colors } from "@/assets/color";
import { Link } from "expo-router";
import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import UserInfoCard from "@/components/UserInfoCard";
import { useState, useEffect } from "react";
import { useGlobalState } from "@/components/GlobalState";

export default function StudyScreen() {

  
  const line1 = "Get Quiz 1 done today!";
  const line2 = "Work on Assignment 2 and start studying for the midterm";
  const line3 = "If you have time start early for the Assignment 3";

  const {getString} = useGlobalState();

  // const [line1, setLine1] = useState("");
  // const [line2, setLine2] = useState("");
  // const [line3, setLine3] = useState("");


  // const summaryFunctionCall = async (str1: string, str2: string, str3: string) => {
  //   setLine1(str1);
  //   setLine2(str2);
  //   setLine3(str3);
  // }

  // const handleSummary = async () => {
  //   console.log("Handling summary...");
  //   // Handle chat submission logic here
  //   // You can use the chatMessage state to access the typed message
  //   // and perform any necessary actions
  //   setLine1("Loading...");

  //   try {
  //     console.log("Fetching chat...");
  //     const response = await fetch("http://172.20.10.5:3033/tasks/conversation", { //// change to your own IP address!!!!!!!
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userInfo: getString(), 
  //         today: new Date().toISOString(),
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log("DATA:", data);
  //     summaryFunctionCall(data.message.content.str1, data.message.content.str2, data.message.content.str3);
  //   } catch (error) {
  //     console.error("Error submitting summary:", error);
  //   }
  // };

  // useEffect(() => {
  //   handleSummary();
  // }, []);


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

    overflow: 'hidden',
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
    marginRight: 60,
    fontFamily: 'Handjet-Medium',
    overflow: 'hidden',
  },

  star: {
    fontSize: 10,
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

