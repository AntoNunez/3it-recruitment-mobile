import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
//import { NuevaEntrevistaScreen } from '../screens/NuevaEntrevistaScreen';
import { EntrevistasScreen } from '../screens/EntrevistasScreen';
import { NuevaEntrevistaScreen } from '../screens/NuevaEntrevistaScreen';




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
            <Stack.Screen name="NuevaEntrevistaScreen" component={NuevaEntrevistaScreen} />

        </Stack.Navigator>
        
        

    )
}