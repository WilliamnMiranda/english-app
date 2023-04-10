import * as React from 'react';
import { Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
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
            borderColor: 'red',
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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => renderTabs(route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 20,
          left: 15,
          right: 15,
          borderRadius: 30,
        },
        ...options,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CreateClass" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}