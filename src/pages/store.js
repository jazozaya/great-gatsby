import React from 'react'
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import queryString from 'query-string'

import Collection from 'components/store/collection'
import Product from 'components/store/product'
import CollectionTab from 'components/store/utils/collectionTab'

import { fetchAllCollections } from 'components/store/api'

class MyStore extends React.Component {

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

  static defaultProps = {
    location: PropTypes.object.isRequired
   }

  constructor(props) {
    super(props);
    this.state = {
      collections: [], // All the collections
      collectionId: null, // Id of selected collection
      products: [], // Producs within the collection
      productId: null, // Selected product id.
    };

    this.onProductSelection = this.onProductSelection.bind(this)
    this.onCollectionSelection = this.onCollectionSelection.bind(this)
    this.setProducts = this.setProducts.bind(this)
  }

  componentWillMount() {
    console.log('store mounting')
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
    return <Collection collectionId={this.state.collectionId} collections={this.state.collections} products={this.state.products} cb={this.onProductSelection} setProducts={this.setProducts} />
  }

  renderProduct() {
    return <Product collectionId={this.state.collectionId} products={this.state.products} productId={this.state.productId} cb={this.onProductSelection} setProducts={this.setProducts} />
  }

  onCollectionSelection(query, collectionId) {
    const { history } = this.context.router
    //this.props.history.push(query)
    //debugger;

    //history.push(query,{"hello":true})
    //this.setState({collectionId: collectionId, productId: null})
    //history.push(query)

  }

  componentWillReceiveProps() {
    debugger;
  }

  onProductSelection(query, productId) {
    const { history } = this.context.router
    this.setState({productId: productId})
  }

  setProducts(products) {
    this.setState({products: products})
  }

  render() {
    console.log('re-rendering store')
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

export default withRouter(MyStore);
