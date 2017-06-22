import React from 'react'
import MiniHero from 'components/common/minihero'
import FastFact from 'components/features/fastFact'

import Gallery from 'components/gallery'
import { pasteGallery } from 'components/gallery/constants'

import YouTube from 'components/common/youtube'

import './common.scss'

export default class Software extends React.Component {

  render() {
    return (
      <div className="feature">
        <MiniHero
          title="Assemble your boards in half the time."
          description="Ditch the stencil and the soldering iron. Just mount your boards on the V-One and dispense paste in minutes."
          >
          <FastFact
            title="0402"
            label="Min. pad size."
            />
          <FastFact
            title="RoHS"
            label="Lead Free."
            />
          <FastFact
            title="15 mins"
            label="or less"
            />
        </MiniHero>
        <div className="row-wrapper center-wide">
          <YouTube
            width="500"
            videoId="s_cjg2BzySg"
            url="/assets/features/paste-on-0603.jpg"
          />
          <div className="description">
            <h2>Forget the stencil.</h2>
            <p>Save hundreds of dollars in stencil costs by skipping them altogether. The V-One makes populating your prototype boards a breeze.</p>
            <p>In just a few minutes you can have paste on boards printed by the V-One or traditionally fabricated by a factory.</p>
          </div>
        </div>

        <div className="row-wrapper center-wide">
          <div className="description">
            <h2>The hard parts made easy.</h2>
            <p>Soldering BGA components by hand is out of the question. Take the guesswork out of the equation and use the V-One.</p>
            <p>Pads can be as small as 0402 and IC's can have a pitch of 0.5 mm</p>
          </div>
          <YouTube
            width="500"
            videoId="lbZVRBrdXKU"
            url="/assets/features/solder-paste-bga.jpg"
          />
        </div>
        <Gallery
          title="V-One in action"
          description="The machine is a robust tool"
          gallery= {pasteGallery} />
      </div>);
    }
  }
