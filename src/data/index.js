export const dataType = {
  nextArticleId: 'nextArticleId',
  title: 'title',
  subtitle: 'subtitle',
  content: 'content',
  source: 'source'
}

export default {
  [dataType.nextArticleId]: 4,

  0: {
    [dataType.title]: 'Styled Components',

    [dataType.subtitle]: 'Visual primitives for the component age.',

    [dataType.content]: [
      'Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!',
      "styled-components is compatible with both React (for web) and React Native – meaning it's the perfect choice even for truly universal apps! See the documentation about React Native for more information.",
      'Supported by Front End Center. Thank you for making this possible!'
    ],

    [dataType.source]: "https://github.com/styled-components/styled-components"
  },

  1: {
    [dataType.title]: 'CSS Modules',

    [dataType.content]: [
      'CSS was invented to style web pages. A typical web page contains many elements or components such as menus, buttons, input boxes, and so on. Styles defined in a CSS file are accessible to the entire web page in which that file is included. In other words, all style definitions have global scope. What if we want some styles to be visible only to one component of the page?',
      "CSS was defined to style documents, not UI components. The lack of modularity in CSS language makes it hard to maintain complex or legacy code. Developers are afraid to make code changes since it's easy to break something when CSS definitions are global.",
      "CSS Modules solves these problems by limiting the scope to components. CSS Modules is not an official standard. It's a community-led effort popularized by the ReactJS ecosystem."
    ],

    [dataType.source]: "https://devopedia.org/css-modules"
  },

  2: {
    [dataType.title]: 'SASS',

    [dataType.subtitle]: 'CSS with superpowers',

    [dataType.content]: [
      'Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.'
    ],

    [dataType.source]: "https://sass-lang.com/"
  },

  3: {
    [dataType.title]: 'BEM Methodology',

    [dataType.content]: [
      'When updating web/mobile user interfaces, frontend developers often worry about breaking existing code or introducing inconsistencies. Selecting elements on a UI is often problematic because of long cascading rules, nested styles, rules that are unnecessarily high in specificity, and naming everything in the global namespace. BEM provides a modular approach to solve these problems.',
      'BEM is a methodology, an approach and a naming convention to write better CSS styling and achieve consistent JS behaviour. BEM stands for Block, Element and Modifier. These three are called BEM Entities.',
      "BEM is not a W3C standard but it's recommended by those who have adopted it and reaped its benefits. Among its adopters are Yandex, Google, BBC, Alfa Bank, and BuzzFeed. BEM also works nicely with CSS languages (Sass, etc.), and frontend frameworks (React, etc.)."
    ],

    [dataType.source]: "https://devopedia.org/bem-methodology"
  }
}