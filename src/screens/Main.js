import React from 'react'
import { Layout } from '@ui-kitten/components'
import { FlatList, SafeAreaView } from 'react-native'
import api from '~/api'

export default () => (
  <Layout style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList />
    </SafeAreaView>
    {console.log(api.comics)}
  </Layout>
)
