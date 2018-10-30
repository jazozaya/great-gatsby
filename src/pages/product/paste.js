import React from "react";
import Helmet from "react-helmet";

import Layout from "components/layout";
import Paste from "components/product/paste";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Solder Paste and Reflow</title>
      <meta
        name="description"
        content="Ditch the stencil and the soldering iron. Just mount your boards on the V-One and dispense paste in minutes."
      />
    </Helmet>
    <Paste />
  </Layout>
);
