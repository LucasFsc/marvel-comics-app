import React, { useEffect } from 'react'
import { Layout } from '@ui-kitten/components'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import shortid from 'shortid'
import { main as mainActions } from '~/store/actions'
import { Space } from '~/components'
import { ListEmpty, ListFooter, ListHeader, ListItem } from './elements'
import { debounce } from '~/utils'

export default ({ navigation: { navigate } }) => {
  const dispatch = useDispatch()

  const {
    characterSearchIds,
    characterSearchComics,
    characterSearchTotal,
    comics,
    listRefreshing,
    searching,
    searchingText,
    total
  } = useSelector(state => state.main)

  useEffect(() => {
    dispatch(mainActions.fetchComics())
  }, [])

  useEffect(() => {
    if (searching && searchingText) {
      debounce(() => {
        dispatch(mainActions.fetchCharacterIdsByName(searchingText))
      }, 700)
    }
  }, [searchingText])

  useEffect(() => {
    if (characterSearchIds.length) {
      dispatch(mainActions.fetchComicsByCharacterIds(characterSearchIds))
    }
  }, [characterSearchIds])

  const handleComicCardPress = item => {
    navigate('ComicDetails', { ...item })
  }

  const handleOnEndReached = () => {
    if (
      searching &&
      !listRefreshing &&
      characterSearchTotal &&
      characterSearchComics.length < characterSearchTotal
    ) {
      dispatch(mainActions.fetchComicsByCharacterIds(characterSearchIds))
    } else if (!listRefreshing && total && comics.length < total) {
      dispatch(mainActions.fetchComics())
    }
  }

  const renderItem = ({ item }) => (
    <ListItem {...item} onPress={() => handleComicCardPress(item)} />
  )

  const keyExtractor = () => shortid.generate()

  const ItemSeparatorComponent = () => <Space my={2} />

  const ListFooterComponent = listRefreshing && ListFooter

  const ListEmptyComponent = !listRefreshing && ListEmpty

  const data = searching ? characterSearchComics : comics

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }} level="3">
        <FlatList
          data={data}
          refreshing={listRefreshing}
          contentContainerStyle={{
            padding: 16
          }}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListHeaderComponent={ListHeader}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListFooterComponent={ListFooterComponent}
          ListEmptyComponent={ListEmptyComponent}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.5}
          removeClippedSubviews
        />
      </Layout>
    </SafeAreaView>
  )
}
