import React from 'react'
import Helmet from 'react-helmet'

import About from 'components/about'
import Awards from 'components/common/awards'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | About Us</title>
          <meta name="description" content="Learn about the history and culture at Voltera" />
        </Helmet>
        <About />
        <Awards />
      </div>
    )
  }
}
