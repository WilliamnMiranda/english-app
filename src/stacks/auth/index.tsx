import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../../pages/Intro';
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  )
}

export default Auth