import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import DummyHeader from 'components/common/dummyHeader'

import CallToAction from 'components/cta';
import Gallery from 'components/gallery'

export default class Spec extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Gallery />
        <h1>Community Projects</h1>
        <Link to={prefixLink('/')}>Go back to the homepage</Link>

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
