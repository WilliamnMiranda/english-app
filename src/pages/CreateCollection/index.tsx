import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import * as C from './style'
import Image from '../../images/newCard.svg'
import useCollection from '../../hooks/useCollection'
const CreateCollection = () => {
  const { createCollection, setAbbreviation, setName } = useCollection()
  return (
    <C.ContainerCreateCollection>
      <C.ContainerImage>
        <Image width={'100%'} height={'100%'} />
      </C.ContainerImage>

      <C.ContainerInputs>
        <C.ContainerInput>
          <C.Label>Digite a sigla da sua coleção</C.Label>
          <C.Input onChangeText={(text) => setAbbreviation(text)} />
        </C.ContainerInput>

        <C.ContainerInput>
          <C.Label>Digite o nome da coleção</C.Label>
          <C.Input onChangeText={(text) => setName(text)} />
        </C.ContainerInput>


        <C.ButtonSubmit onPress={() => createCollection()}>
          <C.TextButtonSubmit>ADICIONAR</C.TextButtonSubmit>
        </C.ButtonSubmit>
      </C.ContainerInputs>
    </C.ContainerCreateCollection>
  )
}

export default CreateCollection