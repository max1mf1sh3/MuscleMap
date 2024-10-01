import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Exercise from './Exercise';

const dataWeek = [
  { label: 'Monday', value: 'Monday' },
  { label: 'Tuesday', value: 'Tuesday' },
  { label: 'Wednesday', value: 'Wednesday' },
  { label: 'Thursday', value: 'Thursday' },
  { label: 'Friday', value: 'Friday' },
  { label: 'Saturday', value: 'Saturday' },
  { label: 'Sunday', value: 'Sunday' },
];

const dataExercise =[
    {label: 'Bench Press', value: new Exercise('Bench Press')},
    {label: 'Squat', value: 54},
    {label: 'Dead Lift', value: 3.999},
    {label: 'Pull Up', value: 'Pullup'},
    {label: 'Push Up', value: 'Pushup'},
    {label: 'Dips', value: 'Dips'},
    {label: 'Bicep Curls', value: 'BicepCurls'},
    {label: 'Lateral Raises', value: 'LatRaise'},
    {label: 'Chin Up', value: 'Chinup'},
    {label: 'Incline Bench Press', value: 'InclineBench'},
    {label: 'Decline Bench Press', value: 'DeclineBench'},
    {label: 'Leg Press', value: 'LegPress'},
    {label: 'Rows', value: 'Rows'},
    {label: 'Sit Ups', value: 'SitUps'},
    {label: 'Crunches', value: 'Crunches'},
    {label: 'Jump Rope', value: new Exercise('Jump Rope')},
];

export default function DropdownComponent({styleType, value, addToList}){
  //const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  if (styleType == 'weekly') {
    return (
        <Dropdown
          style={styles.dropdownWeek}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataWeek}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select"
          searchPlaceholder="Search..."
          onChange={item => {
            addToList(item.value);
          }}
          renderItem={renderItem}
        />
      );
  }
  if(styleType == 'exercise'){
  return (
    <Dropdown
      style={styles.dropdownExercise}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={dataExercise}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select"
      searchPlaceholder="Search..."
      onChange={item => {
        addToList(item.value);
      }}
      renderItem={renderItem}
    />
  );}
};


const styles = StyleSheet.create({
    dropdownWeek: {
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
  item: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});