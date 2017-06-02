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

import "css/main.scss"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Testimonial />
        <FeatureSelector/>
        <CustomerQuotes />
        <ul>
          <li>
            <Link to={prefixLink('/specs/')}>Go to page Specs</Link>
          </li>
          <li>
            <Link to={prefixLink('/product/')}>Go to page Product</Link>
          </li>
        </ul>
        <p> TODO: helmet nonesense, SEO links (pre-rendering)
        </p>
        <Awards />
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
