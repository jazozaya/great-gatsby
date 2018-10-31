import React from "react";
import Bowser from "bowser";
import "./lightbox.scss";
import Youtube from "react-youtube";

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxOn: false
    };
  }

  toggleLightbox() {
    this.setState({ lightboxOn: !this.state.lightboxOn });
  }

  renderNormal() {
    const { thumbnailURL, subtitle } = this.props;
    return (
      <div className="no-lightbox">
        <img src={thumbnailURL} onClick={() => this.toggleLightbox()} alt="" />
        <p>
          <i>{subtitle}</i>
        </p>
      </div>
    );
  }

  renderVideo() {
    const { videoId, maxWidth } = this.props;

    const opts = {
      height: "450",
      width: "800",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        color: "white",
        controls: 2,
        rel: 0,
        showinfo: 0,
        autoplay: 1,
        enablejsapi: 1,
        origin: "http://localhost:8000/"
      }
    };

    // For certain videos, we don't want them fullscreen (this could be cleaned up, but I was being lazy)
    if (maxWidth) {
      const height = Math.round(parseInt(maxWidth) / (640 / 360));
      opts.width = maxWidth.toString();
      opts.height = height.toString();
    }

    // Trim down if it's mobile.
    if (Bowser.mobile && typeof window !== "undefined") {
      const width = window.innerWidth - 40;
      const height = Math.round(width / (640 / 360)); // Find the corresponding height to preserve the default aspect ratio.
      opts.width = width.toString();
      opts.height = height.toString();
    }

    return <Youtube videoId={videoId} opts={opts} />;
  }

  renderImage() {
    const { largeURL } = this.props;
    return <img src={largeURL} onClick={() => this.toggleLightbox()} alt="" />;
  }

  renderLightbox() {
    const { description, subtitle, source, videoId } = this.props;
    return (
      <div className="lightbox" onClick={() => this.toggleLightbox()}>
        <div className="lightbox-content">
          {videoId ? this.renderVideo() : this.renderImage()}
          <h2>{subtitle}</h2>
          <p>{description}</p>
          {source ? (
            <p>
              <a target="_blank" href={source} rel="noopener noreferrer">
                (Source)
              </a>
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  render() {
    return this.state.lightboxOn ? this.renderLightbox() : this.renderNormal();
  }
}
