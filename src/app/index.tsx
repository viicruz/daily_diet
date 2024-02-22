import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as App from './_components'


export default function Home() {

  return (
    <SafeAreaView className="flex-1">
      <App.Header />
      <View className="bg-gray-200  items-center">
        <App.StatusCard />
        <View className="w-full pt-5 h-full">
          <Text className='pl-6 text-lg font-nunito-sans-semibold'>
            Refeições:
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}
