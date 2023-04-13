import styled from 'styled-components/native';
import { ICollection } from '../../interfaces/collections_interfaces';
import { ListRenderItem } from 'react-native';
interface IFlatList {
  data: ICollection[] | undefined;
  renderItem: ListRenderItem<ICollection>;
  keyExtractor: (item: ICollection) => string;
}
export const ContainerHome = styled.View`
  padding: 10px 17px;
`;
export const TextDashboard = styled.Text`
  font-family: 'Poppins_500Medium_Italic';
  font-size: 22px;
`;
export const ListCollections = styled.View`
  gap: 15px;
`;

export const ContainerItem = styled.View`
  background-color: white;
  padding: 10px;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 10px;
  gap: 10px;
`;
export const ContainerNameAndAbbreviation = styled.Text``;

export const ContinerCardsCompleted = styled.Text``;

export const ContainerIcon = styled.View`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-color: pink;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.Text``;
export const ContainerInfos = styled.View``;
