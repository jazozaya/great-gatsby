import React from "react";
import Helmet from "react-helmet";
import Refund from "components/docs/refund";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Refund Policy</title>
      <meta name="description" content="Learn about our return policy and exchanges." />
    </Helmet>
    <Refund />
  </Layout>
);
