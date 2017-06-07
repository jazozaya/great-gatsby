import React from 'react'
import YouTube from 'components/common/youtubes'
import Button from 'components/common/button'
import './feature.scss'

export default class Feature extends React.Component {

  render() {
    return (
      <div className="feature">
        <YouTube
          videoId="y3RZLiPDljs"
          url="/assets/selector/reflow-platform.jpg"
        />
        <div className="description">
          <h2>Solder everything at once.</h2>
          <p>The mounting platform doubles as a heated bed. After dispensing paste, you can <strong>place your components on and watch them reflow</strong> right before your eyes.</p>
          <p>With a 550W heater, the V-One can <strong>reach reflow temperatures in under a minute</strong>. Use our recommended heating profile, or manually control the temperature for complete control.</p>
          <div className="button-wrap">
            <Button label="Learn More" internal url="/features/reflow/" color="dark"/>
          </div>
        </div>
      </div>);
    }
  }
