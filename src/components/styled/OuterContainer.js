import React from 'react'
import styled from 'styled-components'

const Inner = styled.div`
  width: 82%;
  max-width: calc( 100vmin + 1 / 3 * 100vmin);
  margin-right: auto;
  margin-left: auto;

  ${props => props.css}
`

const Outer = styled.div`
  padding: 3rem 0;

  ${props => props.css}
`

export default ({ children, outerAs, innerAs, outerCSS, innerCSS }) => (
  <Outer as={outerAs} css={outerCSS} >
    <Inner as={innerAs} css={innerCSS}>
      {children}
    </Inner>
  </Outer>
)