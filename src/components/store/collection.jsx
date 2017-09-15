import React from 'react'
import ProductSnippet from 'components/store/utils/productSnippet'

import { fetchAllCollections, fetchProductSnippets } from 'components/store/api'

export default class Collection extends React.Component {

  componentWillMount() {
    const { collectionId, setProducts } = this.props;
    // Occurs when a blank collection or direct URL is loaded.
    if (collectionId) {
      fetchProductSnippets(collectionId).then(setProducts)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { collectionId, setProducts } = nextProps;
    // When a navigate from one collection to another.
    if (this.props.collectionId !== collectionId) {
      fetchProductSnippets(collectionId).then(setProducts)
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
          {this.props.products.map((product, index) => <ProductSnippet key={index} collectionId={this.props.collectionId} product={product} cb={this.props.cb}/>)}
        </div>
      </section>
    );
  }
}
