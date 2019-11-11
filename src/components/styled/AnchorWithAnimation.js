import styled from 'styled-components'
import { color } from './_variables'

export default styled.a`
  transition-duration: 0.5s;
  transition-property: transform, color, text-shadow;
  transform-origin: bottom;
  text-shadow: 0.1em 0.1em ${color.shadow};
  color: ${props => props.color || color.primary};

  :hover {
    transform: translateY(-0.2rem) translateX(-0.1rem);
    color: ${props => props.color || color.primary};
    text-shadow: calc(0.1rem + 0.1em) calc(0.2rem + 0.1em) ${color.shadow};
  }
`