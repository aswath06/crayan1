import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './src/screens/home';
import CatalogScreen from './src/screens/catalog';
import Itemhome from './src/components/home/itemhome';
import Paymentscreen from './src/screens/payment';
import { FlatList } from 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Homescreen" 
          component={Homescreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Catalog1" 
          component={CatalogScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Payment" 
          component={Paymentscreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
