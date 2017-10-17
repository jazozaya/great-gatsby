import React from 'react'
import Helmet from 'react-helmet'
import Cart from 'components/store/cart'

export default class MyCart extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Cart</title>
          <meta name="description" content="Your shopping cart. Are you ready to checkout?" />
        </Helmet>
        <Cart />
      </div>
    )
  }
}

// TODO - When they are in the checkout page. Could we show them more relevant products?
