import { useQuery } from 'react-query';
import deckServices from '../services/deckServices';
import { IDecks } from '../interfaces/decks_interface';

interface IProps {
  collection?: string;
}
const useDeck = ({ collection }: IProps) => {
  const { data, isLoading } = useQuery<IDecks[]>({
    queryKey: ['decks'],
    queryFn: () => deckServices.getAll(collection!),
    enabled: !!collection,
  });

  return {
    isLoading,
    data,
  };
};
export default useDeck;
