import { api } from '../helpers/api';
const userServices = {
  login: async (data: any) => {
    return await (
      await api.post('/access/login', data)
    ).data;
  },
  auth: async (token: string) => {
    return await (
      await api.post('/access/auth', { token: token })
    ).data;
  },
};

export default userServices;
