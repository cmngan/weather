import React, { useState, useEffect } from 'react'

import styled, { css } from 'styled-components'

import { connect } from 'react-redux'
import { onChangeLocation, onFocusLocation } from 'actions/location'

import Input from 'components/Input'
import Text from 'components/Text'
import { Col } from 'components/Layout'

import cityList from 'resources/cityList'

const Box = styled(Col)`
  flex: 1;
  height: 1px;
  width: 90%;
  max-width: 500px;
`

const OptionsWrapper = styled(Col)`
  position: relative;
  height: 0px;
`

const Options = styled(Col)`
  overflow: auto;
  ${p => p.open && css`
    position: absolute;
    top: 0;
    height: 80vh;
    left: 0;
    right: 0;
  `}
`

const Option = styled(Text)`
  :hover {
    background-color: #eee;
  }
`

function LocationInput({ location: { name, id, selecting }, onChangeLocation, onFocusLocation }) {
  const [locationText, setLocationText] = useState(name)
  const locationTextLowerCase = locationText.toLowerCase()
  useEffect(() => {
    setLocationText(name)
  }, [name])
  const filteredCityList = cityList.filter(({ lowerCaseName, lowerCaseCountry }) => lowerCaseName.startsWith(locationTextLowerCase) || lowerCaseCountry.startsWith(locationTextLowerCase))
  return (
    <Box>
      <Input value={locationText} onChange={({ target: {value} }) => setLocationText(value)} onFocus={onFocusLocation} />
      <OptionsWrapper>
        <Options open={selecting}>
          {
            filteredCityList.length ?
              filteredCityList
              .slice(0, 100)
              .map(({ id, name, country }) => <Option key={id} onClick={() => onChangeLocation(id, name)}>{`${name} (${country})`}</Option>)
            : <Text>No result. Please refine the input.</Text>
          }
        </Options>
      </OptionsWrapper>
    </Box>
  )
}

const mapStateToProps = state => ({
  location: state.location
})
const mapDispatchToProps = {
  onChangeLocation, onFocusLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationInput)
