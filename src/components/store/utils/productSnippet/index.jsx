import React from "react";
import { Link } from "gatsby";

import Button from "components/common/button";
import Spinner from "components/common/spinnerLoader";
import { fetchRecentCheckout, addItemtoCheckout } from "components/store/api";

import "./productSnippet.scss";

const status = {
  ready: "ready",
  adding: "adding",
  added: "added"
};

export default class ProductSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: status.ready
    };
  }

  addToCart() {
    const { product } = this.props;
    this.setState({ status: status.adding });

    const lineItems = [
      {
        variantId: product.variantId,
        quantity: 1
      }
    ];
    fetchRecentCheckout()
      .then(checkout => addItemtoCheckout(checkout.id, lineItems))
      .then(checkout => this.setState({ status: status.added }));
  }

  renderAddToCart() {
    switch (this.state.status) {
      case status.ready:
        return (
          <div className="add-to-cart">
            <Button label="Add to cart" onClick={() => this.addToCart()} color="light long" />
          </div>
        );
      case status.adding:
        return <Spinner mini />;
      case status.added:
        setTimeout(() => this.setState({ status: status.ready }), 1000);
        return (
          <p className="pull-center">
            <strong>Added!</strong>
          </p>
        );
      default:
        console.error("Unknown Status in adding to cart");
    }
  }

  renderInternal(product, destination) {
    return (
      <div className="product-snippet">
        <Link to={destination}>
          <div className="pull-center">
            <img src={product.image} alt="" />
          </div>
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          {<p className="description">{product.description}</p>}
        </Link>
        {this.renderAddToCart()}
      </div>
    );
  }

  renderExternal(product, destination) {
    return (
      <div className="product-snippet">
        <a href={destination}>
          <div className="pull-center">
            <img src={product.image} alt="" />
          </div>
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
        </a>
        {this.renderAddToCart()}
      </div>
    );
  }

  render() {
    const { product, collectionId, external } = this.props;
    // A collection ID might not have been passed in.
    var destination = `/store/product/?productId=${product.id}`;
    if (collectionId) {
      destination = `${destination}&collectionId=${collectionId}`;
    }

    return external ? this.renderExternal(product, destination) : this.renderInternal(product, destination);
  }
}
