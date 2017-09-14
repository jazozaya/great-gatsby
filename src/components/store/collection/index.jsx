import React from 'react'
import ProductSnippet from 'components/store/utils/productSnippet'

import { fetchAllCollections, fetchProductSnippets } from 'components/store/api'

export default class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [], // Array of products in current collection.
    };
  }
  componentWillMount() {
    const { collectionId } = this.props;
    // Occurs when a blank collection or direct URL is loaded.
    if (collectionId) {
      fetchProductSnippets(collectionId).then((products) => this.setState({products: products}))
    }
  }

  componentWillReceiveProps(nextProps) {
    const { collectionId } = nextProps;
    // When a navigate from one collection to another.
    if (collectionId) {
      fetchProductSnippets(collectionId).then((products) => this.setState({products: products}))
    }
  }

  renderCollectionTitle() {
    const { collections, collectionId } = this.props;

    // Early exit if a collection was not defined.
    if (!collectionId || !collections.length){
      return null
    }

    // Extract title and collection from the collection Id.
    const collection = collections.find((collection) => collection.collectionId === collectionId)

    return (
      <div>
        <h2>{collection.title}</h2>
        <p className="pull-center">{collection.description}</p>
      </div>
    )
  }

  render() {

    console.log('Collection - ', this.state, this.props)
    return (
      <section>
        {this.renderCollectionTitle()}
        <div className="collection-gallery">
          {this.state.products.map((product, index) => <ProductSnippet key={index} collectionId={this.props.collectionId} product={product} cb={this.props.cb}/>)}
        </div>
      </section>
    );
  }
}
