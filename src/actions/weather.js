import { WEATHER_GET_REQUEST, WEATHER_GET_RESPONSE, WEATHER_GET_ERROR, WEATHER_SELECT_DAY } from './actionTypes'
import { getWeather as getWeatherApi } from '../services/api'

export const selectDay = (index) => {
  return {
    type: WEATHER_SELECT_DAY,
    payload: index
  }
}

export const getWeather = (id) => {
  return async dispatch => {
    dispatch({
      type: WEATHER_GET_REQUEST,
    })
    try {
      const r = await getWeatherApi(id)
      dispatch({
        type: WEATHER_GET_RESPONSE,
        payload: r
      })
    } catch (error) {
      dispatch({
        type: WEATHER_GET_ERROR,
        payload: error
      })
    }
  }
}
