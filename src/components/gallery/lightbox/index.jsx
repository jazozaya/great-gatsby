import React from 'react'
import './lightbox.scss'
import Youtube from 'react-youtube'

export default class Lightbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lightboxOn: false,
      windowWidth: 1920
    };
  }

  componentDidMount() {
      this.setState({ windowWidth: window.innerWidth })
  }

  toggleLightbox() {
    this.setState( { lightboxOn: !this.state.lightboxOn})
  }

  renderNormal() {
    const { fileName, subtitle } = this.props;
    const urlName = `/gallery/thumbnail/${fileName}`
    return (
      <div className="no-lightbox">
        <img src={urlName} onClick={() => this.toggleLightbox()}/>
        <p><i>{subtitle}</i></p>
      </div>
    );
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

     if (this.state.windowWidth < 600) {
       var width_int = this.state.windowWidth - 40 // Trim in case of mobile.
       const width_s = width_int.toString() // Ensure we store width as a string.
       const height_s = Math.round(width_int / (640/360)).toString() // Find the corresponding height to preserve the aspect ratio.
       opts.width = width_s;
       opts.height = height_s;
     }

    return <Youtube videoId={videoId} opts={opts}/>;
  }

  renderImage(fileName) {
    const urlName = `/gallery/large/${fileName}`
    return <img src={urlName} onClick={() => this.toggleLightbox()} />
  }

  renderLightbox() {
    const { fileName, description, subtitle, videoId, isVideo, source } = this.props;
    return (
      <div className="lightbox" onClick={() => this.toggleLightbox()}>
        <div className="lightbox-content">
          {isVideo ? this.renderVideo(videoId) : this.renderImage(fileName)}
           <h1>{subtitle}</h1>
          <p>{description}</p>
          {source ? <p><a target="_blank" href={source}>(Source)</a></p> : null}
        </div>
      </div>
    );
  }

  render() {
    return this.state.lightboxOn ? this.renderLightbox(): this.renderNormal()
  }
}
