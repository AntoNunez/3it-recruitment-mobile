import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { EntrevistasScreen } from '../screens/EntrevistasScreen';



const Stack = createStackNavigator();

export const Navigator = () => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor: 'white'
            }
        }}
        >

            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="EntrevistasScreen" component={EntrevistasScreen} />
           

        </Stack.Navigator>

    )
}