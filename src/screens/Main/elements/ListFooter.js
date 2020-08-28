import React from 'react'
import { View } from 'react-native'
import { Spinner } from '@ui-kitten/components'
import styled from 'styled-components'
import { Space } from '~/components'

const Wrapper = styled(View)`
  align-items: center;
`

export default () => (
  <Wrapper>
    <Space my={1} />
    <Spinner />
    <Space my={1} />
  </Wrapper>
)
