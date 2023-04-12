import React, { useEffect } from 'react'
import * as C from './style'
import { useQuery } from 'react-query'
import collectionServices from '../../services/collectionServices'
import userServices from '../../services/userServices'
const HomePage = () => {
  const { data } = useQuery({
    queryKey: ['collections'],
    queryFn: () => collectionServices.getAll(),
  })

  console.log(data)
  return (
    <C.ContainerHome>
      <C.TextDashboard>Dashboard</C.TextDashboard>
    </C.ContainerHome>
  )
}

export default HomePage