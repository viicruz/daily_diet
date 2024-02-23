import { Link } from "expo-router";
import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import * as App from './_components'
import { Button } from "../components/Button";


export default function Home() {

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <App.Header />
      <View className="items-center">
        <App.StatusCard />
        <View className="w-full items-start pt-5 pb-2">
          <Text className='pl-6 text-lg font-nunito-sans-semibold'>
            Refeições:
          </Text>
          </View>
        <View className="w-full items-center gap-4">
          <Button />
          <App.MealCard/>
        </View>

      </View>
    </SafeAreaView>
  );
}
