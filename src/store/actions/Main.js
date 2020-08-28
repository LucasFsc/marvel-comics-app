import api from '~/api'

const actionTypes = {
  FETCH_COMICS: 'FETCH_COMICS'
}

const fetchComics = () => async (dispatch, getState) => {
  const {
    main: { comics, offset, limit, total }
  } = getState()

  if (total && comics.lenght >= total) return

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
  }
}

export { actionTypes, fetchComics }
