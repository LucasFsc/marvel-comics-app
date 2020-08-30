import { actionTypes } from '../actions/main'

const initialState = {
  characterSearchIds: [],
  characterSearchComics: [],
  characterSearchOffset: 0,
  characterSearchLimit: 10,
  characterSearchTotal: undefined,
  comics: [],
  offset: 0,
  limit: 10,
  listRefreshing: false,
  searching: false,
  searchingText: null,
  total: undefined
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
    case actionTypes.FETCH_CHARACTER_IDS_BY_NAME: {
      return {
        ...state,
        characterSearchIds: payload,
        characterSearchComics: [],
        characterSearchOffset: 0,
        characterSearchTotal: undefined
      }
    }
    case actionTypes.FETCH_COMICS_BY_CHARACTER_IDS: {
      const { total, comics: incomingComics } = payload
      return {
        ...state,
        characterSearchComics: [
          ...state.characterSearchComics,
          ...incomingComics
        ],
        characterSearchTotal: total
      }
    }
    case actionTypes.INCREASE_OFFSET: {
      return {
        ...state,
        offset: state.offset + payload
      }
    }
    case actionTypes.INCREASE_CHARACTER_OFFSET: {
      return {
        ...state,
        characterSearchOffset: state.characterSearchOffset + payload
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

        characterSearchIds: [],
        characterSearchComics: [],
        characterSearchOffset: 0,
        characterSearchTotal: undefined
      }
    }

    default:
      return state
  }
}
