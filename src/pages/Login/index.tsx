import { View, Text, TouchableOpacity } from 'react-native'
import ImageLogin from '../../images/Login.svg'
import Face from '../../images/face-logo.svg'
import Google from '../../images/google-logo.svg'
import React from 'react'
import * as C from './styles'
import userServices from '../../services/userServices'
const Login = () => {
  const data = {
    email: 'williamnmiranda@gmail.com',
    password: '123'
  }

  const submit = async () => await userServices.login(data)


  return (
    <C.ContainerLogin>

      <C.ContainerImage><ImageLogin /></C.ContainerImage>
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
        <C.TextButtonSubmit onPress={() => submit()}>login</C.TextButtonSubmit>
      </C.ButtonSubmit>

      <C.RecoverPassword>Esqueci minha senha</C.RecoverPassword>
      <C.CreateAccount>Criar minha conta</C.CreateAccount>

      <C.TittleLoginWithSocials>
        <C.Line></C.Line>
        <C.TextLoginWithSocials> entrar com </C.TextLoginWithSocials>
        <C.Line></C.Line>
      </C.TittleLoginWithSocials>

      <C.GroupLoginSocials>
        <C.ButtonLogin>
          <Google />
          <C.TextButton> GOOGLE </C.TextButton>
        </C.ButtonLogin>
      </C.GroupLoginSocials>
    </C.ContainerLogin>
  )
}

export default Login