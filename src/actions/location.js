import { LOCATION_CHANGE } from './actionTypes'

export const onChangeLocation = name => ({
  type: LOCATION_CHANGE,
  payload: { name }
})