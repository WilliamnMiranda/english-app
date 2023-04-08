import * as React from 'react';
import { View, Text } from 'react-native';
import Navigation from './stacks';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import fonts from './fonts'
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserStorage } from './contexts/UserContext';

function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    ...fonts
  });

  if (!fontsLoaded) {
    return null;
  }
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <UserStorage>
        <NavigationContainer>
          <Navigation />
          <StatusBar />
        </NavigationContainer>
      </UserStorage>
    </QueryClientProvider>
  );
}

export default App;