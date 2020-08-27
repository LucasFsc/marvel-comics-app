import md5 from 'js-md5'
// eslint-disable-next-line import/no-unresolved
import { PUBLIC_API_KEY, PRIVATE_API_KEY } from '@env'

export default () => {
  const ts = Date.now()

  return {
    ts,
    hash: md5
      .create()
      .update(ts + PRIVATE_API_KEY + PUBLIC_API_KEY)
      .hex()
  }
}
