import * as React from 'react';
import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function CircularButton({icon, flip, pageStyle}){
    return (
        <View style={pageStyle}>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={flip}>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={icon} size={70}/>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 100,
        width: 100,
        height: 100,
        backgroundColor: '#7076FC', 
    },
    button:{
        flex: 1,
    },
    iconContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})