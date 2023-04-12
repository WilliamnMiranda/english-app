import { api } from '../helpers/api';
const collectionServices = {
  getAll: async () => {
    const a = await (await api.get('/collection')).data;
    console.log(a);
  },
};

export default collectionServices;
