import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { StyleSheet, View, Pressable, Text } from "react-native";

export default function CircularButton({icon, flip}){
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={flip}>
            </Pressable>
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

    },
})