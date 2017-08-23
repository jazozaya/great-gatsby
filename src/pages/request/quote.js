import React from 'react'
import Helmet from 'react-helmet'

import RequestQuote from 'components/request/quote'
import CustomerQuotes from 'components/common/customer'

export default class MyCall extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Request a Quote</title>
          <meta name="description" content="Fill out this form to request a formal quotation." />
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <RequestQuote />
        <CustomerQuotes />
      </div>
    )
  }
}
