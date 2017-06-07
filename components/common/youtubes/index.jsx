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

    renderStaticImage() {
      const { url } = this.props;
      return <a><img onClick={() => this.setState({ playVideo: true})} src={url}></img></a>
    }

    renderVideo() {
      const { videoId } = this.props;
      return <Youtube videoId={videoId} opts={opts}/>
    }

    render() {
      return (
        <div className="youtube-wrapper">
          {this.state.playVideo ? this.renderVideo() : this.renderStaticImage()}
        </div>
      );
    }
  }
