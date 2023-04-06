import { api } from '../helpers/api';
const userServices = {
  login: async (data: any) => {
    const user = await (await api.post('/access/login', data)).data;
    return user;
  },
  auth: async (token: string) => {
    return await (
      await api.post('/access/auth', { token: token })
    ).data;
  },
};

export default userServices;
