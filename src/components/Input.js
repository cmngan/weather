import React, { useEffect } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid #aaa;
  border-radius: 4px;
  box-shadow: 0;
  padding: 8px 12px;
  :focus {
    border: 1px #fff;
  }
`

export default (props) => {
  return <Input {...props}/>
}