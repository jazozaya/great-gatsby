import React from 'react'
import Youtube from 'react-youtube'
import LazyLoad from 'react-lazy-load';

import Highlights from './highlights'
import Picture from 'components/common/picture'
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
        videoId="3oCkXdwWpUY"
        opts={opts}
        />
      <div className="description">
        <h2>Software you love to use</h2>
        <p>Voltera’s software is designed to be understood. From importing your Gerber files to the moment you press print, the <strong>software walks you though each step</strong> with built in videos and tutorial.</p>
        <p>Compatible with <strong>EAGLE, Altium, KiCad, Mentor Graphics, Cadence, DipTrace and Upverter.</strong>Is your CAD tool not on this list?  Contact us to find out if we're compatible!</p>
      </div>
    </div>
    <Highlights>
      <Picture
        url="/assets/features/print-preview.jpg"
        subtitle="Preview your Gerbers before you print them."
        />
      <Picture
        url="/assets/features/video-tutorial.jpg"
        subtitle="Helpful videos every step of the way"
        />
      <Picture
        url="/assets/features/print-3.jpg"
        subtitle="Fully solderable conductive ink... even by hand!"
        />
    </Highlights>
  </div>);
}
}
