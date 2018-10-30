import React from "react";
import Helmet from "react-helmet";
import Main from "components/store/main";
import StoreHero from "components/store/utils/storeHero";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Store</title>
      <meta
        name="description"
        content="From Arduino templates to empty ink cartridges, you will find everything you need to build hardware faster here."
      />
    </Helmet>
    <StoreHero />
    <Main />
  </Layout>
);
