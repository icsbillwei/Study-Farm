import { NPCProps } from "@/app/farm";
import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import { colors } from "@/assets/color";
import { AVPlaybackSource, Audio } from "expo-av";
import { useGlobalState } from "../GlobalState";

const NPC: React.FC<NPCProps> = ({
  name,
  iconUrl,
  personality,
  coordinates,
  soundUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const sound = useRef<Audio.Sound | null>(null);
  const {tasks} = useGlobalState();
  const percentageDone = tasks.filter(task => task.done).length / tasks.length;
  let imageIndex: 0 | 1 | 2; // 1 is angry
  if (percentageDone > 0.8) {
    imageIndex = 2;
  }
  else if (percentageDone > 0.3) {
    imageIndex = 0;
  }
  else {
    imageIndex = 1;
  }


  const playSound = async (soundUrl: AVPlaybackSource) => {
    try {
      if (sound.current) {
        await sound.current.unloadAsync();
      }
      const { sound: soundObject } = await Audio.Sound.createAsync(soundUrl);
      sound.current = soundObject;
      await sound.current.playAsync();
    } catch (error) {
      console.error("Error loading or playing sound:", error);
    }
  };

  const handleAnimalClick = () => {
    playSound(soundUrl);
    setIsModalOpen(true);
  };

  const handleChatInputChange = (text: string) => {
    setChatMessage(text);
  };

  const handleChatSubmit = () => {
    // Handle chat submission logic here
    // You can use the chatMessage state to access the typed message
    // and perform any necessary actions
    setChatMessage("");
  };

  const handleGoBack = () => {
    setIsModalOpen(false);
  };

  return (
    <View
      style={{
        position: "absolute",
        left: coordinates.x,
        top: coordinates.y,
        ...styles.container,
      }}
    >
      <TouchableOpacity onPress={handleAnimalClick}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              padding: 3,
              fontFamily: "Handjet-Bold",
              color: "white",
              fontSize: 20,
            }}
          >
            {name}
          </Text>
          <Image source={iconUrl[imageIndex]} style={{...styles.outsideAnimal, height: name.toLocaleLowerCase().includes("goose") ? 55 : 80}}></Image>
        </View>
      </TouchableOpacity>

      {isModalOpen && (
        <Modal
          transparent={true}
          style={{
            padding: 30,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 50,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(90, 90, 90, 0.1)",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Image source={iconUrl[imageIndex]} height={300} width={300}></Image>
            <View
              style={{
                padding: 12,
                backgroundColor: "rgba(30, 30, 30, 0.7)",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Handjet-Bold",
                  color: "white",
                  fontSize: 20,
                }}
              >
                {name}
              </Text>
              <View style={{ height: 10 }} />
              <Text style={{ fontFamily: "Handjet-Regular", color: "white" }}>
                {personality}
              </Text>
            </View>

            <View style={{ height: 10 }} />

            {/* prompt is here */}
            <View
              style={{
                padding: 12,
                backgroundColor: colors.backgroundGreen,
                borderRadius: 10,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
              }}
            >
              <Text
                style={{
                  fontFamily: "Handjet-Bold",
                  color: "white",
                  fontSize: 14,
                }}
              >
                {name} says:
              </Text>
              <View style={{ height: 10 }} />
              <Text style={{ fontFamily: "Handjet-Regular", color: "white" }}>
                adsad adasduad as da sa sda sd asd sd asd dsa ads asd ads adsad{" "}
              </Text>
            </View>

            <View style={{ height: 10 }} />

            <TextInput
              value={chatMessage}
              onChangeText={handleChatInputChange}
              placeholder="Type your message..."
              style={{
                backgroundColor: "#fff",
                fontFamily: "Handjet-Regular",
                fontSize: 16,
                padding: 10,
                margin: 10,
                borderRadius: 5,
                height: 50,
                width: 300,
                color: "black",
              }}
            />

            <Text onPress={handleChatSubmit} style={styles.button}>
              Ask {name}
            </Text>
            <Text onPress={handleGoBack} style={styles.button}>
              Say Bye!
            </Text>

            <View style={{ height: 40 }} />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default NPC;

const styles = StyleSheet.create({
  container: {
    fontFamily: "Handjet-Regular",
  },

  outsideAnimal: {
    objectFit: "contain",
  },

  button: {
    color: "white",
    fontFamily: "Handjet-Regular",
    backgroundColor: "#556B2F", // Olive green color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 50,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
});
