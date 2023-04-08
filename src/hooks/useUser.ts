import { useMutation } from 'react-query';
import userServices from '../services/userServices';

const useUser = () => {
  const login = async (data: any) => {
    const user = await userServices.login(data);
    console.log(user);
  };

  return {
    login,
  };
};

export default useUser;
