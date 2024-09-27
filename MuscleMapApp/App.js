import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from './components/HomeScreen';
import Map from './components/Map';
import ExerciseScreen from './components/ExerciseScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Muscle Map" component={Map} />
      <Tab.Screen name="Exercises" component={ExerciseScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e2924',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
