import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { connect } from 'react-redux'

import Text from 'components/Text'
import { Row, Col } from 'components/Layout'
import Card from 'components/Card'
import Hr from 'components/Hr'

import { toDay, degToWord } from 'util/format'
import { CSS_MOBILE_BREAKPOINT } from 'config'

const WeatherDetails = ({ weather, selectedDay }) => {
  const cardRef = useRef(null)
  useEffect(() => {
    if(selectedDay !== null && cardRef.current && window.innerWidth < CSS_MOBILE_BREAKPOINT) cardRef.current.scrollIntoView({ block: 'start',  behavior: 'smooth' })
  }, [selectedDay])
  if(!weather) return null
  return (
    <Card center flex={1} ref={cardRef}>
      <Text XL>{`${toDay(weather[0].dt)} (${weather[0].dt_txt.slice(0, 10)})`}</Text>
      <Row flexWrap>
        {weather.map(({ dt, dt_txt, main: { temp_max, temp_min, temp }, weather: [{description, icon}], wind: { speed, deg } }) => 
          <Card key={dt} flex={1}>
            <Text M>{dt_txt.slice(11, 16)}</Text>
            <Row centerVertical>
              <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
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
        )}
      </Row>
    </Card>
  )
}

const mapStateToProps = state => ({
  weather: state.weather.day5[state.weather.selectedDay],
  selectedDay: state.weather.selectedDay
})

export default connect(mapStateToProps, null)(WeatherDetails)
