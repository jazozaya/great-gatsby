import React from 'react';
import Helmet from 'react-helmet';
import RMA from 'components/legal/rma';

import Layout from 'components/layout';

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | Return Merchandise Authorization</title>
      <meta name='description' content='Customer form to process repairs.' />
      <script defer='defer' type='text/javascript' src='https://cdn.emailjs.com/dist/email.min.js' />
    </Helmet>
    <RMA />
  </Layout>
);
