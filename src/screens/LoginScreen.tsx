import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { ScreenStyles } from '../theme/LoginTheme';

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {


  const { nombre, password, onChange } = useForm({
    nombre: 'Anto',
    password: '123456'

  });

  const onLogin = () => {
    console.log({ nombre, password })
    Keyboard.dismiss();
  }

  return (
    <>
      <Background />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >

        <View style={ScreenStyles.Container}>
          <Text style={ScreenStyles.titleSuperior}>3IT Recruitment</Text>
          <WhiteLogo />
          
          <Text style={ScreenStyles.title}>Login</Text>
          <Text style={ScreenStyles.label}>Usuario:</Text>
          <TextInput
            placeholder='Ingresa tu nombre'
            placeholderTextColor='rgba(255,255,255,0.4)'
            underlineColorAndroid='white'
            style={[
              ScreenStyles.inputField,
              (Platform.OS === 'ios') && ScreenStyles.InputFieldIOS
            ]}
            selectionColor='white'

            onChangeText={(value) => onChange(value, 'nombre')}
            value={nombre}
            onSubmitEditing={onLogin}

            autoCapitalize='none'
            autoCorrect={false}
          />
          <Text style={ScreenStyles.label}>Contraseña:</Text>
          <TextInput
            placeholder='************'
            placeholderTextColor='rgba(255,255,255,0.4)'
            underlineColorAndroid='white'
            secureTextEntry={true}
            style={[
              ScreenStyles.inputField,
              (Platform.OS === 'ios') && ScreenStyles.InputFieldIOS
            ]}
            selectionColor='white'

            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}

          />

          <View style={ScreenStyles.buttonIngresar}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={ScreenStyles.button}
              onPress={onLogin}
            >
              <Text style={ScreenStyles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          
          {/*otra pantalla*/}

          <View style={ScreenStyles.buttonIngresar}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={ScreenStyles.button}
              onPress={() => navigation.navigate('EntrevistasScreen')}
              //luego reemplazar el .navigate por .replace para que no vuelva al login
            >
              <Text style={ScreenStyles.buttonText}>Otra pantalla de momento</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
