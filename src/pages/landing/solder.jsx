import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby'
import queryString from "query-string";

import Landing from "components/request/landing";
import Layout from "components/layout";

export default class MyLanding extends React.Component {
  render() {
    const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = queryString.parse(this.props.location.search);

    const sourceDetails = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content
    };

    return (
      <Layout pathname={this.props.location.pathname}>
        <Helmet>
          <title>Voltera | A Video for You! </title>
          <meta name="description" content="We've prepared a video just for you!" />
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js" />
        </Helmet>
        <Landing
          videoId="NdJQ5Xl4jkw"
          thumbFluid={this.props.data.thumbnail.childImageSharp.fluid}
          sourceDetails={sourceDetails}
          landingType="Landing - Solder Promo"
          thankYou="q=promo-solder"
          description="Are you ready to build hardware faster?"
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    thumbnail: file(relativePath: { eq: "landing/NdJQ5Xl4jkw.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
