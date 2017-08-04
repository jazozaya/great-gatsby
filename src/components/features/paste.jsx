import React from 'react'

import MiniHero from 'components/common/minihero'
import FastFact from 'components/common/fastFact'
import Subheader from 'components/common/subheader'
import DummyHeaderMini from 'components/common/dummyHeaderMini';
import Explore from 'components/common/explore'

import Workflow from './workflow';
import BuyNow from './buyNow'

import Gallery from 'components/gallery'
import { pasteGallery } from 'components/gallery/constants'

import YouTube from 'components/common/youtube'

import './common.scss'

export default class Software extends React.Component {

  render() {
    return (
      <div className="feature">
        <DummyHeaderMini />
        <Subheader selected="paste" />
        <MiniHero
          title="Assemble your boards in half the time."
          description="Ditch the stencil and the soldering iron. Just mount your boards on the V-One and dispense paste in minutes."
          >
          <FastFact
            title="0402"
            label="Min. pad size."
            />
          <FastFact
            title="Reflow"
            label="Built-in."
            />
          <FastFact
            title="15 mins"
            label="or less"
            />
        </MiniHero>
        <section className="flex-row">
          <YouTube
            width="600"
            videoId="s_cjg2BzySg"
            url="/features/paste-on-0603.jpg"
          />
          <div className="description">
            <h2>Forget the stencil.</h2>
            <p>Save hundreds of dollars in stencil costs by skipping them altogether. The V-One makes populating your prototype boards a breeze.</p>
            <p>In just a few minutes you can have paste on boards printed by the V-One or traditionally fabricated by a factory.</p>
          </div>
        </section>
        <section className="flex-row">
          <div className="description">
            <h2>A built in heated platform.</h2>
            <p>After placing all of your surface mount components just hit the reflow button and sit back to enjoy the show.</p>
            <p>With a 550W heater, the V-One can reach reflow temperatures in under a minute. Use our recommended heating profile, or manually control the temperature for complete control.</p>
          </div>
          <YouTube
            width="600"
            videoId="y3RZLiPDljs"
            url="/features/reflow-platform.jpg"
          />
      </section>
        <Workflow workflowType="solder" />
        <section className="flex-row column-wrapper">
          <div className="column">
            <YouTube
              width="500"
              videoId="lbZVRBrdXKU"
              url="/features/solder-paste-bga.jpg"
            />
            <div className="description">
              <h2>The hard parts made easy.</h2>
              <p>Soldering BGA components by hand is out of the question. Take the guesswork out of the equation and use the V-One.</p>
              <p>The amount of paste dispensed can be adjusted on the fly with a touch of a button. Pads can be as small as 0402 and IC's can have a pitch of 0.5 mm</p>
            </div>
          </div>
          <div className="column">
            <img src="/features/status-led-lights.jpg" />
            <div className="description">
              <h2>Status indicators.</h2>
              <p>The unit is equipped with LED indicators that let you know the status of the machine from accross the room.</p>
              <p>The V-One will glow red when it is reflowing and a cool blue when the cycle has finished and it is safe to touch.</p>
            </div>
          </div>
        </section>
        <Gallery
          title="V-One in action"
          description="The machine is a robust tool"
          gallery= {pasteGallery} />
        <BuyNow />
      </div>);
    }
  }
