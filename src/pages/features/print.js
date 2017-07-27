import React from 'react'
import Helmet from 'react-helmet'

import Print from 'components/features/print'
import CallToAction from 'components/common/cta';

export default class MyPrint extends React.Component {

  render() {
    return (
      <div>
        <Print />
        <CallToAction
          title="Want to request a quote?"
          subtitle="We can help you with that!"
          label="Request Quote"
          url="/requestQuote/"
        />
      </div>
    )
  }
}
