import * as React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as C from './style'
import MyTabBar from '../../components/tabBar';
import HomeScreen from '../../pages/Home'

function SettingsScreen() {
  return (
    <C.ContainerScreenRoute><Text>Home!</Text></C.ContainerScreenRoute>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {

  const options = {
    title: '',
    headerTransparent: true,
    headerShown: false,
  }


  const renderTabs = (route: any) => {
    if (route.name === 'Home')
      return (
        <Text style={{ alignItems: 'center' }}>
          <FontAwesome name="home" size={25} />{' '}
        </Text>
      )
    if (route.name === 'Profile')
      return (
        <Text style={{ alignItems: 'center' }}>
          <FontAwesome name="user" size={25} />{' '}
        </Text>
      )
    if (route.name === 'CreateClass')
      return (
        <View style={
          {
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            height: 65,
            borderWidth: 8,
            borderColor: 'grey',
            borderRadius: 50,
            backgroundColor: 'pink',
            padding: 0,
            margin: 0,
            position: 'relative',
            top: -30
          }}>
          <Text><FontAwesome name="plus" size={20} /></Text>
        </View>
      )
  }
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CreateClass" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}