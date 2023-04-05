import React, { ReactNode } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Slides } from './stages'
import AppIntroSlider from 'react-native-app-intro-slider'
import { NativeStackScreenProps } from '@react-navigation/native-stack'


const Intro = ({ navigation }: any) => {
  const [numberStage, setNumberStage] = React.useState(1)

  const DoneButton = () => {
    return (
      <View className='w-full justify-center items-center'>
        <TouchableOpacity
          onPress={() => navigation.navigate('Access')}
          className='bg-sky-600 p-4 rounded-xl w-11/12 items-center justify-center'
        >
          <Text style={{ color: 'white', fontWeight: '600' }}>Iniciar</Text>
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
      <View className='flex-1 justify-center items-center gap-4 px-7'>
        <View className='w-full h-1/2'>
          {item.image}
        </View>
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    )
  }
  const alterStage = (index: number) => setNumberStage(index + 1)
  return (
    <>
      <View className="items-center w-full justify-between bg-red-400 flex-row p-5">
        <Text> {numberStage} /3</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Access')}>
          {numberStage <= Slides.length - 1 && <Text> SKIP </Text>}
        </TouchableOpacity>
      </View>

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
