import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'


const Button = ({ isBackButton, text, backgroundColor = '#f2f2f2', textColor = '#000', onPress, flex = 1 }) => {
    return (
        <TouchableOpacity style={{ flex }} onPress={onPress}>
            <View style={{ ...styles.button, backgroundColor }}>
                {isBackButton ? 
                <Image style={styles.backbutton} source={{uri:"https://cdn3.iconfinder.com/data/icons/social-productivity-line-art-3/128/delete-512.png"}}/>
                :
                <Text style={{ ...styles.text, color: textColor }}>{text}</Text>
                }               
            </View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray'
    },
    text: {
        color: '#000',
        fontSize: 24
    },
    backbutton:{
        height: 25,
        width: 25
    }
})