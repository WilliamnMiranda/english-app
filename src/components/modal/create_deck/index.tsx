import { View, Text } from 'react-native'
import React, { SetStateAction } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as C from './style'
const CreateDeck = ({ visible, setVisible }: { visible: boolean, setVisible: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <C.ContainerModal
      animationType='slide'
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
            <C.InputText />
          </C.ContainerInput>
          <C.ButtonCreate>
            <C.TextButton>ADICIONAR</C.TextButton>
          </C.ButtonCreate>
        </C.ContentModal>
      </C.Modal>
    </C.ContainerModal>
  )
}

export default CreateDeck