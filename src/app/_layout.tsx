import "../global.css";
import { Slot } from "expo-router";
import { Loading } from "@/components/Loading";
import { useFonts, NunitoSans_300Light, NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold, NunitoSans_800ExtraBold, NunitoSans_900Black }
  from "@expo-google-fonts/nunito-sans";

import { StatusBar } from 'react-native'


export default function Layout() {
  const [fontsLoaded] = useFonts({
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black
  });

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar translucent backgroundColor='rgb(226 232 240)' barStyle="dark-content"/>
      <Slot />
    </>

  );
}
