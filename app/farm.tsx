import BottomNavBar from "@/components/Navbar";
import NPC from "@/components/playground/Animal";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import React, { useRef } from "react";
import { AVPlaybackSource, Audio } from "expo-av";

export interface NPCProps {
  name: string;
  iconUrl: ImageSourcePropType[];
  personality: string;
  coordinates: { x: number; y: number };
  soundUrl: AVPlaybackSource;
}

const npcs: NPCProps[] = [
  {
    name: "Bessie the Cow",
    iconUrl: [require("../assets/images/newAnimals/newcow.png"), require("../assets/images/newAnimals/AngryCow.png"), require("../assets/images/newAnimals/HappyCow.png")],
    personality:
      "Calm and Nurturing: Bessie is the embodiment of patience and tranquility. She takes a nurturing approach, providing gentle encouragement and support. ",
    coordinates: { x: -35, y: 140 },
    soundUrl: require("../assets/Audio/moo.wav"),
  },
  {
    name: "Talon the Hawk",
    iconUrl: [require("../assets/images/newAnimals/newbird.png"), require("../assets/images/newAnimals/AngryHawk.png"), require("../assets/images/newAnimals/HappyHawk.png")],
    personality: "mysterious",
    coordinates: { x: 260, y: 460 },
    soundUrl: require("../assets/Audio/bird.mp3"),
  },
  {
    name: "Gabby the Goose",
    iconUrl: [require("../assets/images/newAnimals/newgoose.png"), require("../assets/images/newAnimals/AngryGoose.png"), require("../assets/images/newAnimals/HappyGoose.png")],
    personality: "chatty",
    coordinates: { x: 150, y: 390 },
    soundUrl: require("../assets/Audio/goose.mp3"),
  },
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
            coordinates={npc.coordinates}
            soundUrl={npc.soundUrl}
          />
        ))}
        <BottomNavBar />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
});
