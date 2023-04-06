import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://192.168.0.53:8081/',
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers!['x-access-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject('aaaaaaaaaaaaaaaaab');
  }
);
