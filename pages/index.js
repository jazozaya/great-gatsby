import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import CallToAction from 'components/cta'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Welcome to Voltera!!!!
        </h1>
        <p>Are you ready to build hardware faster!?! Cause I sure am. </p>
        <p>Let's do this!</p>
        <Link to={prefixLink('/Hello/')}>Go to page 2</Link>
        <CallToAction
          title="Build Hardware Faster"
          subtitle="Request a quote"
          label="This is my label"
          url="this is my url"
        />
      </div>
    )
  }
}
