import React from 'react';
import { Image, Text, View, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import TimelineObject from '../../components/TimelineSchema';
import TimelineItem from '../../components/TimelineItem';
import { colors } from '@/assets/color';
import { useRouter } from 'expo-router';
import {backgroundImage} from '../../app/_layout';

const TimelineView = () => {
  const router = useRouter();

  const handleDismiss = () => {
    router.dismiss();
  };
  const items: TimelineObject[] = [
    { id: 1, name: 'Touch Fish 1', percentage: 5, dueDate: new Date(2024, 4, 17) },
    { id: 2, name: 'Touch Fish 2', percentage: 15, dueDate: new Date(2024, 4, 18) },
    { id: 3, name: 'Touch Fish 3', percentage: 35, dueDate: new Date(2024, 4, 19) },

  ];

  return (
    <ImageBackground
      source={backgroundImage} 
      style={styles.background}
    >

      <ScrollView style={styles.container}>

        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => handleDismiss()} >
            <Image source={require('../../assets/images/pixel-arrow.png')} style={styles.backButton} />
          </TouchableOpacity >
          <Text style={styles.title}>Timeline</Text>
        </View>

        {items.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({

  title: {
    fontFamily: 'Handjet-Bold',
    fontSize: 30,
    color: 'white',
    marginBottom: 15,
    marginLeft: 30,
  },

  backButton: {
    width: 35,
    height: 35,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 0,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'rgba(95, 99, 79, 0.1)',
    marginVertical: 50,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    borderRadius: 20,
  },
});

export default TimelineView;
