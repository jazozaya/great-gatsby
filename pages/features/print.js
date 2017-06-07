import React from 'react'
import Helmet from 'react-helmet'

import Gallery from 'components/gallery'
import Print from 'components/features/print'
import { printGallery } from 'components/gallery/constants'

export default class MyPrint extends React.Component {

  render() {
    return (
      <div>
        <Print />
        <Gallery
          title="From the Community"
          description="The following projects have been made by members of our community. Visit our forums to join in on the conversation!"
          gallery= {printGallery}
          />
      </div>
    )
  }
}
