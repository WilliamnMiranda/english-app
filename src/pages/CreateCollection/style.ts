import styled from 'styled-components/native';

export const ContainerCreateCollection = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  padding: 10px 20px;
`;

export const ContainerImage = styled.View`
  width: 90%;
  height: 50%;
`;

export const ContainerInputs = styled.View`
  height: 45%;
  width: 100%;
`;
export const ContainerInput = styled.View`
  margin-bottom: 20px;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 7;
  padding: 0px 10px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  font-family: 'Poppins_400Regular';
`;
export const Label = styled.Text`
  font-family: 'Poppins_400Regular';
  margin-bottom: 3px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #3da4da;
  width: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  height: 55px;
`;

export const TextButtonSubmit = styled.Text`
  text-transform: uppercase;
  color: black;
  font-family: 'Poppins_500Medium';
`;
