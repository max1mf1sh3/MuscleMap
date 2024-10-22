import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function HomeScreen() {
    const img = require('../assets/logo_trans.png');
    return (
        <View style={styles.home}>
            <View flex={3}>
                <Image style={styles.image} source = {img} />
            </View>
            <View flex={2} padding={20}>
                <Text style={styles.text}>Welcome To Muscle Map</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#4c98cf',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 50,
    },
    image: {
        width: 300,
        height:  300,
    }
});
  