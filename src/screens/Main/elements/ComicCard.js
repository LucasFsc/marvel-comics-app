import React, { memo } from 'react'
import { Card, Text as UiKittenText } from '@ui-kitten/components'
import { View, Image as RNImage } from 'react-native'
import styled from 'styled-components'
import { typography } from 'styled-system'
import { Space } from '~/components'

const Text = styled(UiKittenText)`
  ${typography}
`

const Row = styled(View)`
  flex: 1;
  flex-direction: row;
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
      <Row>
        <Image
          source={{
            uri: `${path}/portrait_small.${extension}`
          }}
        />
        <Space mx={2} />
        <View style={{ flex: 1 }}>
          <Text category="h4">{title}</Text>
          {!!items.length && (
            <>
              <Space my={2} />
              <Row style={{ flexWrap: 'wrap' }}>
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
              </Row>
            </>
          )}
        </View>
      </Row>
    </Card>
  )
)
