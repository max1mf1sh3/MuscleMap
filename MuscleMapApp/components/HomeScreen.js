import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.home}>
            <Text style={styles.text}>welcome home dad</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#4c98cf',
        fontSize: 10,
    },
    image: {
        width: 300,
        height: 300,
    }
});
  