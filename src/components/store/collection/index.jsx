import React from 'react'
import Helmet from 'react-helmet'
import ProductSnippet from 'components/store/utils/productSnippet'
import SpinnerLoader from 'components/common/spinnerLoader'

import { fetchCollectionDetails, fetchProductSnippets } from 'components/store/api'

import './collection.scss'

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

    fetchCollectionDetails(collectionId).then(collection => this.setState({collection: collection}))
    fetchProductSnippets(collectionId).then(products => this.setState({products: products}))

    //Promise.all([chainOne, chainTwo]).then(() => this.setState({...obj})) // Wait for all the data to arrive, then update state.
  }

  renderHelmet(collection) {
    if (this.props.noHelmet) {
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
    const { collection } = this.state;

    if(!collection) {
      return(
        <section className="collection-wrapper">
          <h1>Loading...</h1>
          <SpinnerLoader />
        </section>
      )
    }


    return (
      <section className="collection-wrapper">
        {this.renderHelmet(collection)}
        <h2>{collection.title}</h2>
        <p className="pull-center">{collection.description}</p>
        <div className="collection-gallery">
          {this.state.products.map((product, index) => <ProductSnippet key={index} collectionId={this.props.collectionId} product={product}/>)}
        </div>
      </section>
    );
  }
}
