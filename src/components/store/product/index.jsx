import React from 'react'
import { Redirect } from 'react-router'

import ProductSnippet from 'components/store/utils/productSnippet'
import ProductPictures from 'components/store/utils/productPictures'
import Button from 'components/common/button'

import { fetchProduct, fetchProductSnippets, fetchRecentCart } from 'components/store/api'

import './product.scss'

export default class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null, // Instance of our product.
      products: [], // Snippets of our relatedProducts
      quantity: 1,
    };
  }

  componentWillMount() {
    const { productId, collectionId } = this.props
    fetchProduct(productId).then(product => this.setState({product: product}))

    let workingCollectionId = collectionId || 301765121 //Id of ALL products.
    fetchProductSnippets(workingCollectionId).then(products => this.setState({products: products}))
  }

  addToCart() {
    const { product, quantity } = this.state
    fetchRecentCart().then(cart => cart.createLineItemsFromVariants({variant: product.selectedVariant, quantity: quantity})).then(cart => this.setState({addedToCart: true}))
  }

  onQuantityChange(event) {
    this.setState({quantity: Math.round(event.target.value)})
  }

  renderRelevantProducts() {
    const { productId, collectionId, noRelevant } = this.props;

    if (noRelevant) {
      return null;
    }

    const filteredProd = this.state.products.filter(product => product.id !== productId)     // Filter out the product we are viewing!

    return (
      <div className="relevant-products">
        <h2 className="pull-left">{ collectionId ? "More from this collection:" : "Popular Products:"}</h2>
        <div className="relevant-gallery">
            {filteredProd.slice(0,3).map((product, index) => <ProductSnippet key={index} collectionId={collectionId} product={product} external={true}/>)}
        </div>
      </div>
    )
  }

  changedVariant(event) {
    const { product } = this.state;
    product.options[0].selected = event.target.value // Not sure how this works... Apparently we can modify the state.
  }

  renderVariantSelection() {
    const { product } = this.state
    if (product.options[0].values.length === 1) {
      return null
    }
    return (
      <div>
        <strong>{product.options[0].name}: </strong>
        <select className="select" onChange={(event) =>this.changedVariant(event)}>
          {product.options[0].values.map((value, index) => <option key={index} value={value}>{value}</option>)}
        </select>
      </div>
    )
  }

  renderQuantitySelection() {
    return (
      <div>
        <strong>Quantity:</strong>
        <input className="select" id="number" type="number" value={this.state.quantity} min="1" max="100" onChange={(event) => this.onQuantityChange(event)}/>
      </div>
    )
  }

  render() {
    const { product, addedToCart, quantity } = this.state

    if (!product) {
      return null;
    }

    if (addedToCart) {
      return <Redirect push to="/store/cart/"/>
    }

    return (
      <section className="product-wrapper">
        <div className="information">
          <ProductPictures images={product.images} />
          <div className="details">
            <h1 className="pull-left">{product.title}</h1>
            <h2 className="pull-left price">{product.selectedVariant.formattedPrice}</h2>
            {this.renderVariantSelection()}
            {this.renderQuantitySelection()}
            <Button label="Add to cart" onClick={() => this.addToCart()} color="light long"/>
          </div>
        </div>
        <h2 className="pull-left">Description</h2>
        <div className="description" dangerouslySetInnerHTML={{ __html: product.description }}/>
        {this.renderRelevantProducts()}
      </section>
    );
  }
}
