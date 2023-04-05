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
  border-radius: 7px;
  padding:0px 10px;
  border: 1px solid rgba(0,0,0,0.4);
`
export const Label = styled.Text`
  font-family: 'Poppins_500Medium_Italic';
  margin-bottom: 5px;
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
  font-family: 'Poppins_400Regular'
`