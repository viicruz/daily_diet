import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import { Plus } from 'phosphor-react-native';


type Props = {}

export function Button({ }: Props) {
  return (
    <TouchableOpacity className='w-11/12 justify-center items-center bg-gray-800 rounded-md h-12'>
      <View className='flex-row gap-3'>
        <Plus size={20} color='white'/>
        <Text className='text-white text-center font-nunito-sans-semibold font-smibold'>
          Nova refeição
        </Text>
      </View>
    </TouchableOpacity>
  )
}