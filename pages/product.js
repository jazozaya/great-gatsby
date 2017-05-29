import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'

import Product from 'components/product'

export default class MyGallery extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Product />
      </div>
    )
  }
}
