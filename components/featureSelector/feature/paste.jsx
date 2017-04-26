import React from 'react'
import Youtube from 'react-youtube'
import LazyLoad from 'react-lazy-load';

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
          videoId="NdJQ5Xl4jkw"
          opts={opts}
      />
      <div className="description">
        <h2>Dispense Solder Paste</h2>
        <p>Say goodbye to stencils and <strong>cut your assembly time in half.</strong> Assembling boards is easy with the V-One.</p>
        <p>Focus on designing, not soldering. Whether you got them from a factory, or printed them with the V-One - just mount your board and off you go. (wording)</p>
        <p>It is quick turn PCBA at your desk!</p>
      </div>
    </div>
    <Gallery/>
  </div>);
}
}
