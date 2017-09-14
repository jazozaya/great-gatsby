import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import CollectionTab from 'components/store/utils/collectionTab'
import ProductSnippet from 'components/store/utils/productSnippet'
import Button from 'components/common/button'

import { fetchProduct, fetchAllCollections, fetchProductSnippets } from 'components/store/api'

import './product.scss'

export default class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null,
      quantity: 1
    };
  }

  componentWillMount() {
    const id = queryString.parse(this.props.query).id
    fetchAllCollections().then((collections) => this.setState({collections: collections}))
    fetchProduct(id).then((product) => this.setState({product: product}))
  }

  render() {

    console.log(this.state)
    const { product } = this.state

    if (!product) {
      return null;
    }

    return (
      <section className="product-wrapper">
        <div className="information">
          <img src={product.image}/>
          <div className="details">
            <h1>{product.title}</h1>
            <h2 className="price">{product.selectedVariant.formattedPrice}</h2>
            <div className="sub-details">
              <p><strong>Quantity:</strong> <input className="quantity" id="number" type="number" defaultValue="1" min="1" max="5" onInput={(quantity) => this.setState({quantity: quantity})}/></p>
              <Button label="Add to cart" onClick={this.addToCart} color="light"/>
            </div>
          </div>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: product.description }}/>
        <h3>More from this collection:</h3>
        <div className="related-products">
          <ProductSnippet product={product}/>)
        </div>
      </section>
    );
  }
}
