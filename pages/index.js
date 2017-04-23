import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import Hero from 'components/hero'
import Specs from 'components/specs'


import "css/main.scss"

export default class Index extends React.Component {
  render() {
    return (
      <div className="content">
        <Hero />
        <Specs />
        <h1>
          Welcome to Voltera!!!!
        </h1>
        <p>Are you ready to build hardware faster!?! Cause I sure am. </p>
        <p>Let's do this!</p>
        <Link to={prefixLink('/page-2/')}>Go to page 2</Link>
      </div>
    )
  }
}
