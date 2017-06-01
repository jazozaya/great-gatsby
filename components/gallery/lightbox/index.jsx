import React from 'react'
import './lightbox.scss'
import Youtube from 'react-youtube'

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

  renderVideo(videoId) {
    const opts = {
       height: '450',
       width: '800',
       playerVars: { // https://developers.google.com/youtube/player_parameters
         color: 'white',
         controls: 2,
         rel: 0,
         showinfo: 0,
         autoplay: 1,
       }
     };
    return <Youtube videoId={videoId} opts={opts}/>;
  }

  renderImage(fileName) {
    const urlName = `/assets/gallery/large/${fileName}`
    return <img src={urlName} onClick={() => this.toggleLightbox()} />
  }

  renderLightbox() {
    const { fileName, description, subtitle, videoId, isVideo } = this.props;
    return (
      <div className="lightbox" onClick={() => this.toggleLightbox()}>
        <div className="lightbox-wrapper">
          <div className="lightbox-content">
            {isVideo ? this.renderVideo(videoId) : this.renderImage(fileName)}
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
//
// <div className="lightbox-content">
//   {isVideo ? this.renderVideo(videoId) : this.renderImage(fileName)}
//   <h1>{subtitle}</h1>
//   <p>{description}</p>
// </div>