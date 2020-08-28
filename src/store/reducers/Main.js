import { actionTypes } from '../actions/main'

const initialState = {
  comics: [],
  offset: 0,
  limit: 10,
  total: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_COMICS: {
      const { total, comics } = payload
      return { ...state, comics, total }
    }
    default:
      return state
  }
}
