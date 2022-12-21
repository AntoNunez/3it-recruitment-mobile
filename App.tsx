import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { EntrevistasProvider } from './src/context/EntrevistasContext';
//import { BottomTab } from './src/components/BottomTab';
 

const appState = ({children}: any) =>{

  return (
    <EntrevistasProvider>
      {children}
    </EntrevistasProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    
    </NavigationContainer>
  )
}
export default App;

