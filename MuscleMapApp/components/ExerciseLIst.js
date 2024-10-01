import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

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
  }

  return (
    <View style={styles.container}>
        <FlatList
            keyExtractor = {item => item.id}  
            data={exList}
            renderItem = {item => (<Text>{item.item.text}</Text>)} />
        <Button
          title="Add element"
          onPress={addElement} />
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