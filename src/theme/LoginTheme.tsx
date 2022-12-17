import { StyleSheet } from "react-native";



export const ScreenStyles = StyleSheet.create ({

Container:{
    flex: 1,
    paddingHorizontal:30,
    justifyContent:'center',
    height:600,
    marginBottom:150,

    
},
titleSuperior:{
    //alignItems:'center',
    paddingHorizontal:50,
    paddingVertical:50,
    color:'white',
    fontSize: 30,
    fontWeight:'bold',

    
},
title:{
    color:'white',
    fontSize: 30,
    fontWeight:'bold',
    marginTop:20
},
label:{
    marginTop: 20,
    color: 'white',
    fontSize:18,
    fontWeight: 'bold'
},
inputField:{
    color:'white',
    fontSize:15
},
InputFieldIOS:{
    borderBottomColor:'white',
    borderBottomWidth: 2,
    paddingBottom: 6
},
buttonIngresar:{
    alignItems: 'center',
    marginTop:50,
},
button:{
    borderColor:'white',
    borderWidth:2,
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:100
},
buttonText:{
    fontSize:18,
    color:'white'
}
})