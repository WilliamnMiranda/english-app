import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../pages/Home';
import CollectionScreen from '../../pages/Collection';
import options from '../../helpers/configsHeaderRoutes';
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={
      { ...options }
    }>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Collections" component={CollectionScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack



