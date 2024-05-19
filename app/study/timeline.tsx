import React from 'react';
import { Image, Text, View, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import {TimelineObject, useGlobalState} from '../../components/GlobalState';
import TimelineItem from '../../components/TimelineItem';
import { colors } from '@/assets/color';
import { useRouter } from 'expo-router';
import { TasksContext } from '@/components/TasksContext';

const TimelineView = () => {
  const router = useRouter();

  const handleDismiss = () => {
    router.dismiss();
  };

  const { tasks } = useGlobalState(); // <-- Use global state to get tasks


  return (
    <ImageBackground
      source={require('../../assets/images/farm.png')} 
      style={styles.background}
    >

      <ScrollView style={styles.container}>

        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => handleDismiss()} >
            <Image source={require('../../assets/images/pixel-arrow.png')} style={styles.backButton} />
          </TouchableOpacity >
          <Text style={styles.title}>Timeline</Text>
        </View>

        {tasks.map((item, index) => (
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
    marginLeft: 20,
  },

  backButton: {
    width: 35,
    height: 35,
    marginBottom: 10,
    marginLeft: 10,
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
    backgroundColor: 'rgba(95, 99, 79, 0.2)',
    marginVertical: 50,
    width: '90%',
    paddingVertical: 30,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    borderRadius: 20,
  },
});

export default TimelineView;
