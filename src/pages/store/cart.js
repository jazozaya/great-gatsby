import React from 'react'
import Helmet from 'react-helmet'
import CollectionTab from 'components/store/utils/collectionTab'
import Cart from 'components/store/react'
import queryString from 'query-string'

export default class MyCart extends React.Component {

  render() {
    return (
      <section className="store-wrapper">
        <CollectionTab/>
        <h1>Your Cart</h1>
        <Cart />
      </section>
    )
  }
}

// TODO - When they are in the checkout page. Could we show them more relevant products?
