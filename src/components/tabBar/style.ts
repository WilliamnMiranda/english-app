import styled from 'styled-components/native';

export const ContainerTabBar = styled.View`
  flex-direction: row;
  height: 90px;
  background-color: #f2f2f2;
  justify-content: center;
  padding-bottom: 20;
`;
export const TabBar = styled.View`
  width: 90%;
  height: 100%;
  background-color: white;
  border-radius: 20;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonCreate = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 50;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -10%;
  border-color: #f2f2f2;
  border-width: 8px;
`;
