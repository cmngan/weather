import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import Text from 'components/Text'
import { Col } from 'components/Layout'

import WeatherCard from './WeatherCard'
import WeatherDetails from './WeatherDetails'

import { CSS_MOBILE_BREAKPOINT } from 'config'

const Container = styled(Col)`
  @media (min-width: ${CSS_MOBILE_BREAKPOINT}px) {
    flex-direction: row;
  }
`

const Weather = ({ error, fetching, day5, selecting }) => {
  return (
    selecting ? null :
    error ? <Text>{error.message}</Text> :
    fetching ? <Text>Getting Data</Text> :
    <Container>
      <Col flex={1}>
        {day5.map((_, index) => <WeatherCard key={index} index={index} />)}
      </Col>
      <WeatherDetails />
    </Container>
  )
}


const mapStateToProps = state => {
  const {error, fetching, day5} = state.weather
  return {
    error, fetching, day5,
    selecting: state.location.selecting
  }
}

export default connect(mapStateToProps, null)(Weather)
