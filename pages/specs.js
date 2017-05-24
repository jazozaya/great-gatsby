import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import DummyHeader from 'components/common/dummyHeader'

import Specs from 'components/specs'
import CallToAction from 'components/cta';

export default class Spec extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Specs />
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
        <CallToAction
            title="Want to share with your colleagues?"
            subtitle="Download our technical datasheet"
            label="Download"
            url="/assets/docs/V-One-Summary.pdf"
          />
      </div>
    )
  }
}
