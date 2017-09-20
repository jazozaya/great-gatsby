import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import CollectionTab from 'components/store/utils/collectionTab'
import ProductSnippet from 'components/store/utils/productSnippet'
import Button from 'components/common/button'

import { fetchProduct, fetchProductSnippets } from 'components/store/api'

export default class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [], // Snippets of our relatedProducts
      product: null, // Instance of our product.
      quantity: 1
    };
  }

  componentWillMount() {
    const { productId, collectionId } = this.props
    if (productId && collectionId){
      const obj = {}
      const chainOne = fetchProduct(productId).then(product => obj.product = product)
      const chainTwo = fetchProductSnippets(collectionId).then(products => obj.products = products)

      // Wait for all data to be collected.
      Promise.all([chainOne, chainTwo]).then(() => this.setState({product: obj.product, products: obj.products}))
    }
  }

  relatedProducts() {
    const { productId } = this.props
    const filteredProd = this.state.products.filter(product => product.id !== productId)
    return filteredProd.slice(0,3) // Only return 3 products max.
  }

  render() {
    const { product } = this.state

    if (!product) {
      return null;
    }

    return (
      <section id="product-wrapper" className="product-wrapper">
        <div className="information">
          <img src={product.image}/>
          <div className="details">
            <h1>{product.title}</h1>
            <h2 className="price">{product.selectedVariant.formattedPrice}</h2>
            <div className="sub-details">
              <p><strong>Quantity:</strong> <input className="quantity-input" id="number" type="number" defaultValue="1" min="1" max="5" onInput={(quantity) => this.setState({quantity: quantity})}/></p>
              <Button label="Add to cart" onClick={this.addToCart} color="light"/>
            </div>
          </div>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: product.description }}/>
        <h2 className="pull-left">More from this collection:</h2>
        <div className="collection-gallery">
            {this.relatedProducts().map((product, index) => <ProductSnippet key={index} collectionId={this.props.collectionId} product={product}/>)}
        </div>
      </section>
    );
  }
}
