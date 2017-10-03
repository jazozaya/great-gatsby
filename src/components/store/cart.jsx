import React from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

import ProductSnippet from 'components/store/utils/productSnippet'
import Button from 'components/common/button'
import Link from 'components/common/linkWrapper'

import { fetchRecentCart } from 'components/store/api'

export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: null,
    };
  }

  componentWillMount() {
    fetchRecentCart().then(cart => this.setState({cart: cart}))
  }
  removeItemFromCart(id){
    this.state.cart.removeLineItem(id).then(cart => this.setState({cart: cart}))
  }
  updateLineItem(id, event) {
    this.state.cart.updateLineItem(id, Math.round(event.target.value)).then(cart => this.setState({cart: cart}))
  }

  renderItem(product, index) {
    const destination = `/store/product/?title=${product.title}&productId=${product.product_id}`
    return (
      <div key={index} className="cart-row">
        <img src={product.image.src} />
        <div className="cart-row-details">
          <Link to={destination} className="title">{product.title}</Link>
          {product.variant_title !== "Default Title" ? <p>{product.variant_title}</p> : null }
          <p><a className="remove" onClick={() => this.removeItemFromCart(product.id)}>Remove</a></p>
        </div>
        <div className="cart-row-numbers">
          <p className="price">${product.price}</p>
          <p><input className="quantity-input" id="number" type="number" value={product.quantity} min="1" max="100" onChange={(event) => this.updateLineItem(product.id, event)}/></p>
          <p className="total">${product.line_price}</p>
        </div>
      </div>
    )
  }

  render() {
    const { cart, checkingOut } = this.state

    console.log("cart State", cart)

    if (!cart || !cart.lineItems.length) {
      return (
        <section className="cart-wrapper pull-center">
          <h1>Uh Oh!. Empty Cart.</h1>
          <p>Your cart is currently empty. Browse through our collections to view all of our product offerings.</p>
          <p>If you have any issues with our webstore, please contact <strong>sales@voltera.io</strong> for assistance.</p>
          <Button label="Continue Shopping" url="/store/" internal={true} color="dark"/>
        </section>
      )
    }

    return (
      <section className="cart-wrapper">
        <h1>Your Cart</h1>
        <div className="cart-headers">
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        {cart.lineItems.map((product, index) => this.renderItem(product,index))}
        <p className="subtotal pull-right">Subtotal: ${cart.subtotal}</p>
        <p className="pull-right"><i>Shipping, taxes, and discounts will be calculated at checkout</i></p>
        <div className="cart-buttons pull-right">
          <Button label="Continue Shopping" url="/store/" internal={true} color="dark"/>
          <Button label="Checkout" url={cart.checkoutUrl} internal={false} color="light"/>
        </div>
      </section>
    );
  }
}
