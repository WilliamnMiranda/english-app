import * as React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as C from './style'
import MyTabBar from '../../components/tabBar';
import HomeStack from '../homeStacks';
import options
  from '../../helpers/configsHeaderRoutes';
function SettingsScreen() {
  return (
    <C.ContainerScreenRoute><Text>Home!</Text></C.ContainerScreenRoute>
  );
}

function ProfileScreen({ route, navigation }: any) {
  const { collection } = route.params;
  console.log(collection)
  return (
    <C.ContainerScreenRoute><Text>Home!</Text></C.ContainerScreenRoute>
  );
}
const Tab = createBottomTabNavigator();

export default function Routes() {

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
      screenOptions={
        { ...options }
      }
    >
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarStyle: {
          display: 'none'
        }
      }} />
      <Tab.Screen name="CreateClass" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}