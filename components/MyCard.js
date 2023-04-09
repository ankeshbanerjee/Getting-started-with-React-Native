import React from 'react'
import { View, Image, StyleSheet, Text, Button } from 'react-native'

function MyCard() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/cardimg.jpg')} style={styles.imgStyle}/>
      <View style = {styles.innerContainer}>
        <Text style={{padding : 15}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ex debitis odit velit aliquid repellat, ratione tenetur error distinctio quidem.
        </Text>
        <Button title={'read more'} ></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width : '100%',
        alignItems : 'center',
        marginTop : 50
    },
    imgStyle : {
        width : 200, 
        height : undefined, 
        aspectRatio : 1
    },
    innerContainer : {
        width : 200,
        borderColor : 'black',
        borderWidth : 2,
    }
})

export default MyCard
