import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CustomAlert from './Common/CustomAlert'

export class FirstScreen extends Component {
    render() {
        const gretting = ['tejas']
        const {navigation} = this.props;
        // console.log('navigation',navigation)
        return (
            <View>
                <CustomAlert />
                <TouchableOpacity onPress={()=>{CustomAlert.show("Alert","Message from these screen",require("../asset/img/forest.jpg"))}}>
                <Text style={styles.textStyle}>Getting Started with react native!</Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    My name is {gretting}
                </Text>

                <TouchableOpacity style={styles.buttonstyle} onPress={()=>{
                    console.log('Go to list screen')
                    navigation.navigate('Second Screen')
                }}>
                    <Text>
                        Go to List screen
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonstyle} onPress={()=>{
                    console.log('Go to Image screen')
                    navigation.navigate('Image Screen')
                }}>
                    <Text>
                        Go to Image screen
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonstyle} onPress={()=>{
                    navigation.navigate("Progress Screen")
                    console.log('Go to Progress screen')
                    
                }}>
                    <Text style={{textAlign:'center',margin:5}}>
                        Go to Progress screen
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45,
        color:'black'
    },
    text:{
        fontSize:25,
        color:'black'
    },
    buttonstyle:{
        // flex:1,
        backgroundColor:'green',
        borderRadius:10,
        width:'40%',
        height:30,
        marginVertical:20,
        // marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    }
})

export default FirstScreen
