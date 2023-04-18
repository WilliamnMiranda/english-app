import { api } from '../helpers/api';

interface IDataCreateDeck {
  name: string;
  id: string;
}

const deckServices = {
  getAll: async (collection: string) => {
    const a = await (await api.get(`/deck/${collection}`)).data;
    console.log(a);
    return a;
  },
  create: async (data: IDataCreateDeck) => {
    return await (
      await api.post(`/deck/${data.id}`, data)
    ).data;
  },
};

export default deckServices;
