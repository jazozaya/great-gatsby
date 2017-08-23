import React from 'react'
import Helmet from 'react-helmet'

import RequestCall from 'components/request/call'
import Awards from 'components/common/awards'

export default class MyQuote extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Schedule a Call</title>
          <meta name="description" content="Want to talk? Have questions about how it works? Schedule a call with us. We can help!." />
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <RequestCall />
        <Awards />
      </div>
    )
  }
}
