import React from 'react'
import Link from 'components/common/linkWrapper'

import 'components/store/store.scss'

export default class ProductSnippet extends React.Component {

  render() {
    const { product, collectionId, cb } = this.props;
    const destination = `/store/?product=${product.title}&productId=${product.id}&collectionId=${collectionId}`
    
    return (
      <Link className="product-snippet" onClick={() => cb(destination, product.id)} to={destination}>
        <div className="pull-center">
          <img src={product.image} />
        </div>
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
      </Link>
    )
  }
}
