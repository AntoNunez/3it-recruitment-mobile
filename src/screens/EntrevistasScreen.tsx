import { StackScreenProps } from '@react-navigation/stack'
import { Card } from '@rneui/base'
import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { ScreenStyles } from '../theme/LoginTheme'

interface Props extends StackScreenProps<any, any> { }


export const EntrevistasScreen = ({ navigation }: Props) => {

  const [selected, setSelected] = useState('')
  const data = [
    { key: '1', value: 'Agile team' },
    { key: '2', value: 'Fabrica' },
    { key: '3', value: 'Continuidad' }

  ];
  return (
    <>

      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#5254bd' }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >

        <View style={ScreenStyles.Container}>
          <Text style={ScreenStyles.titleSuperior}>Entrevistas</Text>

          <View style={styles.select}>
            <Text style={ScreenStyles.label}>Rol:</Text>

            <SelectList
              data={data}
              setSelected={setSelected}
              placeholder={'Selecione opcion'}
              boxStyles={{ borderColor: 'white' }}
              inputStyles={{ fontSize: 15, color: 'white' }}
              dropdownTextStyles={{ color: 'white', borderColor: 'white' }}
              dropdownItemStyles={{ shadowColor: 'grey' }}
            />
          </View>

          <View style={styles.select}>
            <Text style={ScreenStyles.label}>Nombre:</Text>
            <SelectList
              data={data}
              setSelected={setSelected}
              placeholder={'Selecione opcion'}
              boxStyles={{ borderColor: 'white' }}
              inputStyles={{ fontSize: 15, color: 'white' }}
              dropdownTextStyles={{ color: 'white', borderColor: 'white' }}
              dropdownItemStyles={{ shadowColor: 'grey' }}
            />
          </View>
          <View>
            
          </View>

          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              // placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>

          <View style={ScreenStyles.buttonIngresar}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonNueva}
              onPress={() => navigation.navigate('NuevaEntrevistaScreen')}

            >
              <Text style={ScreenStyles.buttonText}>Nueva Entrevista</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('LoginScreen')}
              style={styles.buttonReturn}
            >
              <Text style= {ScreenStyles.buttonText}>Back</Text>
            </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    marginTop: 20
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  buttonReturn: {
    position: 'absolute',
    top: 50,
    left:20,
    borderWidth:1,
    borderColor:'white',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:100
  },
  buttonNueva:{
    borderWidth:1,
    borderColor:'white',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:100
  }
})