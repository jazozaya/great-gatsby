import React from "react";
import SpinnerLoader from "components/common/spinnerLoader";
import ProductSnippet from "components/store/utils/productSnippet";
import SearchBar from "components/store/utils/searchBar";

import { fetchAllProducts } from "components/store/api";
import s from "./search.module.scss";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null // Instance of our product.
    };

    const { search } = this.props;
    fetchAllProducts(search).then(products => this.setState({ products: products }));
  }

  renderResults() {
    const { products } = this.state;

    if (!products) {
      return <SpinnerLoader />;
    }

    if (products.length === 0) {
      return (
        <p>
          We are sorry, not results found. Please contact <strong>sales@voltera.io</strong> if you cannot find what you are looking for.
        </p>
      );
    }

    return products.map((product, index) => <ProductSnippet key={index} product={product} />);
  }

  render() {
    return (
      <section className={s.wrapper}>
        <h1>Your search results</h1>
        <p>
          Your search for{" "}
          <strong>
            <i>{this.props.search}</i>
          </strong>{" "}
          revealed the following:
        </p>
        <SearchBar />
        <div className={s.resultsGallery}>{this.renderResults()}</div>
      </section>
    );
  }
}
