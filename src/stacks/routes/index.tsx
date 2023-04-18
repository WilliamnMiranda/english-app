import * as React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as C from './style'
import MyTabBar from '../../components/tabBar';
import HomeStack from '../homeStacks';
import options
  from '../../helpers/configsHeaderRoutes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../pages/Home';
import CollectionScreen from '../../pages/Collection';
import Profile from '../../pages/Profile'

function SettingsScreen() {
  return (
    <C.ContainerScreenRoute><Text>Home!</Text></C.ContainerScreenRoute>
  );
}

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
      screenOptions={
        { ...options }
      }
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="CreateClass" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={
      { ...options }
    }>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Collections" component={CollectionScreen} />
    </Stack.Navigator>
  );
}