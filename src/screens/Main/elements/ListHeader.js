import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import MarverLogo from '~/assets/images/marvel-logo.svg'
import { Space } from '~/components'

const Wrapper = styled(View)`
  align-items: center;
`

export default () => (
  <Wrapper>
    <MarverLogo style={{ width: 130, height: 52 }} />
    <Space my={2} />
  </Wrapper>
)
