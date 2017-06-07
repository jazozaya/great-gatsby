import React from 'react'
import Helmet from 'react-helmet'
import CallToAction from 'components/common/cta';
import Gallery from 'components/gallery'

import { communityImages } from 'components/gallery/constants'

export default class MyGallery extends React.Component {

  render() {
    return (
      <div>
        <Gallery
          title="From the Community"
          description="The following projects have been made by members of our community. Visit our forums to join in on the conversation!"
          gallery= {communityImages}
          />
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
