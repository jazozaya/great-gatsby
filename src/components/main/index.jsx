import React from 'react'
import Link from 'gatsby-link'

import Helmet from 'react-helmet'

import CallToAction from 'components/common/cta';
import Awards from 'components/common/awards'
import CustomerQuotes from 'components/common/customer'

import Hero from './hero'
import Testimonial from './testimonial'
import FeatureSelector from './featureSelector'
import BenefitsSelector from './benefitsSelector'
import Summary from './summary'

import "css/main.scss"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Summary />
        <FeatureSelector/>
        <Testimonial />
        <BenefitsSelector />
        <p> TODO: helmet nonesense, SEO links (pre-rendering)</p>
        <CustomerQuotes />
        <Awards />
        <CallToAction
          title="Want to schedule a call?"
          subtitle="Let's find a time to talk!"
          label="Schedule Call"
          url="/requestCall/"
        />
      </div>
    )
  }
}
