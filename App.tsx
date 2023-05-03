/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import LandingScreen from './src/LandingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name = "LandingScreen"
          component = {LandingScreen}
          options = {{headerShown: false}}
      />
      <Stack.Screen
          name = "Login"
          component = {Login}
          options = {{headerShown: false}}
      />
      <Stack.Screen 
          name = 'Dashboard'
          component = {Dashboard}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
