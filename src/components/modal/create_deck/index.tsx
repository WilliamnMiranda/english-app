import { View, Text } from 'react-native'
import React, { SetStateAction, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as C from './style'
import useDeck from '../../../hooks/useDeck';
const CreateDeck = ({ visible, setVisible, collection }: { visible: boolean, setVisible: React.Dispatch<SetStateAction<boolean>>, collection: string }) => {
  const [name, setName] = useState('');
  const { createDeck } = useDeck({
    collection
  })
  return (
    <C.ContainerModal
      animationType='fade'
      transparent={true}
      visible={visible}
    >
      <C.Modal onPress={() => setVisible(false)} activeOpacity={1}>
        <C.ContentModal>
          <C.HeaderModal>
            <C.IconClose> <AntDesign name="close" color="black" size={20} /> </C.IconClose>
          </C.HeaderModal>

          <C.ContainerInput>
            <C.Label>Digite o nome do seu deck</C.Label>
            <C.InputText onChangeText={(text) => setName(text)} />
          </C.ContainerInput>
          <C.ButtonCreate onPress={() => {
            createDeck({ name, id: collection })
            setVisible(false)
          }}>
            <C.TextButton>ADICIONAR</C.TextButton>
          </C.ButtonCreate>
        </C.ContentModal>
      </C.Modal>
    </C.ContainerModal>
  )
}

export default CreateDeck