import * as React from 'react';
import { StyleSheet, View, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function SmallButton({icon, flip, pageStyle, size, flex, iconsize}){
    paramstyles = StyleSheet.create({
        buttonContainer:{
            borderRadius: size,
            width: size,
            height: size,
            backgroundColor: '#a0acbd', 
    },})
    return (
        <View flex={flex} style={pageStyle}>
            <View style={paramstyles.buttonContainer}>
                <Pressable style={styles.button} onPress={flip}>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={icon} size={iconsize}/>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    button:{
        flex: 1,
    },
    iconContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})