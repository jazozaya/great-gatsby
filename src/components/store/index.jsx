import React from 'react'
import ShopifyBuy from 'shopify-buy'
import queryString from 'query-string'
import ProductSnippet from './collection/productSnippet'
import Link from 'components/common/linkWrapper'
import { withCookies, Cookies } from 'react-cookie';

import CollectionTab from './collectionTab'

import { strip, shopClient } from 'components/store/common'

import './store.scss'

class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: null,
      products: [], // Array of products in current collection.
      activeCol: null
    };
    this.processProducts = this.processProducts.bind(this);
  }

  fetchProducts(query, collections){
    // Our traffic controller - Based on URL we render a specific collection.
    // Example voltera.io/store?collection=swag

    if (!query.length) {
      console.log("nothing to render! Would render the V-One normally.")
      return null;
    }
    // We have our collection handle, figure out which one it is.
    const handle = queryString.parse(query).collection;
    const activeCol= collections.find((collection) => collection.handle === handle)

    shopClient.fetchQueryProducts({ collection_id: activeCol.collection_id}).then(this.processProducts)
    this.setState({activeCol: activeCol})

  }

  processProducts(products) {
    // Must extract the following for each product.
    // title, description, image, price.
    var i
    var extractedProducts = []
    for (i = 0; i < products.length; i ++ ){
        extractedProducts.push({
        id: products[i].id,
        title: products[i].title,
        description: products[i].description,
        selectedVariant: products[i].selectedVariant,
        selectedVariantImage: products[i].selectedVariantImage
      })
    }
    this.setState({products: extractedProducts})
  }


  renderCollectionTitle() {

    if(!this.state.activeCol) {
      return null
    }

    return (
      <div className="collection-title">
        <h2>{this.state.activeCol.title}</h2>
        <p className='pull-center'>{strip(this.state.activeCol.body_html)}</p>
      </div>
    )
  }

  renderProducts() {

    if(!this.state.products.length) {
      console.log("No products to display!")
      return <p>No products to display!</p>
    }
    return (
      <div className="product">
        {this.state.products.map((product, index) =>
          <ProductSnippet key={index} product={product}/>
        )}
      </div>
    )
  }

  render() {
    return(
      <section className="store-wrapper">
        <h1>Welcome to our Store</h1>
        <p className='pull-center'>Whether you are printing your first circuit, or picking up your fifth solder paste cartridge, you will find what you need here. Everything you need to build hardware faster with the Voltera V-One.</p>
        <CollectionTab />
        {this.renderCollectionTitle()}
        <div className="store">
          {this.renderProducts()}
        </div>
      </section>
    );
  }
}

export default withCookies(Store);


//<iframe height="800" width="600" src="https://v2.zopim.com/widget/livechat.html?key=3TyESr1T2GGouM6lqu5mNOyUZpr8BYcU" scrolling="no"></iframe>
