import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircularButton from './CircularButton';
import {faRotate} from "@fortawesome/free-solid-svg-icons";
import DropdownComponent from './DropBox';
import UserExercise from './ExerciseLIst';
import React, { useState } from 'react';



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
        } else {
            setImg(require('../assets/muscles_reference.png'));
            imgstate = 0;
        }
    }

    return(
        <View style={styles.map}>
            <View style={styles.muscle}>
                <Image style={styles.image} source = {img} />
                <DropdownComponent styleType={'exercise'} value={ex_value} addToList={addToEx}/>
                <UserExercise value={ex_value}/>
                <CircularButton icon={faRotate} flip={() => flipImg()}
                 pageStyle={styles.button}/>
            </View>
            <View style={styles.box}>
                <Text>Select Routine</Text>
                <DropdownComponent styleType={'weekly'} value={value} addToList={addToList}/>
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
  