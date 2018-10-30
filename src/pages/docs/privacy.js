import React from "react";
import Helmet from "react-helmet";
import Privacy from "components/docs/privacy";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Privacy Policy</title>
      <meta name="description" content="We take privacy seriously. Learn about our privacy policy here." />
    </Helmet>
    <Privacy />
  </Layout>
);
