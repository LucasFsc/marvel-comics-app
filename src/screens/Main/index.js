import React, { useEffect } from 'react'
import { Layout } from '@ui-kitten/components'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import shortid from 'shortid'
import { main as mainActions } from '~/store/actions'
import { Space } from '~/components'
import { ComicCard, ListFooter, ListHeader } from './elements'

export default ({ navigation: { navigate } }) => {
  const dispatch = useDispatch()
  const comics = useSelector(state => state.main.comics)
  const listRefreshing = useSelector(state => state.main.listRefreshing)

  useEffect(() => {
    dispatch(mainActions.fetchComics())
  }, [])

  const handleComicCardPress = item => {
    // navigate
  }

  const handleOnEndReached = () => {
    if (!listRefreshing) {
      dispatch(mainActions.fetchComics())
    }
  }

  const renderItem = ({ item }) => (
    <ComicCard {...item} onPress={() => handleComicCardPress(item)} />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }} level="3">
        <FlatList
          data={comics}
          refreshing={listRefreshing}
          contentContainerStyle={{
            padding: 16
          }}
          ItemSeparatorComponent={() => <Space my={2} />}
          ListHeaderComponent={ListHeader}
          keyExtractor={() => shortid.generate()}
          renderItem={renderItem}
          ListFooterComponent={listRefreshing && ListFooter}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.5}
        />
      </Layout>
    </SafeAreaView>
  )
}
