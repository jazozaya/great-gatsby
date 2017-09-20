import React from 'react'
import { collections as c } from 'components/store/constants'
import CollectionTab from 'components/store/utils/collectionTab'
import Product from 'components/store/product'
import queryString from 'query-string'

export default class MySwag extends React.Component {

  render() {

    const { productId, collectionId } = queryString.parse(this.props.location.search);

    return (
      <section className="store-wrapper">
        <h1>Welcome to our Store</h1>
        <p className='pull-center'>Whether you are printing your first circuit, or picking up your fifth solder paste cartridge, you will find what you need here. Everything you need to build hardware faster with the Voltera V-One.</p>
        <CollectionTab/>
        <Product productId={productId} collectionId={collectionId}/>
      </section>
    )
  }
}