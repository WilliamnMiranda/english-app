import { View, Text } from 'react-native'
import React, { useState } from 'react'
import * as C from './style'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ICollection } from '../../interfaces/collections_interfaces';
import useDeck from '../../hooks/useDeck';
import Deck from '../../components/decks';
import CreateDeck from '../../components/modal/create_deck';

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
  const [activeModal, setActiveModal] = useState(true);
  const { collection, completedTasks: { totalCardsCompleted, totalCards } } = route!.params;
  const { data } = useDeck({
    collection: collection._id
  })
  return (
    <C.ContainerCollection>
      <CreateDeck visible={activeModal} setVisible={setActiveModal} />
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
            <C.Icon onPress={() => setActiveModal(true)}><MaterialCommunityIcons name="plus" size={20} /></C.Icon>
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

      <C.ContainerCards>
        {
          data?.map((item) => {
            return (
              <Deck deck={item} />
            )
          })
        }
      </C.ContainerCards>
    </C.ContainerCollection>
  )
}

export default CollectionScreen