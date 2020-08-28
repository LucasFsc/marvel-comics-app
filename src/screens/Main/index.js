import React, { useEffect } from 'react'
import { Layout } from '@ui-kitten/components'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { main as mainActions } from '~/store/actions'
import { Space } from '~/components'
import { ComicCard, ListHeader } from './elements'

export default ({ navigation: { navigate } }) => {
  const dispatch = useDispatch()
  const comics = useSelector(state => state.main.comics)

  useEffect(() => {
    dispatch(mainActions.fetchComics())
  }, [])

  const handleComicCardPress = item => {
    // navigate()
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <Layout style={{ flex: 1 }}>
        <FlatList
          data={comics}
          contentContainerStyle={{
            padding: 16
          }}
          ItemSeparatorComponent={() => <Space my={2} />}
          ListHeaderComponent={ListHeader}
          keyExtractor={({ id }) => String(id)}
          renderItem={({ item }) => (
            <ComicCard {...item} onPress={() => handleComicCardPress(item)} />
          )}
        />
      </Layout>
    </SafeAreaView>
  )
}
