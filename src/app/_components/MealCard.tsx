import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  isActive?: boolean;

}

export function MealCard({ isActive, ...rest }: Props) {
  return (
    <TouchableOpacity className='w-11/12 border-[1px] border-gray-400 h-14 items-center flex-row pl-5 gap-3 rounded-md'>
      <View>
        <Text className='font-bold font-nunito-sans-bold'>
          20:00
        </Text>
      </View>
      <View className='border-[1px] border-gray-400 h-5'></View>
      <View className='flex-1'>
        <Text className='font-semibold font-nunito-sans-regular'>X-tudo</Text>
      </View>
      <View className=' bg-primary_100 w-4 h-4 rounded-full mr-3'></View>
    </TouchableOpacity>
  )
}
