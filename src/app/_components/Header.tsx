import React from 'react'
import { View, Text, Image } from 'react-native';
import { ForkKnife } from 'phosphor-react-native';

type Props = {}

export function Header() {
  return (
    <View className='bg-gray-200 h-20 justify-center'>
      <View className='pl-6 w-full flex-row'>
        <ForkKnife weight='bold' size={36} />
        <View className='flex-1'>
          <Text className='font-nunito-black text-md font-black text-left'>Daily {"\n"} Diet</Text>    
        </View>
        <View className='pr-6'>
          <Image className='rounded-full border-2 border-gray-700' width={40} height={40} source={{ uri: 'https://github.com/viicruz.png' }} />
        </View>
      </View>
    </View>
  )
}