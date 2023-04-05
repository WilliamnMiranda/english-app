import React, { ReactNode } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Slides } from './stages'
import AppIntroSlider from 'react-native-app-intro-slider'
import * as C from './styles'
const Intro = ({ navigation }: any) => {
  const [numberStage, setNumberStage] = React.useState(1)
  const DoneButton = () => {
    return (
      <View
        className='w-full justify-center items-center'
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className='bg-sky-600 p-4 rounded-xl w-11/12 items-center justify-center'
        >
          <Text>Iniciar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderSlides = ({ item }: {
    item: {
      image: any;
      key: number;
      text: string;
      title: string;
      backgroundColor: string
    }
  }) => {
    return (
      <C.ContainerIntro>
        <View className='w-full h-1/2'>
          {item.image}
        </View>
        <C.TittleIntro adjustsFontSizeToFit>
          {item.title}
        </C.TittleIntro>
        <C.TextIntro>
          {item.text}
        </C.TextIntro>
      </C.ContainerIntro>
    )
  }
  const alterStage = (index: number) => setNumberStage(index + 1)
  return (
    <>
      <C.ContainerHeader>
        <Text className='font-bold text-sm'> {numberStage} /3</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          {numberStage <= Slides.length - 1 && <Text className='font-bold color-sky-600 text-sm'> SKIP </Text>}
        </TouchableOpacity>
      </C.ContainerHeader>

      <AppIntroSlider
        renderItem={renderSlides}
        data={Slides}
        showNextButton={false}
        onSlideChange={alterStage}
        bottomButton
        dotStyle={{
          width: 30,
          backgroundColor: '#E5E5E5',
        }}
        activeDotStyle={{
          backgroundColor: '#1A87DD',
          width: 30,
        }}
        renderDoneButton={DoneButton}
      />
    </>
  )
}

export default Intro
