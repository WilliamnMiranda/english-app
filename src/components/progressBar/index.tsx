import { View, Text } from 'react-native'
import React from 'react'
import * as C from './style'

interface IProps {
  totalCardsCompleted: number,
  totalCards: number
}
const ProgressBar = ({ totalCardsCompleted, totalCards }: IProps) => {
  const progressCompleted = totalCards > 0 ? Math.floor((totalCardsCompleted / totalCards) * 100) : 100
  return (
    <C.ContainerProgressBar>
      <C.Progress progress={progressCompleted} />
    </C.ContainerProgressBar>
  )
}

export default ProgressBar