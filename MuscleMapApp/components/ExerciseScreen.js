import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button} from 'react-native';
import DropdownComponent from './DropBox';
import UserExercise from './ExerciseLIst';
import Exercise from './Exercise';
import React, { useState } from 'react';

const dataExercise =[
    {label: 'Bench Press', value: new Exercise('Bench Press')},
    {label: 'Squat', value: new Exercise('Squat')},
    {label: 'Dead Lift', value: new Exercise('Dead Lift')},
    {label: 'Pull Up', value: new Exercise('Pull Up')},
    {label: 'Push Up', value: new Exercise('Push Up')},
    {label: 'Dips', value: new Exercise('Dips')},
    {label: 'Bicep Curls', value: new Exercise('Bicep Curls')},
    {label: 'Lateral Raises', value: new Exercise('Lateral Raises')},
    {label: 'Chin Up', value: new Exercise('Chin Up')},
    {label: 'Incline Bench Press', value: new Exercise('Incline Bench Press')},
    {label: 'Decline Bench Press', value: new Exercise('Decline Bench Press')},
    {label: 'Leg Press', value: new Exercise('Leg Press')},
    {label: 'Rows', value: new Exercise('Rows')},
    {label: 'Sit Ups', value: new Exercise('Sit Ups')},
    {label: 'Crunches', value: new Exercise('Crunches')},
    {label: 'Jump Rope', value: new Exercise('Jump Rope')},
];


export default function ExerciseScreen() {
    const [ex_value, setEx_value] = useState();
    function addToEx(arg_ex) {
        setEx_value(arg_ex);
    }

    return(
        <View style={styles.map}>
            <View style={styles.muscle}>
                <DropdownComponent styleType={'exercise'} dataExercise={dataExercise} addToList={addToEx}/>
                <UserExercise value={ex_value} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    image:{
        flex: 4,
        width: '60%',
        height: '60%',
    },
    map: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#483c63',
        padding: 20,
        gap: 30,
    },
    muscle: {
        flex: 3,
        backgroundColor: '#d5d3db',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 30,
    },
    routineButton:{
        flex: 1,
    },
});
  