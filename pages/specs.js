import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import DummyHeader from 'components/common/dummyHeader'


import Specs from 'components/specs'
import Hero from 'components/hero'

export default class Spec extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Hero/>
        <Specs />
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
      </div>
    )
  }
}
