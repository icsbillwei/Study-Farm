import React from 'react';
import { Image, Text, View, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import TimelineObject from './TimelineSchema';
import TimelineItem from './TimelineItem';
import { colors } from '@/assets/color';


const TimelineView = () => {
  const items: TimelineObject[] = [
    { id: 1, name: 'Touch Fish 1', percentage: 5, dueDate: new Date(2024, 4, 17) },
    { id: 2, name: 'Touch Fish 2', percentage: 15, dueDate: new Date(2024, 4, 18) },
    { id: 3, name: 'Touch Fish 3', percentage: 35, dueDate: new Date(2024, 4, 19) },
   
  ];

  return (
    <ImageBackground 
      source={require('../assets/images/farm.png')} 
      style={styles.background}
    >
    
      <ScrollView style={styles.container}>

      <View style={styles.titleRow}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/pixel-arrow.png')} style={styles.backButton} />
                </TouchableOpacity>
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
    backgroundColor: 'rgba(95, 99, 79, 0.90)',
    marginVertical: 50,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    borderRadius: 20,
  },
});

export default TimelineView;
