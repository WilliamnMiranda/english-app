import { View, Text } from 'react-native'
import React from 'react'
import { IDecks } from '../../interfaces/decks_interface'
import * as C from './style'
import AntDesign from '@expo/vector-icons/AntDesign';
import ProgressBar from '../progressBar';
import verifyCompletedCards from '../../helpers/checkFullCards';
interface IProps {
  deck: IDecks
}
const Deck = ({ deck }: IProps) => {
  const {
    numberCompletedCards,
    totalCards
  } = verifyCompletedCards(deck)
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
          <C.TextCompletedCards>{`${numberCompletedCards}/${totalCards} cards estudados`}</C.TextCompletedCards>
        </C.CompletedCards>

        <ProgressBar totalCardsCompleted={numberCompletedCards} totalCards={totalCards} />
      </C.Infos>
    </C.ContainerDeck>
  )
}

export default Deck