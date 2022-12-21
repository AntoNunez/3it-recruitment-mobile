import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { EntrevistasScreen } from '../screens/EntrevistasScreen';
import { LoginScreen } from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Entrevistas" component={EntrevistasScreen} />
      </Tab.Navigator>
  )
}
