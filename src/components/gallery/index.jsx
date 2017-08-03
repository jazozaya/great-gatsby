import React from 'react'
import './gallery.scss'

import Lightbox from './lightbox'

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

    render() {

      const { title, description, gallery } = this.props;

      return (
        <section>
          <h1>{title}</h1>
          <p className="pull-center">{description}</p>
          <div className="flex-row gallery">
            {this.renderGrid(gallery)}
          </div>
        </section>
      );
    }
  }
