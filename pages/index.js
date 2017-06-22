import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import CallToAction from 'components/common/cta';
import Awards from 'components/awards'
import FeatureSelector from 'components/featureSelector'

import Hero from 'components/hero'
import Testimonial from 'components/testimonial'
import CustomerQuotes from 'components/common/customer'
import Benefits from 'components/benefits'

import "css/main.scss"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Awards />
        <CustomerQuotes />
        <FeatureSelector/>
        <Testimonial />
        <Benefits />
        <p> TODO: helmet nonesense, SEO links (pre-rendering)</p>
        <CallToAction
          title="Want to schedule a call?"
          subtitle="Let's find a time to talk!"
          label="Request Call"
          url="/requestCall/"
        />
      </div>
    )
  }
}
