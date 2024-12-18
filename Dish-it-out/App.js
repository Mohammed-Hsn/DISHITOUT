import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';  // Ensure the path is correct
import Home from './screens/home';  // Ensure the path is correct

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}  // Hides the header
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}  // Hides the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
