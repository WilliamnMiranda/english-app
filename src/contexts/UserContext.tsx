import { ReactNode, createContext, useEffect, useState } from "react";
interface IProps {
  children: ReactNode;
}

interface IContextUser {
  setAuthenticate: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<any>>,
  authenticate: boolean,
  loading: boolean,
  user: any | undefined
}
export const UserContext = createContext({} as IContextUser);

export const UserStorage = ({ children }: IProps) => {
  const [authenticate, setAuthenticate] = useState<boolean>(false);
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <UserContext.Provider value={{ setUser, user, setAuthenticate, loading, authenticate }}>
      {children}
    </UserContext.Provider>
  )
}