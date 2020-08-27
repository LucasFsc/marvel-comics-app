import React, { useEffect } from 'react'
import { Layout } from '@ui-kitten/components'
import { FlatList, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import api from '~/api'
import { main } from '~/store/actions'

export default () => {
  const dispatch = useDispatch()
  const comics = useSelector(state => state.main.comics)

  useEffect(() => {
    dispatch(main.fetchComics())
  }, [])

  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList data={comics} />
      </SafeAreaView>
    </Layout>
  )
}
