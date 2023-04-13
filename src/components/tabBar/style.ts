import styled from 'styled-components/native';

export const ContainerTabBar = styled.View`
  flex-direction: row;
  height: 90px;
  background-color: #ffffff;
  justify-content: center;
  padding-bottom: 20;
`;
export const TabBar = styled.View`
  width: 90%;
  height: 100%;
  background-color: rgb(1, 106, 246);
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
  background-color: rgb(243, 153, 76);
  align-items: center;
  justify-content: center;
  position: relative;
  top: -10%;
  border-color: white;
  border-width: 8px;
`;
