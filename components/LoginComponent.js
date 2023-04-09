import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";

const LoginComponent = ({ navigation }) => {
  const [UserName, setUserName] = useState('');
  const [PassWord, setPassWord] = useState('')
  const [loaded] = useFonts({
    Alkatra: require("../assets/fonts/Alkatra-Regular.ttf"),
    BoldFont: require("../assets/fonts/Alkatra-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ marginTop: 100, marginLeft: 10 }}>
      <Text style={styles.textStyle}>Enter Your Username</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        defaultValue={UserName}
        onChangeText={(data) => setUserName(data)}
      />
      <Text style={styles.textStyle}>Enter Your Password</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        defaultValue={PassWord}
        onChangeText={(data) => setPassWord(data)}
      />
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={()=>{
          navigation.navigate("Home", {name: `${UserName}`})
        }}
      >
        <Text style={{ fontFamily: "BoldFont", color: "white" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Alkatra",
    marginVertical: 10,
  },
  textInput: {
    width: "95%",
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  btnStyle: {
    backgroundColor: "#4630EB",
    width: "70%",
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
  },
});

export default LoginComponent;
