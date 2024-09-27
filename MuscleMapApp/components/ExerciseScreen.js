import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function ExerciseScreen() {
    return (
        <View style={styles.ExerciseScreen}>
            <Text style={styles.text}>EXERCISE LIST</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ExerciseScreen: {
        flex: 1,
        backgroundColor: '#4c98cf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 36,
    },
});
  