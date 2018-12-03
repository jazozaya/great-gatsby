import React from "react";

import Layout from "components/layout";
import Secret from "components/secret";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Secret />
  </Layout>
);
