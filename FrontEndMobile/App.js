import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home'; 
import ApartmentDetails from './components/ApartmentDetails';
export default function App() {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Apartments Market" component={HomeScreen} />
        <Stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




