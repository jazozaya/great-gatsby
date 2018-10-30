import React from "react";
import { navigate } from "gatsby";

import SpinnerLoader from "components/common/spinnerLoader";
import ProductSnippet from "components/store/utils/productSnippet";
import ProductPictures from "components/store/utils/productPictures";
import Button from "components/common/button";

import { collections as c } from "components/store/constants";
import { fetchProduct, fetchProductSnippets, fetchRecentCheckout, addItemtoCheckout } from "components/store/api";

import "./product.scss";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      variantIndex: 0,
      product: null, // Instance of our product.
      quantity: 1,
      products: [] // Snippets of our relatedProducts
    };

    this.processOptionChange = this.processOptionChange.bind(this);
  }

  componentDidMount() {
    const { productId, collectionId, noRelevant } = this.props;
    fetchProduct(productId).then(product => this.setState({ product: product }));

    if (!noRelevant) {
      let workingCollectionId = collectionId || c.allProducts.id; //Id of ALL products.
      fetchProductSnippets(workingCollectionId).then(products => this.setState({ products: products }));
    }
  }

  addToCart() {
    const { product, quantity, variantIndex } = this.state;

    const lineItems = [
      {
        variantId: product.variants[variantIndex].id,
        quantity: quantity
      }
    ];
    fetchRecentCheckout()
      .then(checkout => addItemtoCheckout(checkout.id, lineItems))
      .then(checkout => this.setState({ addedToCheckout: true }));
  }

  renderRelevantProducts() {
    const { productId, collectionId, noRelevant } = this.props;

    if (noRelevant) {
      return null;
    }

    const filteredProd = this.state.products.filter(product => product.id !== productId); // Filter out the product we are viewing!

    return (
      <div className="relevant-products">
        <h2 className="pull-left">{collectionId ? "More from this collection:" : "Popular Products:"}</h2>
        <div className="relevant-gallery">
          {filteredProd.slice(0, 3).map((product, index) => (
            <ProductSnippet key={index} collectionId={collectionId} product={product} external={true} />
          ))}
        </div>
      </div>
    );
  }

  processOptionChange() {
    const { product } = this.state;
    this.setState({ variantIndex: this.updateVariantIndex(product) });
  }

  updateVariantIndex(product) {
    //This method obtains the new variant based on the options that were selected. Only support for 2 options. A bit clunkly but it works.

    const selectedOption0 = document.getElementById(`option1-${product.id}`).value;
    const selectedOption1 = product.options.length === 2 ? document.getElementById(`option2-${product.id}`).value : null;

    let i;
    for (i = 0; i < product.variants.length; i++) {
      // Check if 1 option
      if (product.variants[i].selectedOptions.length === 1) {
        //Only 1 variant
        if (product.variants[i].selectedOptions[0].value === selectedOption0) {
          return i;
        }
      }

      // Check if 2 options.
      if (product.variants[i].selectedOptions.length === 2) {
        if (
          product.variants[i].selectedOptions[0].value === selectedOption0 &&
          product.variants[i].selectedOptions[1].value === selectedOption1
        ) {
          return i;
        }
      }
    }

    console.error("Something went horribly wrong");
  }

  renderOptionSelection() {
    const { product } = this.state;
    if (product.variants.length === 1) {
      return null;
    }

    const option1 = `option1-${product.id}`; // Avoid name conflicts with other products.

    if (product.options.length === 1) {
      return (
        <div>
          <strong>{product.options[0].name}: </strong>
          <select id={option1} className="select" onChange={this.processOptionChange}>
            {product.options[0].values.map((value, index) => (
              <option key={index} value={value.value}>
                {value.value}
              </option>
            ))}
          </select>
        </div>
      );
    }

    const option2 = `option2-${product.id}`; // Avoid name conflicts with other products.

    return (
      <div>
        <div>
          <strong>{product.options[0].name}: </strong>
          <select id={option1} className="select" onChange={this.processOptionChange}>
            {product.options[0].values.map((value, index) => (
              <option key={index} value={value.value}>
                {value.value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <strong>{product.options[1].name}: </strong>
          <select id={option2} className="select" onChange={this.processOptionChange}>
            {product.options[1].values.map((value, index) => (
              <option key={index} value={value.value}>
                {value.value}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  renderQuantitySelection() {
    return (
      <div>
        <strong>Quantity:</strong>
        <input
          className="select"
          id="number"
          type="number"
          value={this.state.quantity}
          min="1"
          max="100"
          onChange={event => this.setState({ quantity: Math.round(event.target.value) })}
        />
      </div>
    );
  }

  renderButton() {
    const { product, variantIndex } = this.state;

    if (product.variants[variantIndex].available) {
      return <Button label="Add to cart" onClick={() => this.addToCart()} color="light long" />;
    } else {
      return (
        <div>
          <p>
            <i>Special item, please contact sales.</i>
          </p>
          <Button label="Contact Sales" url="/contact/" internal color="light long" />
        </div>
      );
    }
  }

  render() {
    const { product, addedToCheckout, variantIndex } = this.state;

    if (!product) {
      return (
        <section className="product-wrapper">
          <h1>Loading...</h1>
          <SpinnerLoader />
        </section>
      );
    }

    if (addedToCheckout) {
      navigate("/store/cart/");
    }

    return (
      <section className="product-wrapper">
        <div className="information">
          <ProductPictures images={product.images} />
          <div className="details">
            <h1 className="pull-left">{product.title}</h1>
            <h2 className="pull-left price">${product.variants[variantIndex].price} USD</h2>
            {this.renderOptionSelection()}
            {this.renderQuantitySelection()}
            {this.renderButton()}
          </div>
        </div>
        <h2 className="pull-left">Description</h2>
        <div className="description" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        {this.renderRelevantProducts()}
      </section>
    );
  }
}

//
