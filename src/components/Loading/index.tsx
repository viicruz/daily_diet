import React from 'react'
import { View, ActivityIndicator } from 'react-native'

type Props = {}

export function Loading({ }: Props) {
  return (
    <View className='flex-1 justify-center'>
      <ActivityIndicator color='#333638' size="large" />
    </View>
  )
}