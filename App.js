import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './LandingPage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import HomePage from './homepage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

