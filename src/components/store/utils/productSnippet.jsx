import React from 'react'
import Link from 'components/common/linkWrapper'

import 'components/store/store.scss'

export default class ProductSnippet extends React.Component {

  render() {
    const { product, collectionId } = this.props;
    const destination = `/store/product/?title=${product.title}&productId=${product.id}&collectionId=${collectionId}`

    return (
      <a className="product-snippet" href={destination}>
        <div className="pull-center">
          <img src={product.image} />
        </div>
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
      </a>
    )
  }
}
