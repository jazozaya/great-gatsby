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
      <LazyLoad offset={60} width={640} height={360}>
        <Youtube
          videoId="PeW1nURJ5ww"
          opts={opts}
        />
      </LazyLoad>
      <div className="description">
        <h2>Print your own Circuit Boards</h2>
        <p>On your desktop and on your schedule, the Voltera V-One gets you from prototype to production faster than ever before.</p>
        <p>Create <strong>two layer circuit boards</strong> on your desk. Load your Gerber files and watch the dispenser lay down a <strong>silver-based conductive ink</strong> to print your circuit right before your eyes.</p>
      </div>
    </div>
    <Highlights>
      <Picture
        url="/assets/features/print-1.jpg"
        subtitle="Repeatable 8 mil trace width"
      />
      <Picture
        url="/assets/features/print-2.jpg"
        subtitle="The V-One puts the fab house on your desk"
      />
      <Picture
        url="/assets/features/print-3.jpg"
        subtitle="Fully solderable conductive ink... even by hand!"
      />
  </Highlights>
  </div>);
}
}
