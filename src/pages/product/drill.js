import React from "react";
import Helmet from "react-helmet";

import Layout from "components/layout";
import Drill from "components/product/drill";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Drill Holes </title>
      <meta name="description" content="The V-One Drill can drill all your holes automatically. Creating 2 layered boards is a breeze." />
    </Helmet>
    <Drill />
  </Layout>
);
