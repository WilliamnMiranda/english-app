import React, { useEffect } from 'react'
import * as C from './style'
import { useQuery } from 'react-query'
import collectionServices from '../../services/collectionServices'
import { ICollection } from '../../interfaces/collections_interfaces'


interface IQueryData {
  data: ICollection[]
}
const HomePage = () => {
  const { data } = useQuery<IQueryData>({
    queryKey: ['collections'],
    queryFn: () => collectionServices.getAll(),
  })

  return (
    <C.ContainerHome>
      <C.TextDashboard>Dashboard</C.TextDashboard>
    </C.ContainerHome>
  )
}

export default HomePage