import React from 'react'
import Helmet from 'react-helmet'
import queryString from 'query-string'

import Landing from 'components/request/landing'

export default class MyLanding extends React.Component {

  render() {

    const {utm_source, utm_medium, utm_campaign, utm_term, utm_content } = queryString.parse(this.props.location.search)

    const sourceDetails = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content
    }

    return (
      <div>
        <Helmet>
          <title>Voltera | A Video for You! </title>
          <meta name="description" content="We've prepared a video just for you!" />
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <Landing videoId="NdJQ5Xl4jkw" sourceDetails={sourceDetails} landingType="Landing - Solder"/>
      </div>
    )
  }
}
