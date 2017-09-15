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
      product: null, // Instance of our product.
      quantity: 1
    };
  }

  componentWillMount() {
    const { productId, collectionId, setProducts } = this.props
    if (productId){
      fetchProduct(productId).then((product) => this.setState({product: product}))
    }

    // Occurs when a direct URL is loaded.
    if (collectionId) {
      fetchProductSnippets(collectionId).then(setProducts)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { productId } = nextProps
    if (this.state.productId !== productId) {
      fetchProduct(productId).then((product) => this.setState({product: product}))
    }
  }

  componentDidUpdate() {
    // Bring the view up.
    setTimeout( function () {
      const div = document.getElementById("product-wrapper")
      if (div) {
        div.scrollIntoView()
      }
      else {
        window.scrollTo(0,0)
      }
    }, 100)
  }

  relatedProducts() {
    // First take out our current product.
    const { productId, products } = this.props
    const filteredProd = products.filter(product => product.id !== productId)
    return filteredProd.slice(0,3)
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
        <h3>More from this collection:</h3>
        <div className="collection-gallery">
            {this.relatedProducts().map((product, index) => <ProductSnippet key={index} collectionId={this.props.collectionId} product={product} cb={this.props.cb}/>)}
        </div>
      </section>
    );
  }
}
