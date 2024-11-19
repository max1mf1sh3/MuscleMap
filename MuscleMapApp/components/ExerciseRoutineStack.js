import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer  } from '@react-navigation/native';
import ExerciseScreen from './ExerciseScreen';
import RoutineScreen from './RoutineSelect';

const Stack = createStackNavigator();

export default function ScreenStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName = "Exercise">
                <Stack.Screen 
                    options={{headerStyle : {height: 98}}}
                    name="Exercise" 
                    component={ExerciseScreen}/>
                <Stack.Screen 
                    options={{headerStyle : {height: 98}}}
                    name="Routine" 
                    component={RoutineScreen}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}