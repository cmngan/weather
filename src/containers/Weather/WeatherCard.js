import React from 'react'

import { connect } from 'react-redux'
import { selectDay } from 'actions/weather'

import Text from 'components/Text'
import { Row, Col } from 'components/Layout'
import Card from 'components/Card'
import Hr from 'components/Hr'

import { toDay, degToWord } from 'util/format'

const WeatherCard = ({
  weather: { dt, dt_txt, main: { temp_max, temp_min, temp }, weather: [{description, icon}], wind: { speed, deg } },
  selectedDay, selectDay,
  index
}) => 
  <Card key={dt} onClick={() => selectDay(index)} selected={index === selectedDay}>
    <Text M>{`${toDay(dt)} (${dt_txt.slice(0, 10)})`}</Text>
    <Row centerVertical>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={`weather icon: ${description}`} />
      <Text>{description}</Text>
    </Row>
    <Row centerVertical>
      <Text H1>{temp}°</Text>
      <Col>
        <Text XS>{temp_min}°C</Text>
        <Hr />
        <Text XS>{temp_max}°C</Text>
      </Col>
    </Row>
    <Text>{`Wind: ${speed}m/s ${degToWord(deg)}`}</Text>
  </Card>

const mapStateToProps = (state, props) => ({
  selectedDay: state.weather.selectedDay,
  weather: state.weather.day5[props.index][0]
})
const mapDispatchToProps = {
  selectDay
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCard)
