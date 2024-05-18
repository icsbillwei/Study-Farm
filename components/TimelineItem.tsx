import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import TimelineObject from './TimelineSchema';

const low: number = 10;
const med: number = 25;

interface TimelineItemProps {
    item: TimelineObject;
}

const TimelineItem = ({ item }: TimelineItemProps) => {


    let p: number = item.percentage;

    const getStyle = () => {
        if (p < low) return styles.lowWeighting;
        if (p < med) return styles.mediumWeighting;
        return styles.highWeighting
    };

    const getDateText = () => {
        let temp = new Date();
        if (temp.setHours(0,0,0,0) > item.dueDate.setHours(0,0,0,0)) {
            return "Done";
        }
        else if (temp.setHours(0,0,0,0) == item.dueDate.setHours(0,0,0,0)) {
            return "Today";
        }
        return item.dueDate.toLocaleDateString();
    }

    const getDateStyle = () => {
        let temp = getDateText();
        if (temp == "Done") {
            return styles.doneStyle;
        }
        else if (temp == "Today") {
            return styles.todayStyle;
        }
        return null;
    }

    return(
        <View style={styles.itemContainer}>
            <View style={[styles.container, getStyle()]}>
                <Text style={styles.title}>{item.username}</Text>
                <Text style={styles.weighting}>{item.percentage}%</Text>
            </View>
            <Text style={[styles.date, getDateStyle()]}>{getDateText()}</Text>

        </View>
    )
}


const styles = StyleSheet.create({

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 40
    },

    container: {
        marginRight: 20,
        paddingHorizontal: 20,
        width: 200,
        margin: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 6,
        justifyContent: 'center',
        alignItems: "center"
    },

    lowWeighting: {
        height: 70,
        backgroundColor: '#78cc9f'
    },

    mediumWeighting: {
        height: 90,
        backgroundColor: '#9789cd'
    },

    highWeighting: {
        height: 100,
        backgroundColor: '#d34d4d'
    },

    title: {
        fontSize: 19,
        fontFamily: 'Epilogue-700',
        color: 'white'
    },

    weighting: {
        fontSize: 15,
        fontFamily: 'Epilogue-700',
        color: 'white'
    },

    date: {
        fontSize: 16,
        fontFamily: 'Epilogue-700',
        color: 'white'
    },

    doneStyle: {
        color: '#8defba'
    },

    todayStyle: {
        color: '#ff8989'
    }
})


export default TimelineItem;
