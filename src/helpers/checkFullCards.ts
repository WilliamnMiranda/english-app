import { ICard } from '../interfaces/cards_interfaces';
import { IDecks } from '../interfaces/decks_interface';

const verifyCompletedCards = (deck: IDecks) => {
  const numberCompletedCards = deck.cards.reduce((accumulator: number, card: ICard) => {
    if (card.isComplete) return accumulator + 1;
    return accumulator;
  }, 0);
  const totalCards = deck.cards.length;
  return {
    numberCompletedCards,
    totalCards,
  };
};

export default verifyCompletedCards;
