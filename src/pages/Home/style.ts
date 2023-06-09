import styled from 'styled-components/native';
import { ICollection } from '../../interfaces/collections_interfaces';
import { ListRenderItem } from 'react-native';
interface IFlatList {
  data: ICollection[] | undefined;
  renderItem: ListRenderItem<ICollection>;
  keyExtractor: (item: ICollection) => string;
}
export const ContainerHome = styled.View`
  padding: 30px 17px 10px 17px;
  background-color: #ffffff;
  flex: 1;
`;
export const TextDashboard = styled.Text`
  font-family: 'Rubik_500Medium_Italic';
  margin-bottom: 15px;
  font-size: 22px;
`;
export const ListCollections = styled.View`
  gap: 15px;
`;

export const ContainerItem = styled.TouchableOpacity`
  background-color: white;
  padding: 15px;
  justify-content: flex-start;
  flex-direction: row;
  border-radius: 10px;
  border-width: 0.9px;
  border-color: rgba(0, 0, 0, 0.1);
  gap: 10px;
`;
export const ContainerNameAndAbbreviation = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ContinerCardsCompleted = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
`;

export const ContainerIcon = styled.View`
  height: 65px;
  width: 65px;
  border-radius: 5px;
  background-color: rgb(103, 112, 255);
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.Text`
  color: white;
  font-size: 30;
`;
export const ContainerInfos = styled.View`
  flex-grow: 1;
  justify-content: space-between;
`;
