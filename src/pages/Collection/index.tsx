import { View, Text } from 'react-native'
import React from 'react'
import * as C from './style'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ICollection } from '../../interfaces/collections_interfaces';

interface IProps {
  navigation?: any
  route?: {
    params: {
      collection: ICollection,
      completedTasks: {
        totalCardsCompleted: number,
        totalCards: number,
      }
    }
  }
}
const CollectionScreen = ({ route, navigation }: IProps) => {
  const { collection, completedTasks: { totalCardsCompleted, totalCards } } = route!.params;
  console.log(totalCardsCompleted, totalCards)
  return (
    <C.ContainerCollection>
      <C.HeaderCollection>
        <C.OptionsHeader>
          <C.ContainerBack
            onPress={
              () => navigation.navigate('Home')
            }
          >
            <C.Icon><AntDesign name="left" size={20} /></C.Icon>
            <C.TextBackDashboard> Dashboard</C.TextBackDashboard>
          </C.ContainerBack>

          <C.ContainerIcons>
            <C.Icon><MaterialCommunityIcons name="feature-search-outline" size={20} /></C.Icon>
            <C.Icon><Ionicons name="ios-ellipsis-horizontal-sharp" size={30} /></C.Icon>
          </C.ContainerIcons>
        </C.OptionsHeader>
        <C.NameAndIconHeader>
          <C.ContainerLogo>
            <C.TextLogo>N</C.TextLogo>
          </C.ContainerLogo>

          <C.NameCollection numberOfLines={1}>{`${collection.abbreviation} - ${collection.name}`}</C.NameCollection>
        </C.NameAndIconHeader>

        <C.ContainerCompletedTasks>
          <C.TextCompletedCards>Total de cards estudados:</C.TextCompletedCards>
          <C.CompletedTasks>{`${totalCardsCompleted} / ${totalCards}`}</C.CompletedTasks>
        </C.ContainerCompletedTasks>
      </C.HeaderCollection>
    </C.ContainerCollection>
  )
}

export default CollectionScreen