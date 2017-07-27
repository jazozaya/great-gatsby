import React from 'react'
import YouTube from 'components/common/youtube'

import Button from 'components/common/button'
import './teaser.scss'

export default class Feature extends React.Component {

  render() {
    return (
      <div className="teaser">
          <YouTube
            videoId="PeW1nURJ5ww"
            url="/selector/print-conductive-silver-ink.jpg"
          />
          <div className="description">
            <h2>Print your own circuit boards.</h2>
            <p>On your desktop and on your schedule, the Voltera V-One gets you from prototype to production faster than ever before.</p>
            <p>Create <strong>two layer circuit boards</strong> on your desk. Load your Gerber files and watch the dispenser lay down a <strong>silver-based conductive ink</strong> to print your circuit right before your eyes.</p>
            <div className="button-wrap">
              <Button label="Learn More" internal url="/features/print/" color="dark"/>
            </div>
        </div>
      </div>);
    }
  }
