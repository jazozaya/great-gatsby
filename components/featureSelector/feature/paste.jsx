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
          videoId="NdJQ5Xl4jkw"
          opts={opts}
      />
      <div className="description">
        <h2>Dispense Solder Paste</h2>
        <p>Focus on designing, not soldering. Regardless if they came from <strong>from a factory, or from your desk</strong> -  just mount your board on the V-One and off you go.</p>
        <p>Say goodbye to stencils and <strong>cut your assembly time in half.</strong> Assembling boards is easy with the V-One.</p>
        <p>It is quick turn PCBA at your desk!</p>
      </div>
    </div>
    <Highlights>
      <Picture
        url="/assets/features/solder-paste-0603.jpg"
        subtitle="This V-One dispenses paste for components as small as 0402 (1005 metric)"
      />
      <Picture
        url="/assets/features/reflow-component.jpg"
        subtitle="Reflow soldering is possible with the heated build platform"
      />

      <Picture
        url="/assets/features/solder-paste-bga.jpg"
        subtitle="Paste dispensing down to 0.5 mm, even for BGAs"
      />
    </Highlights>
  </div>);
}
}
