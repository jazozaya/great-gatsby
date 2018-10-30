import React from "react";

import Layout from "components/layout";
import Main from "components/main";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Main />
  </Layout>
);
