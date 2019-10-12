import {
  LOCATION_CHANGE
} from '../actions/actionTypes'

const initialState = {
  name: '',
  id: null,
  error: null
}

const ACTION_HANDLERS = {
  [LOCATION_CHANGE]: (state, action) => ({
    ...state,
    name: action.payload.name
  })
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
