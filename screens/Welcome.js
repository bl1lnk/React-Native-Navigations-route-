import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Welcome = ({ route, navigation, N }) => {
   const {name }= route.params
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Welcome :  {name}. you are awesome</Text>
    </View>
  )
}

export default Welcome