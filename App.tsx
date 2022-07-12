import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Routes} from "./src/Routes"
import {Inter_700Bold, Inter_500Medium, Inter_400Regular} from '@expo-google-fonts/inter'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import Toast from 'react-native-toast-message'


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });
  
  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <>
    <StatusBar style="light" translucent backgroundColor="transparent"/>
    <Routes />
    <Toast />
    </>
  );
}

