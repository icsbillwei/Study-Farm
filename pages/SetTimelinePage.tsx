import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, TextInput, View, Text, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-elements';
import TimelineItem from '../components/TimelineItem';
import { colors } from '../assets/color';
import { useFonts } from 'expo-font';


export default function SetTimelinePage() {
    
  const [className, setClassName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [percentage, setTaskPercent] = useState(Number(0));

  return (
    <ImageBackground source={require('../assets/images/farm.png')} style={styles.background}>
        <SafeAreaView style={styles.container}>

        <View style={styles.titleRow}>
          <TouchableOpacity>
            <Image source={require('../assets/images/pixel-arrow.png')} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Add Class</Text>
        </View>

            
        
        <View style={{ height: 10 }} /> 

        <TextInput
            style={styles.input}
            onChangeText={text => setClassName(text)}
            value={className}
            placeholder='Class Name'
            placeholderTextColor={colors.textGold}
        />

        <View style={{ height: 20 }} /> 

        <View style={styles.taskContainer}>
          <TextInput
              style={styles.input}
              onChangeText={text => setTaskName(text)}
              value={taskName}
              placeholder='Task Name'
              placeholderTextColor={colors.textGold}
          />
          <Text style={styles.subText}>
            Is it an assignment, quiz, test or others?
          </Text>
          <TextInput
              style={styles.input}
              onChangeText={text => setTaskPercent(Number(text))}
              value={percentage !== 0 ? percentage.toString() : undefined}
              placeholder='Weighting'
              placeholderTextColor={colors.textGold}
              keyboardType='numeric'
          />
          <Button
              title='Add Task'
              buttonStyle={styles.btn1}
              titleStyle={styles.btn1Text}
          >
          </Button>
        </View>
        
        <ScrollView 
        style={styles.addedContainer}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center' }}
        >

          <Text style={styles.subtitle}>
              Added Tasks
          </Text>
          
        </ScrollView>

        </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(95, 99, 79, 0.80)',
    height: '90%',
    padding: 50,
    borderRadius: 20,
  },

  taskContainer: {
    backgroundColor: colors.backgroundGreen,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 35,
  },

  addedContainer: {
    marginTop: 10,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  backButton: {
    width: 30,
    height: 30,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 20,
  },

  title: {
    fontSize: 36,
    fontFamily: 'Handjet-Bold',
    color: colors.text,
    marginBottom: 20
  },

  subtitle: {
    fontSize: 30,
    fontFamily: 'Handjet-Bold',
    color: colors.text,
    marginTop: 30,
    marginBottom: 20
  },

  input: {
    fontFamily: 'Handjet-Bold',
    fontSize: 22,
    marginVertical: 3,
    color: colors.textGold,
  },

  subText: {
    fontFamily: 'Handjet-Medium',
    fontSize: 14,
    marginBottom: 20,
    color: colors.text,
  },


  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn1: {
    borderRadius: 10,
    marginHorizontal: 60,
    marginTop: 20,
    backgroundColor: 'rgba(158, 138, 108, 1)',
  },

  btn1Text: {
    color: colors.text,
    fontSize: 18,
    fontFamily: 'Handjet-Bold',
  }
});