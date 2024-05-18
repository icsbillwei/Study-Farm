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
                <Text style={styles.title}>{item.name}</Text>
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
        marginVertical: 6,
        marginHorizontal: 30
    },

    container: {
        marginRight: 20,
        marginLeft: 10,
        paddingHorizontal: 20,
        width: 200,
        margin: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 6,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },

    lowWeighting: {
        height: 80,
        backgroundColor: 'rgba(163, 215, 187, 1)'
    },

    mediumWeighting: {
        height: 100,
        backgroundColor: 'rgba(174, 163, 214, 1)'
    },

    highWeighting: {
        height: 130,
        backgroundColor: 'rgba(215, 106, 106, 1)'
    },

    title: {
        fontSize: 24,
        fontFamily: 'Handjet-Bold',
        color: 'white'
    },

    weighting: {
        fontSize: 20,
        fontFamily: 'Handjet-Bold',
        color: 'white'
    },

    date: {
        fontSize: 24,
        fontFamily: 'Handjet-Medium',
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
