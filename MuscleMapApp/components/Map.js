import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Map() {
    return(
        <View style={styles.muscle}>
            <Text>
                welcome to the muscles dad
            </Text>
        </View>
    );
}

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
});
  