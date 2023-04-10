import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, createContext, useEffect, useState } from "react";
import userServices from "../services/userServices";
interface IProps {
  children: ReactNode;
}

interface IContextUser {
  setAuthenticate: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<any>>,
  authenticate: boolean,
  loading: boolean,
  user: any | undefined
  authenticateUser: () => {}
}
export const UserContext = createContext({} as IContextUser);

export const UserStorage = ({ children }: IProps) => {
  const [authenticate, setAuthenticate] = useState<boolean>(false);
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true);

  const authenticateUser = async () => {
    const token = await AsyncStorage.getItem('@english-token');
    const userAccount = await userServices.auth(token as string)
    if (!token) return
    setAuthenticate(true)
  }
  useEffect(() => {
    authenticateUser()
  }, [])
  return (
    <UserContext.Provider value={{ authenticateUser, setUser, user, setAuthenticate, loading, authenticate }}>
      {children}
    </UserContext.Provider>
  )
}