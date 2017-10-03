import React from 'react'
import Helmet from 'react-helmet'
import Cart from 'components/store/cart'
import queryString from 'query-string'

export default class MyCart extends React.Component {

  render() {
    return (
      <section className="store-wrapper">
        <Cart />
      </section>
    )
  }
}

// TODO - When they are in the checkout page. Could we show them more relevant products?
