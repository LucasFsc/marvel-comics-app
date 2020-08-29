import React, { useEffect } from 'react'
import { Layout } from '@ui-kitten/components'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import shortid from 'shortid'
import { main as mainActions } from '~/store/actions'
import { Space } from '~/components'
import { ListFooter, ListHeader, ListItem } from './elements'
import { debounce } from '~/utils'

export default (/* { navigation: { navigate } } */) => {
  const dispatch = useDispatch()

  const {
    characterRelatedComics,
    comics,
    listRefreshing,
    searchingText,
    total
  } = useSelector(state => state.main)

  useEffect(() => {
    dispatch(mainActions.fetchComics())
  }, [])

  useEffect(() => {
    debounce(() => {
      dispatch(mainActions.fetchComicsByCharacterName(searchingText))
    }, 300)
  }, [searchingText])

  const handleComicCardPress = (/* item */) => {
    // navigate
  }

  const handleOnEndReached = () => {
    if (!listRefreshing && total && comics.length < total) {
      dispatch(mainActions.fetchComics())
    }
  }

  const renderItem = ({ item }) => (
    <ListItem {...item} onPress={() => handleComicCardPress(item)} />
  )

  const keyExtractor = () => shortid.generate()

  const ItemSeparatorComponent = () => <Space my={2} />

  const ListFooterComponent = listRefreshing && ListFooter

  const predicate = characterRelatedComics.lenght
    ? characterRelatedComics
    : comics

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }} level="3">
        <FlatList
          data={predicate}
          refreshing={listRefreshing}
          contentContainerStyle={{
            padding: 16
          }}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListHeaderComponent={ListHeader}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListFooterComponent={ListFooterComponent}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.5}
          removeClippedSubviews
        />
      </Layout>
    </SafeAreaView>
  )
}
