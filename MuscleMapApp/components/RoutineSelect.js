import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button} from 'react-native';
import DropdownComponent from './DropBox';
import UserExercise from './ExerciseLIst';
import Exercise from './Exercise';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Dialog from "react-native-dialog";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';




export default function RoutineScreen () {
    const navigation = useNavigation();

    const [currName, newName] = useState("Routine");
    const [visible, setVisible] = useState(false);

    
    const newRoutine = () =>{
        setVisible(true);
      };
    const handleCancel = () => {
        setVisible(false);
        console.log(currName);
      };
      const handleConfirm = () => {
        setVisible(false);
      };

    return(
        <View>
            <Text> TESTING STILL </Text>
            <View style = {styles.newRoutineButton}>
          <Button
            title='Select Routine'
            onPress={newRoutine}/>
            <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
              <Dialog.Title>New Routine</Dialog.Title>
              <Dialog.Description>Enter a name for your new routine.</Dialog.Description>
              <Dialog.Input onChangeText={(name)=>newName(name)}/>
              <Dialog.Button label="Confirm" onPress={handleConfirm}/>  
              <Dialog.Button label="Cancel" onPress={handleCancel}/>
            </Dialog.Container>
        </View>
            <Button 
                title="Exercise" 
                onPress={() => navigation.navigate("Exercise")}/>
        </View>
    );
}


const styles = StyleSheet.create({
    newRoutineButton: {
        backgroundColor: '#4c98cf',
        borderRadius: 10,
        borderWidth: 1,
    },
});
  