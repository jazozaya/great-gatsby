import React from "react";
import Helmet from "react-helmet";

import RequestQuote from "components/request/quote";
import CustomerQuotes from "components/common/customer";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Request a Quote</title>
      <meta name="description" content="Fill out this form to request a formal quotation." />
      <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js" />
    </Helmet>
    <RequestQuote />
    <CustomerQuotes />
  </Layout>
);
