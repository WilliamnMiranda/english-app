import { NavigationContainer } from "@react-navigation/native"
import { Text } from "react-native"
import Auth from "./auth"

const Navigation = () => {
  const auth = false
  return (
    <>
      {auth ? <Text> teste </Text> : <Auth />}
    </>
  )
}

export default Navigation