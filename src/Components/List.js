import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export class List extends Component {
  render() {
    const friends = [
      {key: '1', name: 'friend 1', age: '10'},
      {key: '2', name: 'friend 2', age: '20'},
      {key: '3', name: 'friend 3', age: '30'},
      {key: '4', name: 'friend 4', age: '40'},
      {key: '5', name: 'friend 5', age: '50'},
    ];
    return (
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => {
        //   console.log(item);
          return (
            <View>
              <TouchableOpacity>
              <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
              </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        //    horizontal
        //    showsHorizontalScrollIndicator={false}
        // numColumns={3}

        showsVerticalScrollIndicator={false}
      />
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 70,
    textAlign: 'center',
    color:'black'
    // marginHorizontal:70
  },
});
export default List;
