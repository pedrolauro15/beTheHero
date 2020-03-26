import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Incidents from './pages/incidents';
import Detail from './pages/detail';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle='dark-content'/>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen component={Incidents} name="Incidents"/>
        <AppStack.Screen component={Detail}  name="Detail"/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
