import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-direction: row;
  background-color: white;
`;

export const ImageIntro = styled.View`
  height: 50%;
  width: 100%;
`;
export const TittleIntro = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 20px;
  text-align: center;
  width: 100%;
`;

export const TextIntro = styled.Text`
  font-size: 15px;
  font-family: 'Poppins_300Light';
`;

export const ContainerIntro = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 40px 20px;
  background-color: white;
`;
