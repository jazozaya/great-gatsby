import React from 'react'
import Product from 'components/store/product'
import queryString from 'query-string'

export default class MySwag extends React.Component {

  render() {
    const { productId, collectionId } = queryString.parse(this.props.location.search);
    return <Product productId={productId} collectionId={collectionId}/>
  }
}
