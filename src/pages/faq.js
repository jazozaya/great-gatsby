import React from "react";
import Helmet from "react-helmet";

import CallToAction from "components/common/cta";
import FAQ from "components/faq";
import Layout from "components/layout";

const buttonOne = {
  label: "Book a Call",
  url: "/request/call/",
  internal: true
};

const buttonTwo = {
  label: "Get A Quote",
  url: "/request/quote/",
  internal: true
};

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | FAQ</title>
      <meta name="description" content="Frequently asked questions about the V-One and the technology behind it." />
    </Helmet>
    <FAQ />
    <CallToAction title="Want to get in touch?" subtitle="Let's find a time to talk!" buttonOne={buttonOne} buttonTwo={buttonTwo} />
  </Layout>
);
