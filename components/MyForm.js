import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const instances = [
  {
    date: '8 May, 2023',
    day: 'Monday'
  },
  {
    date: '9 May, 2023',
    day: 'Tuesday'
  },
  {
    date: '10 May, 2023',
    day: 'Wednesday'
  },
  {
    date: '10 May, 2023',
    day: 'Thursday'
  }
];

function MyForm() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handlePressItem = (index) => {
    if (selectedItemIndex === index) {
      // if the same item is clicked again, unselect it
      setSelectedItemIndex(null);
    } else {
      setSelectedItemIndex(index);
    }
  };
  const renderItem = ({ item, index }) => {
    const btnStyle = (selectedItemIndex === index) ? styles.btnOnClicked : styles.btn;

    return (
      <TouchableOpacity style={btnStyle} onPress={() => handlePressItem(index)}>
        <View>
          <Text>{item.date}</Text>
          <Text>{item.day}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={instances}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginHorizontal: 20
  },
  btn: {
    backgroundColor: 'white',
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    marginHorizontal: 10
  },
  btnOnClicked: {
    backgroundColor: 'red',
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    marginHorizontal: 10
  }
});

export default MyForm;
