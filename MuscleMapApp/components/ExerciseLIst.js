import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import Exercise from './Exercise';
import SmallButton from './SmallButton';
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

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

  // for some reason, item refers to the most recently added object, and not the exercise we are rendering?
  const renderExercise = item => {
    const obj = item.item
    return(
      <View padding={2}>
        <View style={styles.exercise}>
          <Text flex={2} style={styles.exercisetext}>{obj.text}</Text>
          <View flex={2} flexDirection={'column'} alignItems={'center'}>
            <Text flex={2}>Reps</Text>
            <View style={styles.subbox}>
              <SmallButton icon={faMinus} flip={() => obj.value.set_reps(obj.value.reps-1)} size={20} iconsize={15}/>
              <Text style={styles.valuetext}>{obj.value.reps}</Text>
              <SmallButton icon={faPlus} flip={() => obj.value.set_reps(obj.value.reps+1)} size={20} iconsize={15}/>
            </View>
          </View>
          <View flex={2} flexDirection={'column'} alignItems={'center'}>
            <Text flex={2}>Weight</Text>
            <View style={styles.subbox}>
              <Text style={styles.valuetext}>{obj.value.weight}</Text>
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
          onPress: () => console.log("Confirmed name"),
        },
      ],
      "plain-text"
    );
  };

  return (
    <View style={styles.container}>
        <FlatList
            data={exList}
            renderItem = {item => renderExercise(item)}
            keyExtractor = {item => item.id} />
        <Button
          title="Add element"
          onPress={addElement} />
          <Button
            title='Select Routine'
            onPress={newRoutine}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1
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
  valuetext: {
    flex:1,
    textAlignVertical: "center",
    textAlign: "center",
  }
});