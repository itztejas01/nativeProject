import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export class ImageList extends Component {
    render() {
        const {image, name} = this.props
        // console.log(`image is ${image} and name is ${name}`);
        return (
            <View style={styles.container}>

                <Image
                style={styles.imageStyle}
                source={image}
                />

                <Text style={styles.textStyle}>{name}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        // flexWrap:'wrap',
        // flexGrow:1,
        flexShrink:1,
        margin:10,
        borderWidth:5,
        marginTop:10
    },
    imageStyle:{
        width:100,
        height:100,
        marginVertical:20,
        marginHorizontal:20
        
    },
    textStyle:{
        color:'black',
        fontSize:20,
        marginHorizontal:50,
        marginVertical:50
    }
})

export default ImageList
