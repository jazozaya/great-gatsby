import React from 'react'
import Helmet from 'react-helmet'

import CallToAction from '../components/common/cta';
import FAQ from '../components/faq'

export default class Faq extends React.Component {

  render() {
    return (
      <div>
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
