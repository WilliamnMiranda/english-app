import { api } from '../helpers/api';
const deckServices = {
  getAll: async (collection: string) => {
    const a = await (await api.get(`/deck/${collection}`)).data;
    console.log(a);
    return a;
  },
};

export default deckServices;
