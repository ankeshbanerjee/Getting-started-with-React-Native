import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeComponent = ({navigation, route}) => {
  return (
    <View>
      <Text>Hello ! {route.params.name}</Text>
      <Button title={'Go back'}  onPress={()=>navigation.navigate('Login')}/>
    </View>
  )
}

export default HomeComponent

const styles = StyleSheet.create({

})