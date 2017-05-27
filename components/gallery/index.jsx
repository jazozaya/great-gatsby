import React from 'react'
import './gallery.scss'

import Lightbox from './lightbox'

import { volteraImages, communityImages } from './constants';

export default class Gallery extends React.Component {

  renderGrid(images) {
    // Generate our grid.
    return images.map((currentValue, index) =>
    <Lightbox
      key={currentValue.name+index.toString()}
      fileName={currentValue.fileName}
      subtitle={currentValue.subtitle}
      description={currentValue.description}
      isVideo={currentValue.isVideo}
      videoId={currentValue.videoId}
      />)
    }

    //
    // Under the microscope.
    // In the lab.
    // From the community
    // Fun stuff

    render() {

      return (<div className="gallery">
      <div className="gallery-wrapper">
        <h1>Gallery</h1>
        <p className="header-caption">The V-One is a flexible platform that can help you in every step of development. Just <strong>click on any picture</strong> below to learn more.</p>
      </div>
      <div className="gallery-grid-wrapper">
        {this.renderGrid(volteraImages)}
      </div>
      <div className="gallery-wrapper">
        <h1>From the Community</h1>
        <p className="header-caption">The following projects have been made by members of our community. Visit our forums to join in on the conversation!</p>
      </div>
      <div className="gallery-grid-wrapper">
        {this.renderGrid(communityImages)}
      </div>

    </div>);
  }
}
