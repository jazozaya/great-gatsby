import React from 'react'
import ShopifyBuy from 'shopify-buy'
import queryString from 'query-string'
// import Link from 'components/common/linkWrapper'
import { Link } from 'react-router-dom'

import './store.scss'

var shopClient = ShopifyBuy.buildClient({
  accessToken: '349df796683b8ac51137cbe5f43dbcfc',
  domain: 'voltera.myshopify.com',
  appId: '6'
});

const collectionWhiteList = [
  298518977, //Swag
  315550913, //Bundles
  343929793, //Solder
  262492865, //Accessories
  343930305, // Conductive-Inks
  302583105, //Standard Substrates
]

export default class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: null,
      collections: [], // Array of Objects.
      activeCollection: null,
      products: [] // Array of products in current collection.
    };
    this.filterCollections  = this.filterCollections.bind(this);
    this.processProducts = this.processProducts.bind(this);
  }

  componentWillMount() {
    shopClient.fetchAllCollections().then(this.filterCollections)
    // TODO - Get last used cart.
  }

  filterCollections(collections) {
    // Massage our information a bit, filter out unused collections.
    // TODO - Somehow sort the collections.
    var extractedCol = collections.map(collection => collection.attrs)
    var filteredCol = extractedCol.filter(collection => collectionWhiteList.includes(collection.collection_id))
    this.setState({collections: filteredCol})
  }

  componentWillReceiveProps(nextProps){
    // Our traffic controller - Based on URL we render a specific collection.
    // Example voltera.io/store?collection=swag
    const { search } = nextProps
    if (!search.length || !this.state.collections.length) {
      console.log("nothing to render!")
      return null;
    }

    // We have our collection handle, need to get it's id.
    const handle = queryString.parse(search).collection;
    const collection_id = this.state.collections.find((collection) => collection.handle === handle).collection_id
    shopClient.fetchQueryProducts({ collection_id: collection_id}).then(this.processProducts)

  }

  processProducts(products) {
    // Must extract the following for each product.
    // title, description, image, price.
  }
  renderCollectionTab() {
    return this.state.collections.map((collection, index) =>
      <Link key={index} to={`/store?collection=${collection.handle}`}>
        <h3>{collection.title}</h3>
      </Link>
    )
  }

  renderProducts() {

  }

  render() {
    return(
      <div className="store-wrapper">
        <div className="collection-tab">
          {this.renderCollectionTab()}
        </div>
        <div className="store">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}
// Aim, retain ability to add and more collections or products.
// Page hierarchy:
// Collections -> Products.
// Collections shoud be in the forms of tabs.
// A product is only fetched in that tab.

// 1) Fetch Collections and display them in tabs.
// 2) Fetch Products given the collection
//
