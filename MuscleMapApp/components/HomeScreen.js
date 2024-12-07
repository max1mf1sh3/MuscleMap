import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {faGear, faCode, faQuestion} from "@fortawesome/free-solid-svg-icons";
import SmallButton from './SmallButton';

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
            <View style={styles.buttons}>
                <SmallButton icon={faGear} pageStyle={styles.settings_button} flip={()=>{}} size={55} iconsize={25}/>
                <SmallButton icon={faCode} pageStyle={styles.settings_button} flip={()=>{}} size={55} iconsize={25}/>
                <SmallButton icon={faQuestion} pageStyle={styles.settings_button} flip={()=>{}} size={55} iconsize={25}/>
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
    buttons: {
        flex: 1,
        flexDirection: 'row',
    },
    settings_button: {
        backgroundColor: '#4c98cf',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    text: {
        color: '#ffffff',
        fontSize: 50,
        fontFamily: "Inter-Black"
    },
    image: {
        width: 300,
        height:  300,
    }
});
  