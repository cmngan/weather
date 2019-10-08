import {
  LOCATION_CHANGE
} from '../actions/actionTypes'

const initialState = {
  name: 'Hong Kong',
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
