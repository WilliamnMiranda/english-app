import styled from 'styled-components/native';

interface IProgress {
  progress: number;
}
export const ContainerProgressBar = styled.View`
  height: 15px;
  background-color: rgb(228, 228, 228);
  width: 100%;
`;
export const Progress = styled.View<IProgress>`
  height: 15px;
  background-color: #00a4e2;
  width: ${({ progress }) => `${progress} %`};
`;
