import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import DummyHeader from 'components/common/dummyHeader'

import CallToAction from 'components/common/cta';
import FAQ from 'components/faq'

export default class Faq extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <h1>THIS PAGE NEEDS TO HAVE PROPER LINKS</h1>
        <FAQ />
        <CallToAction
            title="Can't find what you are looking for?"
            subtitle="Let's book a time to talk."
            label="Schedule Call"
            url="this is my url"
          />
      </div>
    )
  }
}
