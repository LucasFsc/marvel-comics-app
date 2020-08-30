/* eslint-disable camelcase */
import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import FlashMessage from 'react-native-flash-message'
import theme from './theme.json'
import Navigator from '~/router'
import store from '~/store'
import 'react-native-gesture-handler'

export default () => {
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <Provider store={store}>
          <StatusBar theme="dark" />
          <Navigator />
        </Provider>
        <FlashMessage position="top" icon="auto" />
      </ApplicationProvider>
    </>
  )
}
