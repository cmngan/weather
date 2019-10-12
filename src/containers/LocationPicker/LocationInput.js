import React, { useState, useEffect } from 'react'

import styled, { css } from 'styled-components'

import { connect } from 'react-redux'
import { onChangeLocation } from 'actions/location'

import Input from 'components/Input'
import Text from 'components/Text'
import { Col } from 'components/Layout'

import cityList from 'resources/city.list.min.json'

const Box = styled(Col)`
  ${p => p.open && css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  `}
`

function LocationInput({ location: { name, id } }) {
  const [open, setOpen] = useState(false)
  const [locationText, setLocationText] = useState(name)
  console.log(cityList)
  return (
    <Box open={open}>
      <Text>Please select a location</Text>
      <Input value={locationText} onChange={({ target: {value} }) => setLocationText(value)}/>
    </Box>
  )
}

const mapStateToProps = state => ({
  location: state.location
})
const mapDispatchToProps = {
  onChangeLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationInput)
