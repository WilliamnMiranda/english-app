import styled from 'styled-components/native';

export const ContainerModal = styled.Modal``;
export const Modal = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
`;
export const ContentModal = styled.View`
  padding: 20px;
  width: 90%;
  align-items: center;
  background-color: white;
`;
export const HeaderModal = styled.View`
  width: 100%;
  align-items: flex-end;
`;
export const IconClose = styled.Text``;

export const InputText = styled.TextInput`
  width: 100%;
  height: 35px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0px 5px;
`;
export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export const Label = styled.Text`
  font-family: 'Poppins_400Regular';
`;
export const TextButton = styled.Text`
  font-family: 'Roboto_500Medium';
`;
export const ButtonCreate = styled.TouchableOpacity`
  background-color: rgb(36, 168, 215);
  outline: none;
  border: none;
  height: 40px;
  width: 100%;
  color: white;
  font-weight: 500;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
