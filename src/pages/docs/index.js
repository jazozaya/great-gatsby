import React from "react";
import Helmet from "react-helmet";
import Docs from "components/docs";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Documentation & Tutorials</title>
      <meta name="description" content="Tutorials, User Guides and Troubleshooting tips." />
    </Helmet>
    <Docs />
  </Layout>
);
