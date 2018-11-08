import React from "react";
import "./lightbox.scss";
import YouTube from "components/common/youtube";

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
    return <YouTube width={maxWidth} videoId={videoId} noThumbnail />;
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
