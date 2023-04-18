import { View, Text } from 'react-native'
import React from 'react'
import { IDecks } from '../../interfaces/decks_interface'
import * as C from './style'
import AntDesign from '@expo/vector-icons/AntDesign';
import ProgressBar from '../progressBar';
interface IProps {
  deck: IDecks
}
const Deck = ({ deck }: IProps) => {
  return (
    <C.ContainerDeck>
      <C.IconInit>
        <AntDesign name="caretright" size={13} color={'white'} />
      </C.IconInit>

      <C.Infos>
        <C.NameAndCode>
          <C.Name>{deck.name}</C.Name>
          <C.Code>#{deck.code}</C.Code>
        </C.NameAndCode>

        <C.CompletedCards>
          <C.TextCompletedCards>{`0/20 cards estudados`}</C.TextCompletedCards>
        </C.CompletedCards>

        <ProgressBar totalCardsCompleted={10} totalCards={20} />
      </C.Infos>
    </C.ContainerDeck>
  )
}

export default Deck