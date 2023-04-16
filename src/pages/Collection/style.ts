import styled from 'styled-components/native';

export const ContainerCollection = styled.View`
  flex: 1;
`;

export const HeaderCollection = styled.View`
  height: 32%;
  background-color: rgb(50, 75, 107);
  padding: 10px 20px;
  justify-content: space-between;
`;

export const OptionsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackPage = styled.View``;

export const Icon = styled.Text`
  color: white;
`;

export const ContainerBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TextBackDashboard = styled.Text`
  color: white;
  position: relative;
  font-size: 15px;
  top: 1.5%;
  font-family: 'Poppins_400Regular';
  text-transform: uppercase;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const NameAndIconHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  overflow: hidden;
`;

export const ContainerLogo = styled.View`
  height: 85px;
  width: 85px;
  border-radius: 15px;
  background-color: rgb(103, 112, 255);
  align-items: center;
  justify-content: center;
`;

export const TextLogo = styled.Text`
  color: white;
  font-size: 45px;
  text-transform: uppercase;
  font-family: 'Roboto_400Regular';
`;

export const NameCollection = styled.Text`
  color: white;
  font-size: 25px;
  text-transform: uppercase;
  font-family: 'Rubik_600SemiBold';
  width: 74%;
`;

export const ContainerCompletedTasks = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
export const CompletedTasks = styled.Text`
  color: white;
  font-size: 17px;
  color: white;
  font-family: 'Rubik_500Medium';
`;
export const TextCompletedCards = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Poppins_400Regular';
`;
