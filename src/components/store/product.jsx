import React from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

import ProductSnippet from 'components/store/utils/productSnippet'
import Button from 'components/common/button'

import { fetchProduct, fetchProductSnippets, fetchRecentCart } from 'components/store/api'

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
    if (productId){
      fetchProduct(productId).then(product => this.setState({product: product}))
    }

    if (collectionId){
      fetchProductSnippets(collectionId).then(products => this.setState({products: products}))
    }
  }

  addToCart() {
    const { product, quantity } = this.state
    fetchRecentCart().then(cart => cart.createLineItemsFromVariants({variant: product.selectedVariant, quantity: quantity})).then(cart => this.setState({addedToCart: true}))
  }

  onQuantityChange(event) {
    this.setState({quantity: Math.round(event.target.value)})
  }

  renderRelatedProducts() {
    const { productId, collectionId } = this.props;

    if (!collectionId){
      return null
    }

    const filteredProd = this.state.products.filter(product => product.id !== productId)

    return (
      <div>
        <h2 className="pull-left">More from this collection:</h2>
        <div className="collection-gallery">
            {filteredProd.slice(0,3).map((product, index) => <ProductSnippet key={index} collectionId={this.props.collectionId} product={product} external={true}/>)}
        </div>
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
      <section id="product-wrapper" className="product-wrapper">
        <div className="information">
          <img src={product.image}/>
          <div className="details">
            <h1>{product.title}</h1>
            <h2 className="price">{product.selectedVariant.formattedPrice}</h2>
            <div className="sub-details">
              <p><strong>Quantity:</strong> <input className="quantity-input" id="number" type="number" value={quantity} min="1" max="100" onChange={(event) =>this.onQuantityChange(event)}/></p>
              <Button label="Add to cart" onClick={() =>this.addToCart()} color="light"/>
            </div>
          </div>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: product.description }}/>
        {this.renderRelatedProducts()}
      </section>
    );
  }
}
