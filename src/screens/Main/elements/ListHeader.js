import React, { useEffect, useRef } from 'react'
import {
  View as RNView,
  TouchableOpacity as RNTO,
  TouchableWithoutFeedback
} from 'react-native'
import styled from 'styled-components'
import { border, flexbox, layout, position, space } from 'styled-system'
import { Icon as UIKittenIcon, Input, useTheme } from '@ui-kitten/components'
import { useDispatch, useSelector } from 'react-redux'
import MarverLogo from '~/assets/images/marvel-logo.svg'
import { main as mainActions } from '~/store/actions'

const View = styled(RNView)`
  ${flexbox}
  ${space}
`

const TouchableOpacity = styled(RNTO)`
  ${border}
  ${layout}
  ${position}
  ${space}
`

const Icon = styled(UIKittenIcon)`
  ${layout}
`

export default () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { searching, searchingText } = useSelector(store => store.main)
  const inputRef = useRef(null)

  useEffect(() => {
    if (searching) {
      inputRef?.current?.focus()
    }
  }, [searching])

  return (
    <View mt={2} mb={3}>
      <View alignItems="center">
        {searching ? (
          <Input
            style={{ flex: 1 }}
            onChangeText={text => dispatch(mainActions.onSearchText(text))}
            returnKeyType="done"
            value={searchingText}
            accessoryRight={props => (
              <TouchableWithoutFeedback
                onPress={() => dispatch(mainActions.toggleSearch())}
              >
                <Icon {...props} name="close-outline" />
              </TouchableWithoutFeedback>
            )}
            ref={inputRef}
          />
        ) : (
          <>
            <MarverLogo
              style={{
                width: 130,
                height: 52
              }}
            />
            <View
              position="absolute"
              top={0}
              right={8}
              bottom={0}
              alignItems="flex-end"
              justifyContent="center"
            >
              <TouchableOpacity
                onPress={() => dispatch(mainActions.toggleSearch())}
              >
                <Icon
                  name="search-outline"
                  fill={theme['color-primary-default']}
                  width={32}
                  height={32}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  )
}
