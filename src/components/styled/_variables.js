import { css } from 'styled-components'

export const color = {
  primary: 'hsl(42, 96%, 54%)',
  secondary: 'hsl(356, 95%, 46%)',
  gray: 'hsl(42, 50%, 30%)',
  white: 'hsl(42, 90%, 98%)',
  whiteDark: 'hsl(42, 90%, 90%)',
  shadow: 'hsla(42, 100%, 30%, 0.2)'
}

export const viewportWidth = {
  mobile: "320px",
  mobileLarge: "360px",
  mobileLarger: "400px",
  tablet: "768px",
  tabletLarge: "1024px",
}

export const fontSize = {
  mobile: "12px",
  mobileLarge: "14px",
  mobileLarger: "16px",
  tablet: "18px",
  tabletLarge: "22px"
}



export const customizedCSS = {

  animation: {
    onHover: {
      translateY: css`
        transition-duration: 0.5s;
        transition-property: transform, color;
        transform-origin: bottom;
        
        :hover {
          transform: translateY(-0.2rem);
          color: ${color.secondary};
        }
      `
    }
  },

  shadow: {
    box: (blur = '0.1em') => css`
      box-shadow: 0 calc(0.1em - 1px) ${blur} 0.1em ${color.shadow};
    `,
    text: css`
      text-shadow: 0.1em 0.1em ${color.shadow};
    `
  }
}