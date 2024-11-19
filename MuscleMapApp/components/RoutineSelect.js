import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button} from 'react-native';
import DropdownComponent from './DropBox';
import UserExercise from './ExerciseLIst';
import Exercise from './Exercise';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const dataExercise =[
    {label: 'YES', value: new Exercise('Bench Press')},
];


export default function RoutineScreen () {
    const navigation = useNavigation();
    const [ex_value, setEx_value] = useState();
    function addToEx(arg_ex) {
        setEx_value(arg_ex);
    }

    return(
        <View>
            <Text>TESTING TESTING</Text>
            
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
  