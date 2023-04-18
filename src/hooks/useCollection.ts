import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ICard } from '../interfaces/cards_interfaces';
import { ICollection, ICreateCollection } from '../interfaces/collections_interfaces';
import { IDecks } from '../interfaces/decks_interface';
import collectionServices from '../services/collectionServices';
import { useState } from 'react';

const useCollection = () => {
  const [error, setError] = useState('');
  const queryClient = useQueryClient();
  const mutate = useMutation((data: ICreateCollection) => collectionServices.create(data), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(['collections']);
      queryClient.invalidateQueries(['decks']);
    },
    onError: ({ response }) => {},
  });

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

  const createCollection = (data: ICreateCollection) => {
    const { abbreviation } = data;
    if (abbreviation.length !== 3) setError('Voce precisa digitar ate 3 letras na sigla');
    else {
      mutate.mutate(data);
    }
  };

  return {
    verifyCompletedCollections,
    createCollection,
    error,
  };
};

export default useCollection;
