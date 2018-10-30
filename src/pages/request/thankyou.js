import React from "react";
import Helmet from "react-helmet";

import ThankYou from "components/request/thankyou";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Thank you!</title>
      <meta name="description" content="We appreciate your input" />
    </Helmet>
    <ThankYou />
  </Layout>
);
