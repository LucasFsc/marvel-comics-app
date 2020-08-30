import React from 'react'
import { View as RNView } from 'react-native'
import { Text as UIKittenText } from '@ui-kitten/components'
import { useSelector } from 'react-redux'
import { layout, typography } from 'styled-system'
import styled from 'styled-components'

const View = styled(RNView)`
  ${layout}
`

const Text = styled(UIKittenText)`
  ${typography}
`

export default () => {
  const { characterSearchComics, searching, searchingText } = useSelector(
    store => store.main
  )

  return (
    <View alignItems="center">
      {searching && !!searchingText && !characterSearchComics.length && (
        <Text textAlign="center" category="p1">
          No comic was found with the character name{' '}
          <Text category="s1">{searchingText}</Text>
        </Text>
      )}
    </View>
  )
}
