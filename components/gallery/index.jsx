import React from 'react'
import './gallery.scss'

import Lightbox from './lightbox'

import { images } from './constants';

export default class Gallery extends React.Component {

  renderGrid() {
    // Generate our grid.
    return images.map((currentValue, index) =>
    <Lightbox
      key={currentValue.name+index.toString()}
      fileName={currentValue.name}
      subtitle={currentValue.subtitle}
      description={currentValue.description}
      />)
    }

    render() {

      return (<div className="gallery">
      <div className="gallery-wrapper">
        <h1>Gallery</h1>
        <p className="header-caption">The V-One is a flexible platform that can help you in every step of development. Just <strong>click on any picture</strong> below to learn more.</p>
      </div>
      <div className="gallery-grid-wrapper">
        {this.renderGrid()}
      </div>
    </div>);
  }
}
