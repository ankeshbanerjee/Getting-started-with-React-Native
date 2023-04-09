import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyForm from './components/MyForm';
import MyCard from './components/MyCard';
import Counter from './components/Counter';
import ColorGenerator from './components/ColorGenerator'
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/HomeComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{title: 'Welcome User!'}}
        />
      <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{title: 'Go Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
