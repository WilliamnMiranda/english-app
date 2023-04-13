import { ICard } from '../interfaces/cards_interfaces';
import { ICollection } from '../interfaces/collections_interfaces';
import { IDecks } from '../interfaces/decks_interface';

const useCollection = () => {
  const verifyCompletedCollections = (collection: ICollection) => {
    let totalCardsCompleted = 0;
    let totalCards = 0;
    if (collection.decks) {
      collection.decks.forEach((deck: IDecks) => {
        if (deck.cards.length > 0) {
          totalCards = deck.cards.length;
          deck.cards.forEach((card: ICard) => {
            if (card.isComplete) return (totalCardsCompleted += 1);
          });
        }
      });
    }
    return {
      totalCardsCompleted,
      totalCards,
    };
  };

  return {
    verifyCompletedCollections,
  };
};

export default useCollection;
