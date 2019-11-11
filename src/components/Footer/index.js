import React from 'react'
import { css } from 'styled-components'
import { OuterContainer as Footer } from '../styled'

const footerCSS = css`
  text-align: right;

  @media (orientation:landscape) {
    & > * {
      display: inline-block;
      margin-right: 1em;
    }
    
    & > h2 {
      margin-right: 0;
    }
  }
`


export default () => (
  <Footer outerAs="footer" innerCSS={footerCSS}>
    <h4>Jamie Young</h4>
    <p>{"\u{00A9}2019 all reserved, otherwise notified."}</p>
  </Footer>
)