import { useMutation } from 'react-query';
import userServices from '../services/userServices';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUser = () => {
  const { setUser, setAuthenticate, loading, authenticate } = useContext(UserContext);

  const login = async (data: any) => {
    const user = await userServices.login(data);
    if (user) {
      setAuthenticate(true);
      setUser(user);
      await AsyncStorage.setItem('@english-token', user.token);
      return;
    }
    console.log(user);
  };

  return {
    login,
  };
};

export default useUser;
