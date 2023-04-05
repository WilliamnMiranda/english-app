import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../../pages/Intro';
import Login from '../../pages/Login';
const Stack = createNativeStackNavigator();

const Auth = () => {
  const options = {
    title: '',
    headerTransparent: true,
    headerShown: false,
  }
  return (
    <Stack.Navigator screenOptions={{ ...options }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default Auth