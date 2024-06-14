import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Map() {
    return(
        <View style={styles.muscle}>
            <Image style={styles.image2} source = {require('../assets/ako_shrug.jpg')} />
            <Image style={styles.image1} source = {require('../assets/ako_shrug.jpg')} />
        </View>
    );
}

// let us try absolute positioning

const styles = StyleSheet.create({
    muscle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#4c98cf',
    },
    image1: {
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'contain',
        width: '50%',
        height: '50%',
    },
    image2: {
        transform: [ { scaleX: -1 } ],
        position: 'absolute',
        top: -20,
        left: 20,
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
        opacity: 0.6,
    },
});
  