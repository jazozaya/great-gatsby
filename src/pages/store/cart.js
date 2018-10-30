import React from "react";
import Helmet from "react-helmet";
import Cart from "components/store/cart";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Cart</title>
      <meta name="description" content="Your shopping cart. Are you ready to checkout?" />
    </Helmet>
    <Cart />
  </Layout>
);
