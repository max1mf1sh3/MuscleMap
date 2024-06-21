import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import CircularButton from './CircularButton';
import {faRotate} from "@fortawesome/free-solid-svg-icons";



export default function HomeScreen() {
    return (
        <View style={styles.home}>
            <Text style={styles.text}>welcome home dad</Text>
            <CircularButton icon={faRotate} flip={() => console.log('cool beans')}/>
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
        fontSize: 10,
    },
    image: {
        width: 300,
        height: 300,
    }
});
  