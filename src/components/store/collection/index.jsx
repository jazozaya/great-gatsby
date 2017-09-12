import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'

import CollectionTab from 'components/store/utils/collectionTab'
import ProductSnippet from 'components/store/collection/productSnippet'

import { fetchAllCollections, fetchProducts } from 'components/store/common'

export default class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [], // Array of products in current collection.
      collections: [], // Description of
      collection_id: null
    };

    this.onNavigation = this.onNavigation.bind(this)
  }

    static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
      }).isRequired
    }).isRequired
  }


  componentWillMount() {
    const obj = {
      collection_id: queryString.parse(this.props.query).collection_id,
      products: [],
      collections: []
    }

    // Get Collections and Products using promises
    var firstChain = fetchAllCollections().then((collections) => obj.collections = collections)
    var secondChain = fetchProducts(obj.collection_id).then((products) => obj.products = products)

    // Set state only once, wait for all promises to resolve.
    Promise.all([firstChain, secondChain]).then(() => this.setState({...obj}))

  }

  onNavigation(query, collection_id) {
    const { history } = this.context.router
    fetchProducts(collection_id).then((products) => {
      this.setState({products: products, collection_id: collection_id})
      history.push(query)
    })
  }

  renderCollectionTitle() {
    const { collections, collection_id } = this.state;

    if (!collections.length){
      return null
    }

    // Extract Title and description
    const collection = collections.find((collection) => collection.collection_id === collection_id)

    return (
      <div className="collection-title">
        <h2>{collection.title}</h2>
        <p className="pull-center">{collection.description}</p>
      </div>
    )
  }

  render() {

    console.log(this.state)
    return (
      <section className="store-wrapper">
        <h1>Welcome to our Store</h1>
        <p className='pull-center'>Whether you are printing your first circuit, or picking up your fifth solder paste cartridge, you will find what you need here. Everything you need to build hardware faster with the Voltera V-One.</p>
        <CollectionTab collections={this.state.collections} cb={this.onNavigation} />
        {this.renderCollectionTitle()}
        <div className="product">
          {this.state.products.map((product, index) => <ProductSnippet key={index} product={product}/>)}
        </div>
      </section>
    );
  }
}
