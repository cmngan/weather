import React, { useEffect } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { getSavedLocation } from '../../actions/location'

import LocationInput from './LocationInput'
import Text from '../../components/Text'
import { Col } from '../../components/Layout'

const Box = styled(Col)`
  padding: 30px 0;
`

function LocationPicker({ getSavedLocation }) {
  useEffect(() => {
    getSavedLocation()
  }, [getSavedLocation])
  return (
    <Box center>
      <Text>Please select a location</Text>
      <LocationInput />
    </Box>
  )
}

const mapStateToProps = state => ({
  locationName: state.location.name
})
const mapDispatchToProps = {
  getSavedLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicker)
