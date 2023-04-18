import { useQuery, useQueryClient } from 'react-query';
import deckServices from '../services/deckServices';
import { IDecks } from '../interfaces/decks_interface';

interface IProps {
  collection?: string;
}
const useDeck = ({ collection }: IProps) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<IDecks[]>({
    queryKey: ['decks'],
    queryFn: () => deckServices.getAll(collection!),
    enabled: !!collection,
  });

  const createDeck = async (name: string, id: string) => {
    await deckServices.create({ name, id });
    queryClient.invalidateQueries(['decks']);
  };

  return {
    isLoading,
    data,
  };
};
export default useDeck;
