import React from 'react'
import {
  Divider,
  Icon,
  Layout,
  Text as UIKittenText,
  TopNavigation,
  TopNavigationAction
} from '@ui-kitten/components'
import {
  Image as RNImage,
  View as RNView,
  SafeAreaView,
  ScrollView
} from 'react-native'
import styled from 'styled-components'
import { flexbox, space, typography } from 'styled-system'
import { DataProvider, Space } from '~/components'

const View = styled(RNView)`
  ${flexbox}
  ${space}
`

const Image = styled(RNImage)`
  width: 300px;
  height: 450px;
  border-radius: 2px;
`

const Text = styled(UIKittenText)`
  ${typography}
`

export default ({
  navigation: { goBack },
  route: {
    params: {
      title,
      description,
      thumbnail: { path, extension },
      characters: { items: characters },
      creators: { items: creators },
      pageCount
    }
  }
}) => (
  <SafeAreaView style={{ flex: 1 }}>
    <TopNavigation
      alignment="center"
      title={props => <Text {...props}>Comic details</Text>}
      accessoryLeft={() => (
        <TopNavigationAction
          icon={props => <Icon {...props} name="arrow-back-outline" />}
          onPress={goBack}
        />
      )}
    />
    <Divider />
    <Layout style={{ flex: 1 }} level="4">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Space my={2} />
        <Text textAlign="center" category="h6">
          {title}
        </Text>
        <Space my={2} />
        <View alignItems="center" m={3}>
          <Image
            source={{
              uri: `${path}/portrait_uncanny.${extension}`
            }}
          />
        </View>
        {description && (
          <>
            <Space my={2} />
            <Text category="s1">
              Description: <Text category="p1">{description}</Text>
            </Text>
          </>
        )}
        <Space my={2} />
        <Text category="s1">
          Number of pages: <Text category="p1">{pageCount}</Text>
        </Text>
        {!!characters.length && (
          <>
            <Space my={2} />
            <View flexDirection="row" flexWrap="wrap">
              <Text category="s1">Characters: </Text>
              {characters?.map(({ name }, index) => {
                const predicate = index < characters.length - 1

                return (
                  <Text category="p1" key={name}>
                    {name}
                    {predicate ? ', ' : '.'}
                  </Text>
                )
              })}
            </View>
          </>
        )}
        {!!creators.length && (
          <>
            <Space my={2} />
            <View flexDirection="row" flexWrap="wrap">
              <Text category="s1">Authors: </Text>
              {creators?.map(({ name, role }, index) => {
                const predicate = index < creators.length - 1

                return (
                  <Text category="p1" key={name}>
                    {name} ({role}){predicate ? ', ' : '.'}
                  </Text>
                )
              })}
            </View>
          </>
        )}
        <Space my={2} />
        <DataProvider />
      </ScrollView>
    </Layout>
  </SafeAreaView>
)
