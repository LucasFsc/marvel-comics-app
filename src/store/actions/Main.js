import api from '~/api'

const actionTypes = {
  FETCH_COMICS: 'FETCH_COMICS',
  INCREASE_OFFSET: 'INCREASE_OFFSET',
  LIST_REFRESHING: 'LIST_REFRESHING'
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

export { actionTypes, fetchComics }
