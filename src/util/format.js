export function toDay(date) {
  return [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ][new Date(date * 1000).getDay()]
}

export function degToWord(deg) { // not sure the naming
  return deg < 45 ? 'ENN' :
    deg < 90 ? 'ENE' :
    deg < 135 ? 'ESE' :
    deg < 180 ? 'ESS' :
    deg < 225 ? 'WSS' :
    deg < 270 ? 'WSW' :
    deg < 315 ? 'WNW' :
    'WNN'
}