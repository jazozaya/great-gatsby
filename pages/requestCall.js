import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'

import RequestCall from 'components/request/call'
import Testimonial from 'components/testimonial'

export default class MyQuote extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <RequestCall />
        <Testimonial />
      </div>
    )
  }
}
