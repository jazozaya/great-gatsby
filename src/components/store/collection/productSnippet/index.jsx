import React from 'react'
import Link from 'gatsby-link'

import { strip } from 'components/store/common'
import './productSnippet.scss'

export default class ProductSnippet extends React.Component {

  render() {
    const { product } = this.props;

    return (
      <Link className="product-snippet" to={`/store/product?title=${product.title}&id=${product.id}`}>
        <div className="pull-center">
          <img src={product.image} />
        </div>
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>
      </Link>
    );
  }
}
