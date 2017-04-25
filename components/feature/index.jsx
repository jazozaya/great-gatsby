import React from 'react'
import Youtube from 'react-youtube'
import Gallery from './gallery'

import './feature.scss'

export default class Feature extends React.Component {

  render() {

    const opts = {
       playerVars: { // https://developers.google.com/youtube/player_parameters
         color: 'white',
         controls: 2,
         rel: 0,
         showinfo: 0,
       }
     };


    return (<div className="feature">
    <div className="feature-wrapper">
      <Youtube
        videoId="PeW1nURJ5ww"
        className="testic"
        opts={opts}
        />
      <div className="description">
        <h2>Create your own Circuit Boards</h2>
        <p> The Voltera V-One creates two layer prototype circuit boards on your desk. Gerber files go in - printed circuit boards come out. The dispenser lays down a silver-based conductive ink to print your circuit right before your eyes.</p>
      </div>
    </div>
    <Gallery />
  </div>);
}
}
