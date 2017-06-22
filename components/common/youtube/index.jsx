import React from 'react'
import Youtube from 'react-youtube'

// Simple Wrapper so we don't have to keep including the opts.
const opts = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    color: 'white',
    controls: 2,
    rel: 0,
    showinfo: 0,
    autoplay: 1
  }
}

  export default class YouTube extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        playVideo: false,
      };
    }

    renderStaticImage(width, height) {
      const { url } = this.props;
      return <a><img width={width} height={height} onClick={() => this.setState({ playVideo: true})} src={url}></img></a>
    }

    renderVideo(width, height) {
      const { videoId } = this.props;
      opts.width = width
      opts.height = height
      return <Youtube videoId={videoId} opts={opts}/>
    }

    render() {

      const { width } = this.props; // Might be in string or integer form.
      var width_int = Math.min(window.innerWidth - 40, width) // Trim in case of mobile.

      const width_s = width_int.toString() // Ensure we store width as a string.
      const height_s = Math.round(width_int / (640/360)).toString() // Find the corresponding height to preserve the aspect ratio.

      // We apply the css dynamically since we do not know width ahead of time.
      var divStyle = {
        width: `${width_s}px`,
        height: `${height_s}px`
      };

      return (
        <div className="youtube-wrapper" style={divStyle}>
          {this.state.playVideo ? this.renderVideo(width_s, height_s) : this.renderStaticImage(width_s, height_s)}
        </div>
      );
    }
  }


YouTube.defaultProps = {
  width: 640
}
