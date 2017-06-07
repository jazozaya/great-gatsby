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

      const { title, description, gallery } = this.props;

      return (
        <div className="gallery">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="gallery-grid-wrapper">
            {this.renderGrid(gallery)}
          </div>
        </div>);
      }
    }
