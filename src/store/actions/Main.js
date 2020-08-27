import api from '~/api'

const actionTypes = {
  FETCH_COMICS: 'FETCH_COMICS'
}

const fetchComics = () => async (dispatch, getState) => {
  const {
    main: { offset, limit }
  } = getState()

  try {
    // const result = await api.comics.fetch({ offset, limit })
    // dispatch({ type: FETCH_COMICS, payload: '' })
  } catch (error) {
    // show error message
  }

  return {}
}

export { actionTypes, fetchComics }
