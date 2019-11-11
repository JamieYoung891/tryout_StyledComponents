import styled from 'styled-components'
import { color, customizedCSS } from './_variables'

export default styled.button`

  padding: 0.5em 1.5em;
  border-radius: 0.5em;
  line-height: 1;

  transition-duration: 0.5s;
  transition-property: transform;
  transform-origin: bottom;

  background: linear-gradient(
    to top, ${color.whiteDark}, white
  );

  ${customizedCSS.shadow.box()}

  font-weight: 800;
  ${customizedCSS.shadow.text}
  color: ${color.primary};
  
  cursor: pointer;
  :hover {
    transform: translateY(calc(-0.5em + 1px));
    background: linear-gradient(
      to top, ${color.white}, ${color.primary}
    );
    color: ${color.secondary};
  }

  ${props => props.css}
`