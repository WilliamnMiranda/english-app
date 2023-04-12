import React, { useEffect } from 'react'
import * as C from './style'
import { useQuery } from 'react-query'
import collectionServices from '../../services/collectionServices'
import userServices from '../../services/userServices'
const HomePage = () => {
  return (
    <C.ContainerHome>
      <C.TextDashboard>Dashboard</C.TextDashboard>
    </C.ContainerHome>
  )
}

export default HomePage