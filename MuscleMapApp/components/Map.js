import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircularButton from './CircularButton';
import {faRotate} from "@fortawesome/free-solid-svg-icons";
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

export default function Map() {
    imgstate = 0;
    const [value, setValue] = useState();
    const [ex_value, setEx_value] = useState();
    const [img, setImg] = useState(require('../assets/muscles_reference.png'));
    function addToEx(arg_ex) {
        setEx_value(arg_ex);
    }
    function addToList(arg_val) {
        setValue(arg_val);
    }
    function flipImg() {
        if (imgstate == 0) {
            setImg(require('../assets/muscles_reference2.png'));
            imgstate = 1;
            //dataExercise.push({label: "test", value: new Exercise("testing")});
        } else {
            setImg(require('../assets/muscles_reference.png'));
            imgstate = 0;
        }
    }

    return(
        <View style={styles.map}>
            <View style={styles.muscle}>
                <Image style={styles.image} source = {img} />
                <DropdownComponent styleType={'exercise'} dataExercise={dataExercise} addToList={addToEx}/>
                <CircularButton icon={faRotate} flip={() => flipImg()}
                 pageStyle={styles.button}/>
            </View>
            <View style={styles.box}>
                <Text>sample</Text>
                <DropdownComponent styleType={'weekly'} addToList={addToList}/>
            </View>
        </View>
    );
}

// let us try absolute positioning

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
    box: {
        flex: 1,
        backgroundColor: '#d5d3db',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 12,
    },
    text: {
        color: '#4c98cf',
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        opacity: 0.5,
    },
    dropdown: {
        margin: 16,
        height: 50,
        width: 110,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
      },
      dropdownExercise: {
        margin: 16,
        height: 50,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
      },
});
  