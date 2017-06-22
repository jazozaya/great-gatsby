import React from 'react'
import MiniHero from 'components/common/minihero'
import FastFact from 'components/features/fastFact'

import Gallery from 'components/gallery'
import { printGallery } from 'components/gallery/constants'

import './common.scss'

export default class Software extends React.Component {

  render() {
    return (
      <div className="feature">
        <MiniHero
          title="A built in heated platform."
          description="This multipurpose platform can be used for curing ink, reflowing and can even help with reworking boards!"
          featureType="print"
        >
        <FastFact
          title="550"
          label="Watts"
          />
        <FastFact
          title="4&quot;x5&quot;"
          label="Max. size"
          />
        <FastFact
          title="2°C/s"
          label="Ramp rate"
          />
        </MiniHero>
        <div className="content">
          <div className="column-wrapper center-wide">
            <div className="column">
              <img src="/assets/features/automatic-reflow.jpg" />
              <div className="description">
                <h2>Automatic Reflow</h2>
                <p>After placing all of your surface mount components just hit the reflow button and sit back to enjoy the show.</p>
                <p>The heater will engage and follow an automatic reflow profile that has been optimized for our solder paste and substrates</p>
              </div>
            </div>
            <div className="column">
              <img src="/assets/features/status-led-lights.jpg" />
              <div className="description">
                <h2>Status indicators</h2>
                <p>The unit is equipped with LED indicators that let you know the status of the machine from accross the room.</p>
                <p>The V-One will glow red when it is reflowing and a cool blue when the cycle has finished and it is safe to touch.</p>
              </div>
            </div>
          </div>
        </div>
        <Gallery
          title="V-One in action"
          description="The machine is a robust tool"
          gallery= {printGallery}
          />
      </div>);
    }
  }
