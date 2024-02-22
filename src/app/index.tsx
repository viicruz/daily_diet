import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as App from './_components'


export default function Home() {

  return (
    <SafeAreaView className="flex-1">
        <App.Header />
      <View className="bg-gray-200 h-full items-center">
        <App.StatusCard/>
      </View>
    </SafeAreaView>
  );
}
