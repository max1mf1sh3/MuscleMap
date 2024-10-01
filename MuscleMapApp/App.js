import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from './components/HomeScreen';
import Map from './components/Map';
import ExerciseScreen from './components/ExerciseScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: 'white'},
      }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="home-outline" size={size} color={focused ? "#4c98cf" : "black"}/>;
        },
      }}
      name="Home" 
      component={HomeScreen}/>
    <Tab.Screen
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="list-outline" size={size} color={focused ? "#4c98cf" : "black"} />;
        },
      }}
      name="Muscle Map"
      component={Map} />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Ionicons name="barbell-outline" size={size} color={focused ? "#4c98cf" : "black"} />;
        },
      }}
      name="Exercises"
      component={ExerciseScreen} />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
