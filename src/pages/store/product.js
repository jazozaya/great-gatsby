import React from "react";
import queryString from "query-string";

import Layout from "components/layout";
import Product from "components/store/product";

export default class MySwag extends React.Component {
  render() {
    const { productId, collectionId } = queryString.parse(this.props.location.search);
    return (
      <Layout pathname={this.props.location.pathname}>
        <Product productId={productId} collectionId={collectionId} />
      </Layout>
    );
  }
}
