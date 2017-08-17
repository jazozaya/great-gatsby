import React from 'react'
import Helmet from 'react-helmet'

import CallToAction from 'components/common/cta';
import FAQ from 'components/faq'

export default class Faq extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | FAQ</title>
          <meta name="description" content="Frequently asked questions about the V-One and the technology behind it." />
        </Helmet>
        <FAQ />
        <CallToAction
            title="Can't find what you are looking for?"
            subtitle="Let's book a time to talk."
            label="Schedule Call"
            url="/requestCall"
          />
      </div>
    )
  }
}
