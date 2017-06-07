import React from 'react'
import YouTube from 'components/common/youtubes'
import Button from 'components/common/button'
import './feature.scss'

export default class Feature extends React.Component {

  render() {

    return (
      <div className="feature">
        <YouTube
          videoId="3oCkXdwWpUY"
          url="/assets/selector/voltera-software.jpg"
        />
        <div className="description">
          <h2>Software you love to use.</h2>
          <p>Voltera’s software is designed to be understood. From importing your Gerber files to the moment you press print, the <strong>software walks you though each step</strong> with built in videos and tutorial.</p>
          <p>Compatible with <strong>EAGLE, Altium, KiCad, Mentor Graphics, Cadence, DipTrace and Upverter.</strong> Is your CAD tool not on this list?  Contact us to find out if we're compatible!</p>
          <div className="button-wrap">
            <Button label="Learn More" internal url="/features/software/" color="dark"/>
          </div>
      </div>
      </div>);
    }
  }
