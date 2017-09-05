import React from 'react'
import Helmet from 'react-helmet'
import Product from 'components/store/product'
import { CookiesProvider } from 'react-cookie'

export default class MyProduct extends React.Component {

  render() {
    return (
      <CookiesProvider>
        <Product query={this.props.location.search}/>
      </CookiesProvider>
    )
  }
}
