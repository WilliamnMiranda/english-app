import styled from "styled-components/native";

export const ContainerLogin = styled.View`
  flex: 1;
  background-color: white;
  padding: 15px;
`
export const ContainerImage = styled.Text`
  text-align: center;
`
export const ContainerInputs = styled.View``
export const ContainerInput = styled.View`
  margin-bottom:20px;
`
export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 7;
  padding:0px 10px;
  border-width: 1px;
  border-color: rgba(0,0,0,0.2);
  font-family: 'Poppins_400Regular';

`
export const Label = styled.Text`
  font-family: 'Poppins_400Regular';
  margin-bottom: 3px;
`

export const ButtonSubmit = styled.TouchableOpacity`
	background-color: #3da4da;
  width:100%;
  border-radius: 10px;
  align-items:center;
  justify-content:center;
  height: 45px;
  `

export const TextButtonSubmit = styled.Text`
  text-transform: uppercase;
  color: black;
  font-family: 'Poppins_500Medium';
`

export const RecoverPassword = styled.Text`
  margin-top: 15px;
  width: 100%;
  font-family: 'Poppins_300Light_Italic';
`
export const CreateAccount = styled.Text`
  width: 100%;
  text-align: center;
  margin-top:20px;
  font-family: 'Poppins_400Regular_Italic';
`

export const GroupLoginSocials = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap:10px;
  margin-top: 10px;
`

export const ButtonLogin = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap:2px;
`
export const TextButton = styled.Text``

export const TittleLoginWithSocials = styled.View`
  width: 100%;
  flex-direction: row;
  gap:6px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`

export const Line = styled.View`
  width: 35%;
  height: 1px;
  background-color: rgba(0,0,0,0.4);
`
export const TextLoginWithSocials = styled.Text`
  font-family: 'Poppins_300Light_Italic';
`