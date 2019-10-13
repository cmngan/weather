import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

const P = styled.p`
  margin: 0px;
  padding: 4px;
  ${p => p.onClick && css`cursor: pointer;`}
  ${p => p.XS && css`font-size: 12px;`}
  ${p => p.S && css`font-size: 16px;`}
  ${p => p.M && css`font-size: 20px;`}
  ${p => p.L && css`font-size: 24px;`}
  ${p => p.XL && css`font-size: 28px;`}
  ${p => p.H1 && css`font-size: 38px;`}
`

export default (props) => {
  return <P {...props} />
}