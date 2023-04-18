import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import * as C from './style'
import Image from '../../images/newCard.svg'
import useCollection from '../../hooks/useCollection'
const CreateCollection = () => {
  const abbreviation = useRef('')
  const name = useRef('')
  const { createCollection } = useCollection()
  const submitCollection = () => {
    const data = {
      abbreviation: abbreviation.current,
      name: name.current
    }
    createCollection(data)
  }
  return (
    <C.ContainerCreateCollection>
      <C.ContainerImage>
        <Image width={'100%'} height={'100%'} />
      </C.ContainerImage>

      <C.ContainerInputs>
        <C.ContainerInput>
          <C.Label>Digite a sigla da sua coleção</C.Label>
          <C.Input onChangeText={(text) => abbreviation.current = text} />
        </C.ContainerInput>

        <C.ContainerInput>
          <C.Label>Digite o nome da coleção</C.Label>
          <C.Input onChangeText={(text) => name.current = text} />
        </C.ContainerInput>


        <C.ButtonSubmit>
          <C.TextButtonSubmit onPress={() => submitCollection()}>ADICIONAR</C.TextButtonSubmit>
        </C.ButtonSubmit>
      </C.ContainerInputs>
    </C.ContainerCreateCollection>
  )
}

export default CreateCollection