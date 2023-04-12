import { api } from '../helpers/api';
const collectionServices = {
  getAll: async () => {
    return await (
      await api.get('/collection')
    ).data;
  },
};

export default collectionServices;
