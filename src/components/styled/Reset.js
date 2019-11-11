import { createGlobalStyle } from 'styled-components'
import { color, viewportWidth, fontSize } from './_variables'

export default createGlobalStyle`

  /* Responsive Web Set */
  html{
    font-size: 12px;
    line-height: 1.6;
    color: ${color.gray};

    ${() => {
    let media = ""

    for (const key in viewportWidth) {
      const width = viewportWidth[key];
      media += `
          @media (orientation: portrait) and (min-width: ${width}),
            (orientation: landscape) and (min-height: ${width}) {
            font-size: ${fontSize[key]};
          };
        `
    }
    return media
  }}
  }



  /* Reset */

  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
  }
  
  html, body, h1, h2, h3, h4, h5, h6, p, ul, li, div, a, article {
    box-sizing: border-box;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1 { font-size: 3rem; line-height: 1.1; }
  h2 { font-size: 2rem; line-height: 1.2;}
  h3 { font-size: 1.5rem; line-height: 1.3; }
  h4 { font-size: 1.2rem; line-height: 1.4; }
  h5, h6 { font-size: 1.0rem }

  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }

  ul {
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  button {
    -webkit-appearance: none;
    color: inherit;
    background-color: initial;
    font: inherit;
    padding: 0;
    border-width: 0;
    border-style: unset;
    border-color: unset;
    border-image: unset;
  }

  a {
    display:inline-block;
    color: ${color.secondary};
    text-decoration: none;
    font-weight: 800;
  }
`