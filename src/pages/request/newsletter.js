import React from 'react'
import Helmet from 'react-helmet'
import queryString from 'query-string'

import RequestNewsletter from 'components/request/newsletter'

export default class MyLanding extends React.Component {

  render() {
    const { wistiaId } = queryString.parse(this.props.location.search)
    const useWistia = wistiaId || "jelgx45pis" // Fallback so we always show something.
    // qot63bbppz
    return (
      <div>
        <Helmet>
          <title>Voltera | A Video for You! </title>
          <meta name="description" content="We've prepared a video just for you!" />
          <script src={`https://fast.wistia.com/embed/medias/${useWistia}.jsonp`} async></script>
          <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <RequestNewsletter wistiaId={useWistia}/>
      </div>
    )
  }
}
