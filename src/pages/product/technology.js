import React from "react";
import Helmet from "react-helmet";

import Layout from "components/layout";
import Technology from "components/product/technology";

export default props => (
  <Layout pathname={props.location.pathname}>
    <Helmet>
      <title>Voltera | How it works</title>
      <meta
        name="description"
        content="The Voltera V-One dispenses conductive ink and solder paste onto FR4 and FR1, but really... you can use it for whatever you want."
      />
      <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js" />
    </Helmet>
    <Technology />
  </Layout>
);
