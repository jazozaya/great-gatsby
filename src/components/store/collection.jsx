import React from 'react'
import Helmet from 'react-helmet'
import ProductSnippet from 'components/store/utils/productSnippet'

import { fetchCollection, fetchProductSnippets } from 'components/store/api'

export default class Collection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products:[],
      collection: null
    }
  }

  componentWillMount() {
    const { collectionId } = this.props;

    if (collectionId) {
      const obj = {}
      const chainOne = fetchProductSnippets(collectionId).then(products => obj.products = products)
      const chainTwo = fetchCollection(collectionId).then(collection => obj.collection = collection)

      // Wait for all the data to arrive, then update state.
      Promise.all([chainOne, chainTwo]).then(() => this.setState({...obj}))
    }
  }

  renderTitle() {
    const { collection} = this.state;

    if (!collection){
      return null
    }

    return (
      <div>
        <h2>{collection.title}</h2>
        <p className="pull-center">{collection.description}</p>
      </div>
    )
  }

  renderHelmet() {
    const { collection } = this.state

    if(!collection) {
      return null
    }

    return (
      <Helmet>
        <title>Voltera | {collection.title}</title>
        <meta name="description" content={collection.description} />
      </Helmet>
    )
  }

  render() {
    return (
      <section>
        {this.renderHelmet()}
        {this.renderTitle()}
        <div className="collection-gallery">
          {this.state.products.map((product, index) => <ProductSnippet key={index} collectionId={this.props.collectionId} product={product}/>)}
        </div>
      </section>
    );
  }
}
