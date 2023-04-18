import { api } from '../helpers/api';
import { ICreateCollection } from '../interfaces/collections_interfaces';
const collectionServices = {
  getAll: async () => {
    return await (
      await api.get('/collection')
    ).data;
  },
  create: async (data: ICreateCollection) => {
    return await (
      await api.post('/collection', data)
    ).data;
  },
};

export default collectionServices;
