import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { ComicDetails, Main } from '~/screens'

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" headerMode="none">
      <Stack.Screen name="ComicDetails" component={ComicDetails} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
)
