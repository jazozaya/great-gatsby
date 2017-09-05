import React from 'react'

import { strip } from 'components/store/common'
import './productSnippet.scss'

export default class ProductSnippet extends React.Component {

  render() {
    const { product } = this.props;

    // Shopify hosts multipe image sizes.
    var imgVariants = product.selectedVariantImage.variants

    // Strip description from HTML content.
    var description = strip(product.description)

    return (
      <div className="product-snippet">
        <a href={`/store/product?title=${product.title}&id=${product.id}`}>
          <img src={imgVariants[5].src} />
          <h3>{product.title}</h3>
          <p className="price">{product.selectedVariant.formattedPrice}</p>
          <p className="description">{description.substr(0,150)+"..."}</p>
        </a>
      </div>
    );
  }
}
