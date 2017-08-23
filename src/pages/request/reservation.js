import React from 'react'
import Helmet from 'react-helmet'

import RequestReservation from 'components/request/reservation'
import CustomerQuotes from 'components/common/customer'

export default class MyCall extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Reserve a unit</title>
          <meta name="description" content="Fill out this form to reserve your unit and put it on hold!" />
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <RequestReservation />
        <CustomerQuotes />
      </div>
    )
  }
}
