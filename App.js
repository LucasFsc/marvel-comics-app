import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import theme from './theme.json'
import Navigator from '~/router'
import store from '~/store'
import 'react-native-gesture-handler'

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <Provider store={store}>
        <StatusBar theme="dark" />
        <Navigator />
      </Provider>
    </ApplicationProvider>
  </>
)
