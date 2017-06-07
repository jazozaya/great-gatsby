import React from 'react'
import Helmet from 'react-helmet'

import About from 'components/about'
import Awards from 'components/awards'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <About />
        <Awards />
      </div>
    )
  }
}
