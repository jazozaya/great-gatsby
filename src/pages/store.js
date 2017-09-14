import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import queryString from 'query-string'

import Collection from 'components/store/collection'
import Product from 'components/store/product'
import CollectionTab from 'components/store/utils/collectionTab'

import { fetchAllCollections } from 'components/store/api'

export default class MyStore extends React.Component {

  // On startup
  // - Get collections
  // - Get cart
  // - Get IDs.

  // If A Product ID is included
  // -- Load product page and pass in product ID, cart and collections (for relevant products)
  // If Collecton ID
  // -- Load collection page and passin cart, collections and collection id

  // If No ID
  // -- Load collection with default.

  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      collectionId: null,
      productId: null,
    };

    this.onProductSelection = this.onProductSelection.bind(this)
    this.onCollectionSelection = this.onCollectionSelection.bind(this)
  }

  componentWillMount() {
    const query = queryString.parse(this.props.location.search);

    fetchAllCollections().then((collections) => {
      this.setState({
        collectionId:  query.collectionId || null,
        productId: query.productId || null,
        collections: collections
      })
    })

  }

  renderCollection() {
    return <Collection collectionId={this.state.collectionId} collections={this.state.collections} cb={this.onProductSelection} />
  }

  renderProduct() {
    return <Product collectionId={this.state.collectionId} collections={this.state.collections} productId={this.state.productId} />
  }

  onCollectionSelection(query, collectionId) {
    const { history } = this.context.router
    this.setState({collectionId: collectionId, productId: null})
    history.push(query)
  }

  onProductSelection(query, productId) {
    debugger;
    const { history } = this.context.router
    this.setState({productId: productId})
    history.push(query)
  }

  render() {
    return (
      <section className="store-wrapper">
        <Helmet>
          <title>Voltera | Store</title>
          <meta name="description" content="All the tools and accessories you need to prototype with the V-One." />
        </Helmet>
        <h1>Welcome to our Store</h1>
        <p className='pull-center'>Whether you are printing your first circuit, or picking up your fifth solder paste cartridge, you will find what you need here. Everything you need to build hardware faster with the Voltera V-One.</p>
        <CollectionTab collections={this.state.collections} cb={this.onCollectionSelection} />
        {this.state.productId ? this.renderProduct() : this.renderCollection()}
      </section>
    )
  }
}
