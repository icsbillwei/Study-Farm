import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { TimelineObject, useGlobalState } from './TimelineSchema';
import { colors } from '@/assets/color';

const low: number = 10;
const med: number = 25;

interface TimelineItemProps {
    item: TimelineObject;
}

const TimelineItem = ({ item }: TimelineItemProps) => {

    const {toggleDone} = useGlobalState();
    let p: number = item.percentage;

    const getStyle = () => {
        if (p < low) return styles.lowWeighting;
        if (p < med) return styles.mediumWeighting;
        return styles.highWeighting
    };

    const getDateText = () => {
        let temp = new Date();
        if (item.done) {
            return "Done";
        }
        else if (temp.setHours(0,0,0,0) > item.dueDate.setHours(0,0,0,0)) {
            return "Overdue";
        }
        else if (temp.setHours(0,0,0,0) == item.dueDate.setHours(0,0,0,0)) {
            return "Today";
        }
        return item.dueDate.toLocaleDateString();
    }

    const getDateStyle = () => {
        let temp = getDateText();
        if (item.done) {
            return styles.doneStyle;
        }
        else if (temp == "Overdue") {
            return styles.overdueStyle;
        }   
        else if (temp == "Today") {
            return styles.todayStyle;
        }
        return null;
    }

    return(
        <TouchableOpacity onPress={
            () => toggleDone(item.id)
        }>
            <View style={styles.itemContainer}>
                <View style={[styles.container, getStyle()]}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.weighting}>{item.percentage}%</Text>
                </View>
                <Text style={[styles.date, getDateStyle()]}>{getDateText()}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
    },

    container: {
        marginRight: 20,
        marginLeft: 10,
        paddingHorizontal: 20,
        width: 160,
        margin: 0,
        shadowColor: colors.textGrey,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
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
        fontSize: 22,
        fontFamily: 'Handjet-Bold',
        color: 'white'
    },

    weighting: {
        fontSize: 20,
        fontFamily: 'Handjet-Regular',
        color: 'black'
    },

    date: {
        fontSize: 20,
        fontFamily: 'Handjet-Medium',
        color: 'white'
    },

    doneStyle: {
        color: '#8defba'
    },

    overdueStyle: {
        color: '#ff8989'
    },

    todayStyle: {
        color: '#FFD770'
    }
})


export default TimelineItem;
