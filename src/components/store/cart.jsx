import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import CollectionTab from 'components/store/utils/collectionTab'
import ProductSnippet from 'components/store/utils/productSnippet'
import Button from 'components/common/button'

import { fetchCart } from 'components/store/api'

export default class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart = null
    };
  }

  componentWillMount() {

    // If a cart has been created. Retrieve it?
    fetchCart().then((cart) => this.setState({cart: cart})
  }

  renderLineItems() {
    
    this.state.cart
  }

  render() {
    const { cart } = this.state

    if (!cart) {
      return null;
    }

    return (
      <section className="cart-wrapper">

      </section>
    );
  }
}
