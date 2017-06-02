import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'

import RequestQuote from 'components/requestQuote'
import CustomerQuotes from 'components/common/customer'

export default class MyCall extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <RequestQuote />
        <CustomerQuotes />
      </div>
    )
  }
}
