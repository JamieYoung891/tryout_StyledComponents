import React, { Fragment } from 'react';

import { Reset } from './components/styled'
import Header from './components/Header/'
import Content from './components/Content/'
import Footer from './components/Footer/'



const App = () => (
  <Fragment>
    <Reset />
    <Header />
    <Content />
    <Footer />
  </Fragment>
);

export default App