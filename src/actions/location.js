import { LOCATION_CHANGE, LOCATION_FOCUS } from './actionTypes'
import { getWeather } from './weather'

const STORAGE_KEY_ID = 'location-id'
const STORAGE_KEY_NAME = 'location-name'
const setLocation = (id, name) => {
  window.localStorage.setItem(STORAGE_KEY_ID, id)
  window.localStorage.setItem(STORAGE_KEY_NAME, name)
}
const getLocation = () => ({
  id: window.localStorage.getItem(STORAGE_KEY_ID),
  name: window.localStorage.getItem(STORAGE_KEY_NAME)
})

export const getSavedLocation = () => {
  return dispatch => {
    const {id, name} = getLocation()
    if(id) dispatch(onChangeLocation(id, name))
  }
}

export const onChangeLocation = (id, name) => {
  return async dispatch => {
    dispatch({
      type: LOCATION_CHANGE,
      payload: { id, name }
    })
    setLocation(id, name)
    dispatch(getWeather(id))
  }
}


export const onFocusLocation = () => ({
  type: LOCATION_FOCUS
})