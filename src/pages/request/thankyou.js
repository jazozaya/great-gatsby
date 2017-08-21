import React from 'react'
import Helmet from 'react-helmet'

import ThankYou from 'components/request/thankyou'

export default class MyCall extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Thank you!</title>
          <meta name="description" content="We appreciate your input" />
        </Helmet>
        <ThankYou/>
      </div>
    )
  }
}
