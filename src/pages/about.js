import React from "react";
import Helmet from "react-helmet";

import About from "components/about";
import Awards from "components/common/awards";
import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | About Us</title>
      <meta name="description" content="Learn about the history and culture at Voltera" />
    </Helmet>
    <About />
    <Awards />
  </Layout>
);
