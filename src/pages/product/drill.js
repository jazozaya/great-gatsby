import React from 'react'
import Helmet from 'react-helmet'

import Drill from 'components/product/drill'

export default class MyPrint extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Drill Holes </title>
          <meta name="description" content="The V-One Drill can drill all your holes automatically. Creating 2 layered boards is a breeze." />
        </Helmet>
        <Drill />
      </div>
    )
  }
}
