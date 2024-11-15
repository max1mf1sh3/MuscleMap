import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button} from 'react-native';
import DropdownComponent from './DropBox';
import UserExercise from './ExerciseLIst';
import Exercise from './Exercise';
import React, { useState } from 'react';

const dataExercise =[
    {label: 'YES', value: new Exercise('Bench Press')},
];


export default function RoutineScreen() {
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
  