import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export class ProgressBar extends Component {
    render() {
        const {numberOfPoint} = this.props;
        const {cardStyle, progressBarStyle,containerStyle,checkPoint,milestoneStyle} = styles;
        
        return (
            <View style={containerStyle}>
                <View style={cardStyle}>
                    <View style={progressBarStyle} >
                        <View style={{flex:1}}>
                        <View style={checkPoint} />
                            <View style={milestoneStyle} />
                        </View>
                        <View style={{flex:1}}>
                        <View style={[checkPoint,{backgroundColor:'red'}]} />
                            <View style={milestoneStyle} />
                        </View>
                        <View style={checkPoint} >
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    cardStyle:{
        backgroundColor:'white',
        borderRadius:10,
        height:150,
        elevation:10,
        padding:20

    },
    progressBarStyle:{
        height:10,
        backgroundColor:"#DFDFDF7D",
        // margin:20
        borderRadius:5,
        // flex:1,
        flexDirection:'row'

    },
    containerStyle:{
        backgroundColor:'gray',
        padding:30,
        height:200,
    },
    checkPoint:{
        backgroundColor:'#79d6ba',
        height:10,
        borderRadius:5,
        flex:1,
        zIndex:0,
        // margin
    },
    milestoneStyle:{
        height:14,
        width:14,
        borderRadius:7,
        backgroundColor:'#315d5e',
        position:'absolute',
        right:-5,
        top:-2,
        zIndex:3,
        elevation:10


    }
})

export default ProgressBar
