import * as React from 'react';
import { View, Text } from 'react-native';
import Navigation from './stacks';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar />
    </NavigationContainer>
  );
}

export default App;