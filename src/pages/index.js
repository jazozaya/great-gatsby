import React from "react";

import Layout from "components/layout";
import Home from "components/home";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Home />
  </Layout>
);
