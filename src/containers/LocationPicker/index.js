import React, { useEffect } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { onChangeLocation } from '../../actions/location'

import LocationInput from './LocationInput'
import Text from '../../components/Text'
import { Col } from '../../components/Layout'

function LocationPicker({locationName}) {
  return (
    <Col center>
      <LocationInput />
    </Col>
  )
}

const mapStateToProps = state => ({
  locationName: state.location.name
})
const mapDispatchToProps = {
  onChangeLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicker)
