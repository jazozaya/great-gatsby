import React from 'react'
import YouTube from 'components/common/youtube'
import Button from 'components/common/button'
import './teaser.scss'

export default class Feature extends React.Component {

  render() {
    return (
      <div className="teaser">
        <YouTube
          videoId="y3RZLiPDljs"
          url="/selector/reflow-platform.jpg"
        />
        <div className="description">
          <h2>Turn up the heat.</h2>
          <p>The mounting platform doubles as a heated bed. After dispensing paste, you can <strong>place your components on and watch them reflow</strong> right before your eyes.</p>
          <p>With a 550W heater, the V-One can <strong>reach reflow temperatures in under a minute</strong>. Use our recommended heating profile, or manually control the temperature for complete control.</p>
          <div className="button-wrap">
            <Button label="Learn More" internal url="/features/reflow/" color="dark"/>
          </div>
        </div>
      </div>);
    }
  }
