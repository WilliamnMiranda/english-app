import styled from 'styled-components/native';

export const ContainerDeck = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 15px;
  border-bottom-width: 0.6px;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 10px 0px;
`;
export const IconInit = styled.View`
  width: 29px;
  height: 29px;
  border-radius: 50;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;
export const Infos = styled.View`
  justify-content: space-between;
  flex: 1;
  height: 70px;
`;
export const NameAndCode = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Name = styled.Text`
  font-size: 20px;
  font-family: 'Roboto_500Medium';
`;
export const Code = styled.Text`
  font-family: 'Roboto_400Regular';
`;
export const CompletedCards = styled.View``;
export const TextCompletedCards = styled.Text`
  font-family: 'Poppins_400Regular';
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
`;
