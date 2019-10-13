import location from './reducers/location'
import weather from './reducers/weather'
import { combineReducers } from 'redux'

export default combineReducers({
  location,
  weather
})