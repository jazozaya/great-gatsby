import React from "react";
import Helmet from "react-helmet";
import Layout from "components/layout";

import Privacy from "components/legal/tos";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Terms of Service</title>
      <meta name="description" content="Learn about our warranty and our terms & conditions." />
    </Helmet>
    <Privacy />
  </Layout>
);
