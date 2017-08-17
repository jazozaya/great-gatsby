import React from 'react'
import Helmet from 'react-helmet'

import Technology from 'components/product/technology'

export default class MyTechnology extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | How it works</title>
          <meta name="description" content="The Voltera V-One dispenses conductive ink and solder paste onto FR4, but really... you can use it for whatever you want." />
        </Helmet>
        <Technology/>
      </div>
    )
  }
}
