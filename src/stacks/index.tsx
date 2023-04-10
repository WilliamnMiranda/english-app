import { Text } from "react-native"
import Auth from "./auth"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"
import Routes from "./routes"

const Navigation = () => {
  const { authenticate } = useContext(UserContext)
  return (
    <>
      {authenticate ? <Routes /> : <Auth />}
    </>
  )
}

export default Navigation