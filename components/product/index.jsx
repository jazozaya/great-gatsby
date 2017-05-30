import React from 'react'
import './product.scss'

export default class Product extends React.Component {

  render() {
    return (<div className="product">
    <div className="product-wrapper">
      <h1>Product</h1>
      <div className="my-product">
        <div className="dispenser"></div>
        <div className="clamps"></div>
      </div>
    </div>
  </div>);
}
}
