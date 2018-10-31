import React from "react";
import Helmet from "react-helmet";
import queryString from "query-string";

import Landing from "components/request/landing";
import Layout from "components/layout";

import thumbPath from "components/request/thumbnail/8oWg8hP9FLc.jpg";

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
          videoId="8oWg8hP9FLc"
          thumbPath={thumbPath}
          sourceDetails={sourceDetails}
          landingType="Landing - Solder Walkthrough"
          thankYou="q=walkthrough-solder"
          description="A quick overview of our tool. Let us know if you'd like more information."
        />
      </Layout>
    );
  }
}
