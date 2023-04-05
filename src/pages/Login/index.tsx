import { View, Text, TouchableOpacity } from 'react-native'
import ImageLogin from '../../images/Login.svg'
import React from 'react'
import * as C from './styles'
const Login = () => {
  return (
    <C.ContainerLogin>

      <C.ContainerImage> <ImageLogin /> </C.ContainerImage>
      <C.ContainerInputs>
        <C.ContainerInput>
          <C.Label>Digite seu email</C.Label>
          <C.Input />
        </C.ContainerInput>

        <C.ContainerInput>
          <C.Label>Digite sua senha</C.Label>
          <C.Input />
        </C.ContainerInput>
      </C.ContainerInputs>


      <C.ButtonSubmit>
        <C.TextButtonSubmit>login</C.TextButtonSubmit>
      </C.ButtonSubmit>

      <C.RecoverPassword> Esqueci minha senha </C.RecoverPassword>
      <C.CreateAccount> Criar minha conta</C.CreateAccount>
    </C.ContainerLogin>
  )
}

export default Login