import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { EntrevistasProvider } from './src/context/EntrevistasContext';
import { AuthProvider } from './src/context/AuthContext';
//import { BottomTab } from './src/components/BottomTab';
 

const AppState = ({children}: any) =>{

  return (
      <AuthProvider>
       {children}
      </AuthProvider>
  
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
      <AppState/>
    </NavigationContainer>
  )
}
export default App;

