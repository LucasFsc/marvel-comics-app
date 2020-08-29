import React, { memo } from 'react'
import { Card, Text } from '@ui-kitten/components'
import { View as RNView, Image as RNImage } from 'react-native'
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import { Space } from '~/components'

const View = styled(RNView)`
  ${flexbox}
`

const Image = styled(RNImage)`
  width: 50px;
  height: 75px;
  border-radius: 2px;
`

export default memo(
  ({
    title = '',
    thumbnail: { path, extension },
    creators: { items = [] } = {},
    onPress = () => {}
  }) => (
    <Card onPress={onPress} activeOpacity={0.5}>
      <View flex={1} flexDirection="row">
        <Image
          source={{
            uri: `${path}/portrait_small.${extension}`
          }}
        />
        <Space mx={2} />
        <View flex={1}>
          <Text category="h4">{title}</Text>
          {!!items.length && (
            <>
              <Space my={2} />
              <View flex={1} flexWrap="wrap" flexDirection="row">
                <Text category="p2">Authors: </Text>
                {items?.map(({ name }, index) => {
                  const predicate = index < items.length - 1

                  return (
                    <Text category="p2" key={name}>
                      {name}
                      {predicate ? ', ' : '.'}
                    </Text>
                  )
                })}
              </View>
            </>
          )}
        </View>
      </View>
    </Card>
  )
)
