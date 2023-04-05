import * as React from 'react';
import { View, Text } from 'react-native';
import Navigation from './stacks';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import fonts from './fonts'

function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    ...fonts
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar />
    </NavigationContainer>
  );
}

export default App;