import React from "react";
import Helmet from "react-helmet";
import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <section className="not-found">
      <Helmet>
        <title>Voltera | Page Not Found (404)</title>
        <meta name="description" content="We recently updated our website and it's possible we broke some things along the way. Sorry!" />
      </Helmet>
      <h1>Uh Oh! 404 Page not found!</h1>
      <p>You've requested a page that does not exist anymore.</p>
      <p>
        We recently updated our website and it's possible we broke some things along the way. Please let us know what you are looking for by
        emailing <strong>support@voltera.io</strong>.
      </p>
    </section>
  </Layout>
);
