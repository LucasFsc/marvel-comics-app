import { actionTypes } from '../actions/main'

const initialState = {
  comics: [],
  offset: 0,
  limit: 10,
  total: undefined,
  listRefreshing: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_COMICS: {
      const { total, comics: incomingComics } = payload
      return { ...state, comics: [...state.comics, ...incomingComics], total }
    }
    case actionTypes.INCREASE_OFFSET: {
      return {
        ...state,
        offset: state.offset + payload
      }
    }
    case actionTypes.LIST_REFRESHING: {
      return {
        ...state,
        listRefreshing: payload
      }
    }
    default:
      return state
  }
}
