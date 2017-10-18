import React from 'react'
import { Redirect } from 'react-router'
import Bowser from 'bowser'

import Button from 'components/common/button'
import Link from 'gatsby-link'
import SpinnerLoader from 'components/common/spinnerLoader'
import EmptyCart from './empty_cart.min.svg'

import { fetchRecentCart } from 'components/store/api'

import './cart.scss'

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
    this.state.cart.updateLineItem(id, Math.max(1,Math.round(event.target.value))).then(cart => this.setState({cart: cart}))
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

  renderItemMobile(product, index) {
    const destination = `/store/product/?title=${product.title}&productId=${product.product_id}`
    return (
      <div key={index} className="cart-row-mobile">
        <div className="cart-row-details">
          <img src={product.image.src} />
          <div>
            <Link to={destination} className="title">{product.title}</Link>
            {product.variant_title !== "Default Title" ? <p>{product.variant_title}</p> : null }
            <p><a className="remove" onClick={() => this.removeItemFromCart(product.id)}>Remove</a></p>
          </div>
        </div>
        <div className="cart-row-numbers">
          <p className="price">${product.price}</p>
          <p><input className="quantity-input" id="number" type="number" value={product.quantity} min="1" max="100" onChange={(event) => this.updateLineItem(product.id, event)}/></p>
          <p className="total">${product.line_price}</p>
        </div>
      </div>
    )

  }

  renderDesktop() {
    const { cart } = this.state
    return (
      <div>
        <div className="cart-headers">
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        {cart.lineItems.map((product, index) => this.renderItem(product,index))}
        <p className="subtotal pull-right">Subtotal: ${cart.subtotal} USD</p>
        <p className="pull-right"><i>Shipping, taxes, and discounts will be calculated at checkout</i></p>
        <div className="cart-buttons pull-right">
          <Button label="Continue Shopping" url="/store/" internal={true} color="dark"/>
          <Button label="Checkout" url={cart.checkoutUrl} internal={false} color="light"/>
        </div>
      </div>
    )
  }

  renderMobile() {
    const { cart } = this.state
    return (
      <div>
        <div className="cart-headers-mobile">
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        {cart.lineItems.map((product, index) => this.renderItemMobile(product,index))}
        <p className="subtotal pull-right">Subtotal: ${cart.subtotal} USD</p>
        <p className="pull-right"><i>Shipping, taxes, and discounts will be calculated at checkout</i></p>
        <div className="cart-buttons pull-center">
          <Button label="Continue" url="/store/" internal={true} color="dark"/>
          <Button label="Checkout" url={cart.checkoutUrl} internal={false} color="light"/>
        </div>
      </div>
    )
  }


  renderCart() {
    const { cart } = this.state

    if(!cart) {
      return <SpinnerLoader />
    }

    if(!cart.lineItems.length) {
      return (
        <div className="pull-center">
          <p>Your cart is currently empty!</p>
          <img src={EmptyCart} width="200px"/>
          <p>Browse through our collections to view all of our product offerings.</p>
          <Button label="Continue Shopping" url="/store/" internal={true} color="dark"/>
        </div>
      )
    }
    return Bowser.mobile ? this.renderMobile() : this.renderDesktop();
  }

  render() {
    return (
      <section className="cart-wrapper">
        <h1>Your Cart</h1>
        {this.renderCart()}
      </section>
    );
  }
}
