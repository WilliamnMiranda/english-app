import { View, Text } from 'react-native'
import React from 'react'
import * as C from './style'

interface IProps {
  totalCardsCompleted: number,
  totalCards: number
}
const ProgressBar = ({ totalCardsCompleted, totalCards }: IProps) => {
  return (
    <C.ContainerProgressBar>
      <C.Progress />
    </C.ContainerProgressBar>
  )
}

export default ProgressBar