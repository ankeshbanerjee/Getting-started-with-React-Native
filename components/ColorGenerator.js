import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

function ColorGenerator() {
    const [newColor, setnewColor] = useState([])
    const randomColor = ()=>{
        const red = Math.floor (Math.random() * 256);
        const green = Math.floor (Math.random() * 256);
        const blue = Math.floor (Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`
    }
    const renderItem = ({item}) => {
        return (
            <View style={{
                backgroundColor : item,
                padding : 30,
                marginVertical : 10,
                width : 250,
                alignItems : 'center'
            }}>
                <Text style= {{fontSize : 15, fontWeight : 600, color : 'white'}} selectable>{item}</Text>
            </View>
        );
    }
  return (
    <View style = {styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>setnewColor([...newColor, randomColor()])}> {/* spread syntax */}
        <Text style = {styles.textStyle}>Generate Color</Text>
      </TouchableOpacity>

      <FlatList 
        data={newColor}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator = {false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 90,
        alignItems : 'center'
    },
    btn : {
        width : '100%',
        padding : 10,
        marginBottom : 10,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#008eff'
    },
    textStyle : {
        color : 'white',
        fontSize : 20,
        fontWeight : 600
    }
})

export default ColorGenerator
