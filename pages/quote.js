import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'

import QuoteRequest from 'components/quoteRequest'
import CustomerQuotes from 'components/customer'

export default class MyQuote extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <QuoteRequest />
        <CustomerQuotes />
      </div>
    )
  }
}
