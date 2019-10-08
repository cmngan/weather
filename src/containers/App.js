import React from 'react'

import { connect } from 'react-redux'
import { onChangeLocation } from '../actions/location'

function App({locationName}) {
  return (
    <div>{locationName}</div>
  )
}

const mapStateToProps = state => ({
  locationName: state.location.name
})
const mapDispatchToProps = {
  onChangeLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
