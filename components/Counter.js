import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Counter() {
    const [Count, setCount] = useState(0);
    const increment = ()=>{
        setCount(Count + 10);
    }
    const decrement = ()=>{
        setCount (Count-10);
    }
    const resetCount = ()=>{
        setCount (0);
    }
  return (
      <View style = {styles.container}>
        <Text style={styles.countStyle}>{Count}</Text>
        <TouchableOpacity style={styles.btn} onPress={()=>increment()}><Text style={{color : 'white'}}>+10</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>resetCount()}><Text style={{color : 'white'}}>Reset</Text></TouchableOpacity>
        <TouchableOpacity className = 'dec-btn' style={styles.btn} onPress={()=>decrement()} disabled={Count ? false : true}><Text style={{color : 'white'}}>-10</Text></TouchableOpacity>
      </View>

  )
}

const styles = StyleSheet.create({
    btn : {
        width : '50%',
        padding: 40,
        backgroundColor : 'black',
        marginVertical : 15,
        justifyContent : 'center',
        alignItems : 'center'
    },
    container : {
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    countStyle : {
        fontSize : 100,
        fontWeight : 400,
        marginVertical : 30
    }
})

export default Counter
