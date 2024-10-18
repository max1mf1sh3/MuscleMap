import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

export default function UserExercise({value}) {
  const [initialElements, newElements]  = useState([
  ]);

  const [exList, setexList] = useState(initialElements);
  const [idx, incr] = useState(0);

  const addElement = () => {
    var newArray = [...initialElements , {id : idx, text: value.name + (idx+1) }];
    incr(idx + 1);
    setexList(newArray);
    newElements(newArray);
    console.log(newArray);
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
            renderItem = {item => (<Text>{item.item.text}</Text>)}
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
});