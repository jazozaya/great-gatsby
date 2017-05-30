import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'
import CallToAction from 'components/common/cta';
import Gallery from 'components/gallery'

export default class MyGallery extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Gallery />
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
