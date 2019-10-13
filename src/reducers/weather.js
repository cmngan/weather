import {
  WEATHER_GET_REQUEST, WEATHER_GET_RESPONSE, WEATHER_GET_ERROR,
  WEATHER_SELECT_DAY
} from '../actions/actionTypes'

const initialState = {
  fetching: false,
  error: null,
  list: [],
  day5: [],
  selectedDay: null
}

const ACTION_HANDLERS = {
  [WEATHER_SELECT_DAY]: (state, action) => ({
    ...state,
    selectedDay: action.payload
  }),
  [WEATHER_GET_REQUEST]: (state) => ({
    ...state,
    fetching: true,
    selectedDay: null,
    error: null
  }), 
  [WEATHER_GET_RESPONSE]: (state, action) => {
    // console.log(action.payload)
    return ({
      ...state,
      fetching: false,
      list: action.payload.list,
      day5: action.payload.list
        .reduce( (p, c) => {
          const lastDay = p[p.length -1]
          if(lastDay && lastDay[0].dt_txt.slice(0, 11) === c.dt_txt.slice(0, 11)) lastDay.push(c)
          else p.push([c])
          return p
        }, [])
        .slice(0, 5)
    }) 
  },
  [WEATHER_GET_ERROR]: (state, action) => ({
    ...state,
    fetching: false,
    error: action.payload
  })
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
