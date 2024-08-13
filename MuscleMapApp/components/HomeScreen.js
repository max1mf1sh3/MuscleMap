import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.home}>
            <Text style={styles.text}>Welcome To Muscle Map</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#4c98cf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 36,
    },
    image: {
        width: 300,
        height: 300,
    }
});
  