import { View, Text, StyleSheet, TouchableOpacity, Pressable} from 'react-native';

import React from 'react';

function Products({item, deleteProduct, idString}) {
  return (
    <Pressable
    activeOpacity = {0.5}
    onPress = {() => deleteProduct(idString)}
    style = {
      ({pressed}) => [
        {
          backgroundColor: pressed ? "#9c27b0" : "#673ab7"
         }
      ]
    }
    >
    <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.name}</Text>
    </View>
    </Pressable>
  )
}

export default Products

const styles = StyleSheet.create({

    item:{
        textAlign:"center",
        backgroundColor: "pink",
        color: "black",
        fontSize: 20,
        marginVertical: 6,
        width: "100%"
        
      },
      itemContainer:{
        width:220
        
      },
});

// <TouchableOpacity
    // activeOpacity = {0.5}
    // onPress = {() => console.log('cliqué')}
    // >
    // <View style={styles.itemContainer}>
    //     <Text style={styles.item}>{item.name}</Text>
    // </View>
    // </TouchableOpacity>