import BottomNavBar from "@/components/Navbar";
import NPC from "@/components/playground/Animal";
import { Link } from "expo-router";
import { View, Text, StyleSheet, ImageBackground, ImageSourcePropType } from "react-native";

export interface NPCProps {
  name: string;
  iconUrl: ImageSourcePropType;
  personality: string;
  coordinates: { x: number, y: number };
}

const npcs: NPCProps[] = [
  {
    name: "Bessie the Cow",
    iconUrl: require("../assets/images/newcow.png"),
    personality: "Calm and Nurturing: Bessie is the embodiment of patience and tranquility. She takes a nurturing approach, providing gentle encouragement and support. ",
    coordinates: { x: -35, y: 140 }
  },
  {
    name: "Talon the Hawk",
    iconUrl: require("../assets/images/newbird.png"),
    personality: "mysterious",
    coordinates: { x: 260, y: 460 }
  },
  {
    name: "Gabby the Goose",
    iconUrl: require("../assets/images/newgoose.png"),
    personality: "chatty",
    coordinates: { x: 150, y: 390 }
  }
];

export default function FarmScreen() {
  return (
    <ImageBackground source={require("../assets/images/farm-playground.png")}>
      <View style={styles.container}>

        {npcs.map((npc, index) => (
          <NPC
            key={index}
            name={npc.name}
            iconUrl={npc.iconUrl}
            personality={npc.personality}
            coordinates={npc.coordinates} // Set the absolute position here
          />
        ))}
        <BottomNavBar />
      </View>
    </ ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  }
});
