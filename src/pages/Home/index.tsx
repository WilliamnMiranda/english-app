import React, { useEffect } from 'react'
import * as C from './style'
import { useQuery } from 'react-query'
import collectionServices from '../../services/collectionServices'
import { ICollection } from '../../interfaces/collections_interfaces'
import { View, Text, ScrollView } from 'react-native'
import useCollection from '../../hooks/useCollection'
import ProgressBar from '../../components/progressBar'

const ItemList = ({ item, navigation }: { item: ICollection, navigation: any }) => {
  const { verifyCompletedCollections } = useCollection()
  const {
    totalCardsCompleted,
    totalCards
  } = verifyCompletedCollections(item)
  return (
    <C.ContainerItem onPress={() => {
      navigation.navigate('Collections', {
        collection: item
      })
    }}>
      <C.ContainerIcon>
        <C.Icon>N</C.Icon>
      </C.ContainerIcon>
      <C.ContainerInfos>
        <C.ContainerNameAndAbbreviation>{`${item.abbreviation} - ${item.name}`}</C.ContainerNameAndAbbreviation>
        <C.ContinerCardsCompleted>{`${totalCardsCompleted}/${totalCards} cards completos`}</C.ContinerCardsCompleted>
        <ProgressBar totalCardsCompleted={totalCardsCompleted} totalCards={totalCards} />
      </C.ContainerInfos>
    </C.ContainerItem>
  )
}

const HomePage = ({ navigation }: { navigation: any }) => {
  const { data, isLoading } = useQuery<ICollection[]>({
    queryKey: ['collections'],
    queryFn: () => collectionServices.getAll(),
  })

  return (
    <C.ContainerHome>
      <C.TextDashboard>Dashboard</C.TextDashboard>
      <ScrollView>
        <C.ListCollections>
          {
            data?.map((item: ICollection) => {
              return <ItemList navigation={navigation} item={item} />
            })
          }
        </C.ListCollections>
      </ScrollView>
    </C.ContainerHome>
  )
}

export default HomePage