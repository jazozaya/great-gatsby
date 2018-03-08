import React from 'react'
import { Redirect } from 'react-router'
import Bowser from 'bowser'

import Button from 'components/common/button'
import Link from 'gatsby-link'
import SpinnerLoader from 'components/common/spinnerLoader'
import EmptyCart from './empty_cart.min.svg'
import { fetchRecentCheckout, removeLineItems, updateLineItems } from 'components/store/api'

import './cart.scss'

export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkout: null,
    };
  }

  componentDidMount() {
    fetchRecentCheckout().then(checkout => this.setState({checkout: checkout}))
  }
  removeItemFromCart(lineItemId){
    const { checkout } = this.state
    removeLineItems(checkout.id, lineItemId).then(checkout => this.setState({checkout: checkout}))
  }

  updateQuantity(lineItemId, quantity) {
    const { checkout } = this.state
    let filteredQuantity = Math.min(Math.max(1, quantity), 100)
    updateLineItems(checkout.id, lineItemId, filteredQuantity).then(checkout => this.setState({checkout: checkout}))
  }

  renderImage(lineItem) {
    return lineItem.variant.image ?  <img src={lineItem.variant.image.src} /> : <img src={lineItem.variant.product.images[0].src} />
  }

  renderItem(lineItem, index) {

    const destination = `/store/product/?productId=${lineItem.variant.product.id}`
    return (
      <div key={index} className="cart-row">
        {this.renderImage(lineItem)}
        <div className="cart-row-details">
          <div className="title">
            <Link to={destination}>{lineItem.title}</Link>
          </div>
          {lineItem.variant.title !== "Default Title" ? <p>{lineItem.variant.title}</p> : null }
          <p><a className="remove" onClick={() => this.removeItemFromCart(lineItem.id)}>Remove</a></p>
        </div>
        <div className="cart-row-numbers">
          <p className="price">${lineItem.variant.price}</p>
          <div className="controls">
            {lineItem.quantity > 1 ? <div className="subtract addOrSubtract" onClick={() => this.updateQuantity(lineItem.id, lineItem.quantity - 1)}>-</div> : null }
            {lineItem.quantity}
            <div className="add addOrSubtract" onClick={() => this.updateQuantity(lineItem.id, lineItem.quantity + 1)}>+</div>
          </div>
          <p className="total">${Math.round(100 * lineItem.variant.price * lineItem.quantity)/100}</p>
        </div>
      </div>
    )
  }

  renderItemMobile(lineItem, index) {
    const destination = `/store/product/?productId=${lineItem.variant.product.id}`
    return (
      <div key={index} className="cart-row-mobile">
        <div className="cart-row-details">
          {this.renderImage(lineItem)}
          <div>
            <div className="title">
              <Link to={destination}>{lineItem.title}</Link>
            </div>
            {lineItem.variant.title !== "Default Title" ? <p>{lineItem.variant.title}</p> : null }
            <p><a className="remove" onClick={() => this.removeItemFromCart(lineItem.id)}>Remove</a></p>
          </div>
        </div>
        <div className="cart-row-numbers">
          <p className="price">${lineItem.variant.price}</p>
          <div className="controls">
            {lineItem.quantity > 1 ? <div className="subtract addOrSubtract" onClick={() => this.updateQuantity(lineItem.id, lineItem.quantity - 1)}>-</div> : null }
            {lineItem.quantity}
            <div className="add addOrSubtract" onClick={() => this.updateQuantity(lineItem.id, lineItem.quantity + 1)}>+</div>
          </div>
          <p className="total">${Math.round(100 * lineItem.variant.price * lineItem.quantity)/100}</p>
        </div>
      </div>
    )

  }

  renderDesktop() {
    const { checkout } = this.state
    return (
      <div>
        <div className="cart-headers">
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        {checkout.lineItems.map((lineItem, index) => this.renderItem(lineItem,index))}
        <p className="subtotal pull-right">Subtotal: ${checkout.subtotalPrice} USD</p>
        <p className="pull-right"><i>Shipping, taxes, and discounts will be calculated at checkout</i></p>
        <div className="cart-buttons pull-right">
          <Button label="Continue Shopping" url="/store/" internal color="dark"/>
          <Button label="Checkout" url={checkout.webUrl} internal={false} color="light"/>
        </div>
      </div>
    )
  }

  renderMobile() {
    const { checkout } = this.state
    return (
      <div>
        <div className="cart-headers-mobile">
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        {checkout.lineItems.map((lineItem, index) => this.renderItemMobile(lineItem,index))}
        <p className="subtotal pull-right">Subtotal: ${checkout.subtotalPrice} USD</p>
        <p className="pull-right"><i>Shipping, taxes, and discounts will be calculated at checkout</i></p>
        <div className="cart-buttons pull-center">
          <Button label="Continue" url="/store/" internal color="dark"/>
          <Button label="Checkout" url={checkout.webUrl} internal={false} color="light"/>
        </div>
      </div>
    )
  }


  renderCart() {
    const { checkout } = this.state

    if(!checkout) {
      return <SpinnerLoader />
    }

    if(!checkout.lineItems.length) {
      return (
        <div className="pull-center">
          <p>Your cart is currently empty!</p>
          <img src={EmptyCart} width="200px"/>
          <p>Browse through our collections to view all of our product offerings.</p>
          <Button label="Continue Shopping" url="/store/" internal color="dark"/>
        </div>
      )
    }
    return Bowser.mobile ? this.renderMobile() : this.renderDesktop();
  }

  render() {
    return (
      <section className="cart-wrapper">
        <h1>Your Cart</h1>
        <div className="promo">
          <p>Save <strong>10%</strong> when you spend <strong>$400</strong> on consumables and accessories! Use the code <strong className="green">10%OFF400</strong> during checkout.</p>
        </div>
        {this.renderCart()}
      </section>
    );
  }
}
