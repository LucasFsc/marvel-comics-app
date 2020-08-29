import api from '~/api'

const actionTypes = {
  FETCH_COMICS: 'FETCH_COMICS',
  FETCH_CHARACTER_IDS_BY_NAME: 'FETCH_CHARACTER_IDS_BY_NAME',
  FETCH_COMICS_BY_CHARACTER_IDS: 'FETCH_COMICS_BY_CHARACTER_IDS',
  INCREASE_OFFSET: 'INCREASE_OFFSET',
  INCREASE_CHARACTER_OFFSET: 'INCREASE_CHARACTER_OFFSET',
  LIST_REFRESHING: 'LIST_REFRESHING',
  ON_SEARCHING_TEXT: 'ON_SEARCHING_TEXT',
  TOGGLE_SEARCHING: 'TOGGLE_SEARCHING'
}

const fetchComics = (quantity = 10) => async (dispatch, getState) => {
  const {
    main: { offset, limit }
  } = getState()

  dispatch({
    type: actionTypes.LIST_REFRESHING,
    payload: true
  })

  try {
    const {
      data: { data: { total, results: comics } = {} } = {}
    } = await api.comics.fetch({ offset, limit })

    dispatch({
      type: actionTypes.FETCH_COMICS,
      payload: { comics, total }
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
      payload: quantity
    })
  }
}

const fetchCharacterIdsByName = name => async dispatch => {
  try {
    const {
      data: { data: { results = [] } = {} } = {}
    } = await api.characters.fetchByName({ name })

    const characterIds = results.map(({ id }) => id)

    dispatch({
      type: actionTypes.FETCH_CHARACTER_IDS_BY_NAME,
      payload: characterIds
    })
  } catch (error) {
    // show error message
  }
}

const fetchComicsByCharacterIds = (characterIds, quantity = 10) => async (
  dispatch,
  getState
) => {
  const {
    main: { characterSearchOffset, characterSearchLimit }
  } = getState()

  dispatch({
    type: actionTypes.LIST_REFRESHING,
    payload: true
  })

  try {
    const {
      data: { data: { total, results: comics } = {} } = {}
    } = await api.comics.fetchByCharacterIds({
      characters: characterIds,
      offset: characterSearchOffset,
      limit: characterSearchLimit
    })

    dispatch({
      type: actionTypes.FETCH_COMICS_BY_CHARACTER_IDS,
      payload: { comics, total }
    })
  } catch (error) {
    // show error message
  } finally {
    dispatch({
      type: actionTypes.LIST_REFRESHING,
      payload: false
    })

    dispatch({
      type: actionTypes.INCREASE_CHARACTER_OFFSET,
      payload: quantity
    })
  }
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
  fetchCharacterIdsByName,
  fetchComicsByCharacterIds,
  onSearchText,
  toggleSearch
}
