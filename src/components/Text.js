import React, { useEffect } from 'react'
import styled from 'styled-components'

const P = styled.p`
  margin: 4px;
`

export default (props) => {
  return <P {...props} />
}