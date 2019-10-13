import {
  LOCATION_CHANGE,
  LOCATION_FOCUS
} from '../actions/actionTypes'

const initialState = {
  id: null,
  name: '',
  error: null,
  selecting: true
}

const ACTION_HANDLERS = {
  [LOCATION_FOCUS]: (state) => ({
    ...state,
    selecting: true
  }),
  [LOCATION_CHANGE]: (state, action) => ({
    ...state,
    id: action.payload.id,
    name: action.payload.name,
    selecting: false
  })
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
