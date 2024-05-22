import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {useState} from 'react';
import React from 'react'

const AddProduct = ({ submitHandler}) => {
  const [item, setItem] = useState("");
  const inputHandler = (val) => {
    setItem (val)
  };

  const handleClick = () => {
    submitHandler(item);
    setItem("")
  }
  return (
    <View style = {styles.inputContainer}>
      <TextInput
      style = {styles.inputContainer}
      placeholder='Nouveau produit'
      onChangeText={inputHandler}
      value = {item}
      />
      <Button
      title ='Valider'
      onPress = { handleClick}
      />
    </View>
  )
}

export default AddProduct

const styles = StyleSheet.create({
   textInput:{
    color:"white",
    opacity: 1,
    margin:10,
    marginVertical: 6,
  },
   inputContainer:{
    backgroundColor: "purple",
    width: "80%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
 

})

 {/* <ScrollView style={styles.scrollViewList}>
        <View style={styles.itemList}>
          {
          items.map((item, index)=>{
            return(
              <Text key={index} style={styles.item}>{item}</Text>
            )
          })}
        </View>
      </ScrollView> */}