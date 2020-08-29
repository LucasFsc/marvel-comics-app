import { actionTypes } from '../actions/main'

const initialState = {
  comics: [],
  offset: 0,
  limit: 10,
  total: undefined,
  listRefreshing: false,
  searching: false,
  searchingText: null,
  characterRelatedComics: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_COMICS: {
      const { total, comics: incomingComics } = payload
      return {
        ...state,
        comics: [...state.comics, ...incomingComics],
        total
      }
    }
    case actionTypes.FETCH_COMICS_BY_CHARACTER_NAME: {
      return {
        ...state,
        characterRelatedComics: payload
      }
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
    case actionTypes.ON_SEARCHING_TEXT: {
      return {
        ...state,
        searchingText: payload
      }
    }
    case actionTypes.TOGGLE_SEARCHING: {
      return {
        ...state,
        searching: payload,
        searchingText: null,
        characterRelatedComics: []
      }
    }

    default:
      return state
  }
}
