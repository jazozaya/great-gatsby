import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby'
import queryString from "query-string";

import Layout from "components/layout";
import Landing from "components/request/landing";

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
          videoId="PeW1nURJ5ww"
          thumbFluid={this.props.data.thumbnail.childImageSharp.fluid}
          sourceDetails={sourceDetails}
          landingType="Landing - Print Promo"
          thankYou="q=promo-print"
          description="Go from concept to creation in minutes!"
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    thumbnail: file(relativePath: { eq: "landing/PeW1nURJ5ww.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
