import React from "react";
import Helmet from "react-helmet";

import RequestCall from "components/request/call";
import Awards from "components/common/awards";

import Layout from "components/layout";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Schedule a Call</title>
      <meta name="description" content="Want to talk? Have questions about how it works? Schedule a call with us. We can help!" />
      <script type='text/javascript' defer="defer" src='https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js' />
    </Helmet>
    <RequestCall />
    <Awards />
  </Layout>
);
