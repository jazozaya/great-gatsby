import React from "react";
import Youtube from "react-youtube";
import Img from "gatsby-image";
import { isMobile } from "../../../constants";

// Simple Wrapper so we don't have to keep including the opts.
const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    color: "white",
    controls: 2,
    rel: 0,
    showinfo: 0,
    autoplay: 1
  }
};

export default class YouTube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playVideo: false,
      isMobile: false
    };

    // if (typeof window !== "undefined") {
    //   this.state.screenWidth = window.innerWidth
    // }
  }

  componentDidMount() {
    this.setState({isMobile: isMobile(), screenWidth: window.innerWidth})
  }

  renderStaticImage() {
    const { fluid } = this.props;
    const imgStyle = { cursor: "pointer" };
    return (
      <div style={imgStyle} onClick={() => this.setState({ playVideo: true })}>
        <Img fluid={fluid} />
      </div>
    );
  }

  renderVideo(width, height) {
    const { videoId } = this.props;
    opts.width = width;
    opts.height = height;
    return <Youtube videoId={videoId} opts={opts} />;
  }

  renderContent(width, height) {
    // Mobile devices don't autoplay, so load the youtube video from the start.
    if (this.state.isMobile || this.state.playVideo || this.props.noThumbnail) {
      return this.renderVideo(width, height);
    }
    return this.renderStaticImage();
  }

  render() {
    const { width } = this.props;

    // Need to check window size in case of mobile. But window is undefined during compilation.
    var width_int = Math.min(this.state.screenWidth - 40, width); // Trim in case of mobile.
    const width_s = width_int.toString(); // Ensure we store width as a string.
    const height_s = Math.round(width_int / (640 / 360)).toString(); // Find the corresponding height to preserve the aspect ratio.

    return this.renderContent(width_s, height_s);
  }
}

YouTube.defaultProps = {
  width: 640,
  noThumbnail: false
};
