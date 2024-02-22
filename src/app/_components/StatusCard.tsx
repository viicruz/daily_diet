import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
type Props = {}

export function StatusCard({ }: Props) {
  return (
    <TouchableOpacity className='w-11/12 h-28 justify-center items-center bg-primary_100 rounded-md relative'>
      <View className='justify-end items-end w-full pt-4'>
        <View className='absolute pr-2'>
          <ArrowUpRight size={24} color='#639339' />
        </View>
      </View>

      <Text className='font-nunito-sans-bold font-semibold text-4xl'>
        90,86%
      </Text>
      <Text className='font-nunito-sans-regular font-light'>
        das refeições dentro da dieta
      </Text>
    </TouchableOpacity>
  )
};