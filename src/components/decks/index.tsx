import { View, Text } from 'react-native'
import React from 'react'
import { IDecks } from '../../interfaces/decks_interface'
import * as C from './style'

interface IProps {
  deck: IDecks
}
const Deck = ({ deck }: IProps) => {
  return (
    <C.ContainerDeck>
      <C.IconInit>

      </C.IconInit>

      <C.Infos>

      </C.Infos>
    </C.ContainerDeck>
  )
}

export default Deck