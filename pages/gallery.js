import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import DummyHeader from 'components/common/dummyHeader'

import CallToAction from 'components/cta';
import Gallery from 'components/gallery'

export default class MyGallery extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Gallery />
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
        <CallToAction
            title="Want to see more?"
            subtitle="Visit our forums to see what community is up to."
            label="Visit Forums"
            url="http://community.voltera.io"
          />
      </div>
    )
  }
}
