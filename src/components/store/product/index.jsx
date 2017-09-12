import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import CollectionTab from 'components/store/utils/collectionTab'
import ProductSnippet from 'components/store/collection/productSnippet'

import { fetchProduct } from 'components/store/common'

import './product.scss'

export default class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };

  }

  componentWillMount() {
    const id = queryString.parse(this.props.query).id
    fetchAllCollections().then((collections) => this.setState({collections: collections}))
    fetchProduct(id).then((product) => this.setState({product: product}))
  }


  renderCollectionTitle() {
    const { collections, collection_id } = this.state;
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
          <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p></p>
          </div>
        </div>
      </section>
    );
  }
}
