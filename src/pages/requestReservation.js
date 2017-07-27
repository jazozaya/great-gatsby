import React from 'react'
import Helmet from 'react-helmet'

import RequestReservation from '../components/request/reservation'
import CustomerQuotes from '../components/common/customer'

export default class MyCall extends React.Component {

  render() {
    return (
      <div>
        <RequestReservation />
        <CustomerQuotes />
      </div>
    )
  }
}
