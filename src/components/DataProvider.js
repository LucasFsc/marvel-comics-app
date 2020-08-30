import React from 'react'
import { View as RNView } from 'react-native'
import { Text, useTheme } from '@ui-kitten/components'
import { border, color, flexbox } from 'styled-system'
import styled from 'styled-components'

const View = styled(RNView)`
  ${border}
  ${color}
  ${flexbox}
`

export default () => {
  const theme = useTheme()

  return (
    <View
      alignItems="center"
      bg={theme['color-primary-default']}
      borderRadius={2}
    >
      <Text category="s1">Data provided by Marvel. © 2014 Marvel</Text>
    </View>
  )
}
