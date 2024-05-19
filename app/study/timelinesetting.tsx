import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, TextInput, View, Text, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-elements';
import {TimelineObject, useGlobalState} from '../../components/TimelineSchema';
import TimelineItem from '../../components/TimelineItem';
import { colors } from '../../assets/color';
import { useRouter } from 'expo-router';


export default function SetTimelinePage() {

  const [className, setClassName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [percentage, setTaskPercent] = useState(Number(0));
  const [month, setMonth] = useState(Number(0));
  const [day, setDay] = useState(Number(1));

  // Task list
  // const [tasks, setTasks] = useState<TimelineObject[]>([]);
  const { tasks, addTask, removeTask, clearTasks } = useGlobalState(); // <-- Use global state


  const onAddTask = () => {
    // Add task to the list
    const newTask: TimelineObject = {
      id: Math.random() * 10000,
      name: taskName,
      percentage: percentage,
      dueDate: new Date(new Date().getFullYear(), month - 1, day) // month is 0-indexed    
    };
    // setTasks([...tasks, newTask])
    addTask(newTask); // <-- Add task to global state;

    // Clear the input fields
    setTaskName('');
    setTaskPercent(0);
    setMonth(0);
    setDay(1);
  };

  const router = useRouter();

  const handleDismiss = () => {
    router.dismiss();
  };


  const onDone = () => {

  }

  return (
    <ImageBackground source={require('../../assets/images/farm.png')} style={styles.background}>
      <View style={styles.containerShit}>

        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => handleDismiss()}>
            <Image source={require('../../assets/images/pixel-arrow.png')} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Add Class</Text>
          
        </View>

        <View style={{ height: 10 }} />

        <TextInput
          style={styles.input}
          onChangeText={text => setClassName(text)}
          value={className !== '' ? className : undefined}
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
            placeholder='Weighting (%)'
            placeholderTextColor={colors.textGold}
            keyboardType='numeric'
          />

          {/* Set date */}
          <View style={styles.addDateContainer}>
            <TextInput
              style={styles.inputTime}
              onChangeText={text => setMonth(Number(text))}
              placeholder='Month'
              value={month !== 0 ? month.toString() : undefined}
              placeholderTextColor={colors.textGold}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.inputTime}
              onChangeText={text => setDay(Number(text))}
              placeholder='Day'
              value={day !== 1 ? day.toString() : undefined}
              placeholderTextColor={colors.textGold}
              keyboardType='numeric'
            />
          </View>

          <View style={styles.buttonRow}>
            <Button
              title='Add Task'
              buttonStyle={styles.btn1}
              titleStyle={styles.btn1Text}
              onPress={onAddTask}
            />
            <Button
              title='Clear Tasks'
              buttonStyle={[styles.btn1, styles.btn2]}
              titleStyle={styles.btn1Text}
              onPress={clearTasks}
            />
          </View>

        </View>

        <ScrollView
          style={styles.addedContainer}
          contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center' }}
        >

          <Text style={styles.subtitle}>
            Added Tasks
          </Text>

          {tasks.map((task) => (
            <TimelineItem key={task.id} item={task} />
          ))}

        </ScrollView>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerShit: {
    position: 'absolute',
    backgroundColor: 'rgba(95, 99, 79, 0.2)',
    height: '90%',
    width: '90%',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 0,
    borderRadius: 10,
  },

  taskContainer: {
    backgroundColor: colors.backgroundGreen,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 35,
    marginHorizontal: 10,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  addedContainer: {
    marginTop: 10,

  },

  addDateContainer: {
    flexDirection: 'row',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginLeft: 10,
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
    marginTop: 10,
    marginBottom: 10
  },

  input: {
    fontFamily: 'Handjet-Bold',
    fontSize: 24,
    marginVertical: 0,
    color: colors.text,
  },

  inputTime: {
    fontFamily: 'Handjet-Bold',
    fontSize: 20,
    marginVertical: 3,
    marginRight: 15,
    color: colors.text,
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
    marginHorizontal: 0,
    marginTop: 20,
    backgroundColor: 'rgba(158, 138, 108, 1)',

    
  },

  btn2: {
    backgroundColor: '#D76A6A'
  },

  btn3: {
    backgroundColor: colors.backgroundGreen,
    marginLeft: 60,
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  btn1Text: {
    color: colors.text,
    fontSize: 18,
    fontFamily: 'Handjet-Bold',
  }
});