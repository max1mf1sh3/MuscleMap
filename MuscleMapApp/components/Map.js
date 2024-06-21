import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CircularButton from './CircularButton';
import {faRotate} from "@fortawesome/free-solid-svg-icons";

export default function Map() {
    return(
        <View style={styles.map}>
            <View style={styles.muscle}>
                <Text>sample</Text>
                <CircularButton icon={faRotate} flip={() => console.log('cool beans')}
                 pageStyle={styles.button}/>
            </View>
            <View style={styles.box}>
                <Text>sample</Text>
            </View>
        </View>
    );
}

// let us try absolute positioning

const styles = StyleSheet.create({
    map: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#4a201d',
        padding: 20,
        gap: 30,
    },
    muscle: {
        flex: 3,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    box: {
        flex: 1,
        backgroundColor: '#545454',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        color: '#4c98cf',
    },
    button: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});
  