import React from 'react'
import './lightbox.scss'

import Picture from 'components/common/picture'

export default class Lightbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lightboxOn: false
    };
  }

  toggleLightbox() {
    this.setState( { lightboxOn: !this.state.lightboxOn})
  }

  renderNormal() {
    const { fileName, subtitle } = this.props;
    const urlName = `/assets/gallery/thumbnail/${fileName}`
    return <Picture url={urlName} onClick={() => this.toggleLightbox()} subtitle={subtitle} />
  }

  renderLightbox() {

    const { fileName, description, subtitle } = this.props;
    const urlName = `/assets/gallery/large/${fileName}`

    return (
      <div className="lightbox">
        <div className="lightbox-wrapper" onClick={() => this.toggleLightbox()}>
          <div className="lightbox-content">
            <img src={urlName} onClick={() => this.toggleLightbox()} />
            <h1>{subtitle}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return this.state.lightboxOn ? this.renderLightbox(): this.renderNormal()
  }
}
