import React, { Component } from 'react'
import { View,FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import ImageList from './Common/ImageList'

export class ImageScreen extends Component {
    render() {
        const data=[
            {
                image: require('../asset/img/project-1.jpg'),
                name:'1 Friend'
            },
            {
                image:require('../asset/img/project-2.jpg'),
                name:'2 Friend'
            },
            {
                image:require('../asset/img/project-3.jpg'),
                name:'3 Friend'
            },
            {
                image:require('../asset/img/beach.jpg'),
                name:'4 Friend'
            },
            {
                image:require('../asset/img/forest.jpg'),
                name:'5 Friend'
            },
            {
                image:require('../asset/img/mountain.jpg'),
                name:'6 Friend'
            },            

            
        ]
        return (
          <View>
              <FlatList
              data={data}
              keyExtractor={data=>data.name}
              renderItem={({item})=>{
                  return(
                    <TouchableOpacity onPress={()=>{
                        alert(`Item pressed is ${item.name}`)
                    }}>
                    <ImageList image={item.image} name={item.name} />
                    </TouchableOpacity>
                )
              }}
              
              />
          </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        textAlign:'center',
        color:'yellow'

    }
})
export default ImageScreen
