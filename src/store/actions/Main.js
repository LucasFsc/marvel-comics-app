import api from '~/api'
import { characterSearch } from '~/helpers'

const actionTypes = {
  FETCH_COMICS: 'FETCH_COMICS',
  FETCH_COMICS_BY_CHARACTER_NAME: 'FETCH_COMICS_BY_CHARACTER_NAME',
  INCREASE_OFFSET: 'INCREASE_OFFSET',
  LIST_REFRESHING: 'LIST_REFRESHING',
  ON_SEARCHING_TEXT: 'ON_SEARCHING_TEXT',
  TOGGLE_SEARCHING: 'TOGGLE_SEARCHING'
}

const fetchComics = () => async (dispatch, getState) => {
  const {
    main: { offset, limit }
  } = getState()

  dispatch({
    type: actionTypes.LIST_REFRESHING,
    payload: true
  })

  try {
    const {
      data: { data: { total: numberOfComics, results } = {} } = {}
    } = await api.comics.fetch({ offset, limit })

    dispatch({
      type: actionTypes.FETCH_COMICS,
      payload: { comics: results, total: numberOfComics }
    })
  } catch (error) {
    // show error message
  } finally {
    dispatch({
      type: actionTypes.LIST_REFRESHING,
      payload: false
    })

    dispatch({
      type: actionTypes.INCREASE_OFFSET,
      payload: 10
    })
  }
}

const fetchComicsByCharacterName = text => (dispatch, getState) => {
  const {
    main: { comics }
  } = getState()

  dispatch({
    type: actionTypes.FETCH_COMICS_BY_CHARACTER_NAME,
    payload: characterSearch(text, comics)
  })
}

const onSearchText = text => dispatch => {
  dispatch({
    type: actionTypes.ON_SEARCHING_TEXT,
    payload: text
  })
}

const toggleSearch = () => (dispatch, getState) => {
  const {
    main: { searching }
  } = getState()

  dispatch({
    type: actionTypes.TOGGLE_SEARCHING,
    payload: !searching
  })
}

export {
  actionTypes,
  fetchComics,
  fetchComicsByCharacterName,
  onSearchText,
  toggleSearch
}
