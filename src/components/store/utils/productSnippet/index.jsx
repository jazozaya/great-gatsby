import React from 'react'
import Link from 'gatsby-link'

import './productSnippet.scss'

export default class ProductSnippet extends React.Component {

  renderInternal(product, destination) {
    return (
      <Link className="product-snippet" to={destination}>
        <div className="pull-center">
          <img src={product.image} />
        </div>
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
      </Link>
    )
  }

  renderExternal(product, destination) {
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

  render() {
    const { product, collectionId, external } = this.props;
    // A collection ID might not have been passed in.
    var destination = `/store/product/?title=${product.title}&productId=${product.id}`
    if (collectionId) {
      destination = `${destination}&collectionId=${collectionId}`
    }

    return external ? this.renderExternal(product, destination) : this.renderInternal(product, destination)
  }
}
