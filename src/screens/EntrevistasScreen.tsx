import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { ScreenStyles } from '../theme/LoginTheme'








export const EntrevistasScreen = () => {

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
          <Text style={ScreenStyles.titleSuperior}>Nueva Entrevista</Text>

          <Text style={ScreenStyles.label}>Nombre del postulante:</Text>
          <TextInput
            placeholder='Ingresa tu nombre'
            placeholderTextColor='rgba(255,255,255,0.4)'
            underlineColorAndroid='white'
            style={[
              ScreenStyles.inputField,
              (Platform.OS === 'ios') && ScreenStyles.InputFieldIOS
            ]}
            selectionColor='white'

            // onChangeText={(value) => onChange(Value, 'nombre')}
            //value={nombre}
            //onSubmitEditing={onLogin}

            autoCapitalize='none'
            autoCorrect={false}
          />
          <Text style={ScreenStyles.label}>Apellidos del Postulante:</Text>
          <TextInput
            placeholder='Ingresa tu apellido'
            placeholderTextColor='rgba(255,255,255,0.4)'
            underlineColorAndroid='white'
            secureTextEntry={true}
            style={[
              ScreenStyles.inputField,
              (Platform.OS === 'ios') && ScreenStyles.InputFieldIOS
            ]}
            selectionColor='white'

          //onChangeText={(value) => onChange(value, 'password')}
          //value={password}
          //onSubmitEditing={onLogin}

          />
          <View>
            <Text style={ScreenStyles.label}>Celula:</Text>
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


          <Text style={ScreenStyles.label}>Rol:</Text>
          <View>

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



          <Text style={ScreenStyles.label}>Ciudad:</Text>
          <TextInput
            placeholder='Ingresa tu ciudad'
            placeholderTextColor='rgba(255,255,255,0.4)'
            underlineColorAndroid='white'
            style={[
              ScreenStyles.inputField,
              (Platform.OS === 'ios') && ScreenStyles.InputFieldIOS
            ]}
            selectionColor='white'

            // onChangeText={(value) => onChange(Value, 'nombre')}
            //value={nombre}
            //onSubmitEditing={onLogin}

            autoCapitalize='none'
            autoCorrect={false}
          />
          <Text style={ScreenStyles.label}>Fecha y Hora:</Text>
          <TextInput
            //Icono Calendario
            placeholderTextColor='rgba(255,255,255,0.4)'
            underlineColorAndroid='white'
            style={[
              ScreenStyles.inputField,
              (Platform.OS === 'ios') && ScreenStyles.InputFieldIOS
            ]}
            selectionColor='white'

            // onChangeText={(value) => onChange(Value, 'nombre')}
            //value={nombre}
            //onSubmitEditing={onLogin}

            autoCapitalize='none'
            autoCorrect={false}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
            <Button 
              title='Cancelar'
              onPress={() => { }}
              color="white"
              
            />

            <Button
              title='Comenzar'
              onPress={() => { }}
              color="white"
            />

          </View>

        </View>
      </KeyboardAvoidingView>
    </>
  )
}
