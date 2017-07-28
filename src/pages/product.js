import React from 'react'
import Helmet from 'react-helmet'

import Product from 'components/product';
import Specs from 'components/specs'

export default class MyProduct extends React.Component {

  render() {
    return (
      <div>
        <Product />
        <Specs />
      </div>
    )
  }
}
