import React from 'react'
import { Link } from 'react-router'
//import { HashLink as Link } from 'react-router-hash-link';
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import CallToAction from 'components/cta';
import Awards from 'components/awards'
import FeatureSelector from 'components/featureSelector'

import Hero from 'components/hero'
import Testimonial from 'components/testimonial'

import "css/main.scss"

export default class Index extends React.Component {
  render() {
    return (
      <div className="page-content">
        <Hero />
        <Testimonial />
        <FeatureSelector/>
        <h1>
          Welcome to Voltera!!!!
        </h1>
        <p>Are you ready to build hardware faster!?! Cause I sure am. </p>
        <p>Let's do this!</p>
        <ul>
          <li>
            <Link to={prefixLink('/specs/')}>Go to page Specs</Link>
          </li>
          <li>
            <Link to={prefixLink('/gallery/')}>Go to page Gallery</Link>
          </li>
        </ul>

        <Awards />
        <CallToAction
          title="Want to request a quote?"
          subtitle="We can help you with that!"
          label="Request Quote"
          url="this is my url"
        />
      </div>
    )
  }
}
