import { View, Text,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className='w-full h-[500px]'>
      <Image
        source={{uri:'https://s3.ap-south-1.amazonaws.com/assets.vedicgems.com/banners/promotional/MicrosoftTeams-image+(40).png'}}
        className=' flex-1 object-contain'
      />
    </View>
  )
}

export default Home