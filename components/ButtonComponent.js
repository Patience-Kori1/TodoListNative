import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>

        <Button
            title ='Annuler'
            onPress = { handleClick }
        />

    </View>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({})