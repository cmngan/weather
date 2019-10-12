import { WEATHER_API_KEY } from '../config'

export const getWeather = async () => {
  try {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${WEATHER_API_KEY}`)
    const json = await res.json()
    return json
  } catch (error) {
    // do some logging
    throw error
  }
}