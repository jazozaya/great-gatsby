import React from "react";
import Helmet from "react-helmet";

import Layout from "components/layout";
import Print from "components/product/print";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Printing circuit boards is easy</title>
      <meta
        name="description"
        content="The Voltera V-One uses an additive approach to create circuit boards. Ink is dispensed precisely where it is needed without any waste."
      />
    </Helmet>
    <Print />
  </Layout>
);
