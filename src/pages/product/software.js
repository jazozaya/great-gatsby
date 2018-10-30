import React from "react";
import Helmet from "react-helmet";

import Layout from "components/layout";
import Software from "components/product/software";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Desktop Software</title>
      <meta
        name="description"
        content="Skip the instruction manual, our desktop application has been designed for the first time user and will get you printing in minutes."
      />
    </Helmet>
    <Software />
  </Layout>
);
