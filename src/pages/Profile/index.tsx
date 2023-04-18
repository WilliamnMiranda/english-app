import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
  const logout = async () => await AsyncStorage.removeItem('@english-token');
  return (
    <View>
      <TouchableOpacity onPress={() => logout()}><Text>sair</Text></TouchableOpacity>
    </View>
  )
}

export default Profile