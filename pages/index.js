import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import CallToAction from 'components/common/cta';
import Awards from 'components/common/awards'
import FeatureSelector from 'components/main/featureSelector'

import Hero from 'components/main/hero'
import Testimonial from 'components/main/testimonial'
import CustomerQuotes from 'components/common/customer'
import BenefitsSelector from 'components/main/benefitsSelector'

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
        <BenefitsSelector />
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
