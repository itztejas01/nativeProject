import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export class FirstScreen extends Component {
    render() {
        const gretting = ['tejas']
        return (
            <View>
                <TouchableOpacity>
                <Text style={styles.textStyle}>Getting Started with react native!</Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    My name is {gretting}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    text:{
        fontSize:25
    }
})

export default FirstScreen
