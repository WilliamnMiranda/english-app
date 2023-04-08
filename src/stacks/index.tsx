import { Text, View } from "react-native"
import Auth from "./auth"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

const Navigation = () => {
  const { authenticate } = useContext(UserContext)
  return (
    <>
      {authenticate ? <Text> teste </Text> : <Auth />}
    </>
  )
}

export default Navigation