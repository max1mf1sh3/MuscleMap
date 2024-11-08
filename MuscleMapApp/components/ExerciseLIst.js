import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Alert, TextInput, ScrollView } from 'react-native';
import Exercise from './Exercise';
import SmallButton from './SmallButton';
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function UserExercise({value}) {
  const [initialElements, newElements]  = useState([
  ]);

  const [exList, setexList] = useState(initialElements);
  const [idx, incr] = useState(0);

  const addElement = () => {
    if (value instanceof Exercise) {
      var newArray = [...initialElements , {id : idx, text: value.name, value: new Exercise(value.name)}];
      incr(idx + 1);
      setexList(newArray);
      newElements(newArray);
      console.log(newArray);
    }
  };

  const [nothing, setReps] = useState(1);
  //this doesnt actually do anything, but calling a set function causes the component to re-render

  // for some reason, item refers to the most recently added object, and not the exercise we are rendering?
  const renderExercise = item => {
    const obj = item.item;

    const addRep = (ex) => {
      ex.set_reps(ex.reps+1);
      setReps(ex.reps);
    }
    const subRep = (ex) => {
      ex.set_reps(ex.reps-1);
      setReps(ex.reps);
    }
    return(
      <View padding={2}>
        <View style={styles.exercise}>
          <Text flex={2} style={styles.exercisetext}>{obj.text}</Text>
          <View flex={2} flexDirection={'column'} alignItems={'center'}>
            <Text flex={2}>Reps</Text>
            <View style={styles.subbox}>
              <SmallButton icon={faMinus} flip={() => subRep(obj.value)} size={25} iconsize={15}/>
              <Text style={styles.valuetext}>{obj.value.reps}</Text>
              <SmallButton icon={faPlus} flip={() => addRep(obj.value)} size={25} iconsize={15}/>
            </View>
          </View>
          <View flex={2} flexDirection={'column'} alignItems={'center'}>
            <Text flex={2}>Weight</Text>
            <View style={styles.weightbox} borderRadius={3}>
              <TextInput
                onChangeText={obj.value.setWeight}
                value={obj.value.weight}
                placeholder="0"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const newRoutine = () =>{
    var newArray = ([]);
    setexList(newArray);
    newElements(newArray);
    incr(0);
    Alert.prompt(
      "Creating new Routine",
      "Enter a name for your routine",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel routine"),
          style: "cancel"
        },
        {
          text: "Confirm",
          onPress: (name) => console.log("Confirmed name: " + name),
          
        },
      ],
      "plain-text"
    );
  };

  return (
    <View style={styles.largeContainer}>
      <View style={styles.container}>
          <FlatList
              data={exList}
              renderItem = {item => renderExercise(item)}
              keyExtractor = {item => item.id}
              removeClippedSubviews={false} />
      </View>
      <View style={styles.addElementButton}>
          <Button
            title="Add element"
            onPress={addElement} />
        </View>
        <View style = {styles.newRoutineButton}>
          <Button
            title='Select Routine'
            onPress={newRoutine}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  largeContainer:{
    flex: 1,
    width: "100%",
    backgroundColor: '#4c98cf',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: "100%",
    borderWidth: 1,
  },
  addElementButton: {
    backgroundColor: '#4c98cf',
    borderRadius: 10,
    borderWidth: 1,
  },
  newRoutineButton: {
    backgroundColor: '#4c98cf',
    borderRadius: 10,
    borderWidth: 1,
  },
  exercise: {
    flex: 1,
    backgroundColor: '#ade9ff',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exercisetext: {
    fontSize: 20,
  },
  subbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weightbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '66%',
  },
  valuetext: {
    flex:1,
    textAlignVertical: "center",
    textAlign: "center",
  }
});