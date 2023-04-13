import React, { useEffect } from 'react'
import * as C from './style'
import { useQuery } from 'react-query'
import collectionServices from '../../services/collectionServices'
import { ICollection } from '../../interfaces/collections_interfaces'
import { View, Text, ScrollView } from 'react-native'
import useCollection from '../../hooks/useCollection'


const ItemList = ({ item }: { item: ICollection }) => {
  const { verifyCompletedCollections } = useCollection()
  const {
    totalCardsCompleted,
    totalCards
  } = verifyCompletedCollections(item)

  return (
    <C.ContainerItem>
      <C.ContainerIcon>
        <C.Icon>N</C.Icon>
      </C.ContainerIcon>
      <C.ContainerInfos>
        <C.ContainerNameAndAbbreviation>{`${item.abbreviation} - ${item.name}`}</C.ContainerNameAndAbbreviation>
        <C.ContinerCardsCompleted>{`${totalCardsCompleted}/${totalCards} cards completos`}</C.ContinerCardsCompleted>
      </C.ContainerInfos>
    </C.ContainerItem>
  )
}

const HomePage = () => {
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
              return <ItemList item={item} />
            })
          }
        </C.ListCollections>
      </ScrollView>
    </C.ContainerHome>
  )
}

export default HomePage