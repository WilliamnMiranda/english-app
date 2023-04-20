import { useMutation, useQuery, useQueryClient } from 'react-query';
import deckServices from '../services/deckServices';
import { IDecks } from '../interfaces/decks_interface';
import { useState } from 'react';

interface IProps {
  collection?: string;
}
const useDeck = ({ collection }: IProps) => {
  const queryClient = useQueryClient();
  const mutate = useMutation((data: { name: string; id: string }) => deckServices.create(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['decks']);
    },
    onError: ({ response }) => {},
  });
  return {
    createDeck: mutate.mutate,
  };
};
export default useDeck;
