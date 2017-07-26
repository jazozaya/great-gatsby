import React from 'react'
import Helmet from 'react-helmet'

import RequestCall from 'components/request/call'
import Awards from 'components/common/awards'

export default class MyQuote extends React.Component {

  render() {
    return (
      <div>
        <RequestCall />
        <Awards />
      </div>
    )
  }
}
