import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import * as C from './style'
import Image from '../../images/newCard.svg'
const CreateCollection = () => {
  const abbreviation = useRef('')
  const name = useRef('')
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
          <C.TextButtonSubmit>ADICIONAR</C.TextButtonSubmit>
        </C.ButtonSubmit>
      </C.ContainerInputs>
    </C.ContainerCreateCollection>
  )
}

export default CreateCollection