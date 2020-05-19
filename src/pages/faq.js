import React from 'react';
import Helmet from 'react-helmet';

import CallToAction from 'components/common/cta';
import FAQ from 'components/faq';
import Layout from 'components/layout';

const buttonOne = {
  label: 'Get A Quote',
  url: '/request/quote/',
  internal: true,
};

export default (props) => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | FAQ</title>
      <meta name='description' content='Frequently asked questions about the V-One and the technology behind it.' />
    </Helmet>
    <FAQ />
    <CallToAction title='Want to get specifics?' subtitle="Let's build a quote for you!" buttonOne={buttonOne} />
  </Layout>
);
