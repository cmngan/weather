import { WEATHER_API_KEY } from '../config'

export const getWeather = async (cityId) => {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${WEATHER_API_KEY}&units=metric`)
    const json = await res.json()
    return json
  } catch (error) {
    // do some logging
    throw error
  }
}