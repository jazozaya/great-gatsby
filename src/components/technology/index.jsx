import React from 'react'

import Button from 'components/common/button'
import Explore from 'components/common/explore';
import CallToAction from 'components/common/cta';

import MiniHero from 'components/common/minihero'
import FastFact from 'components/common/fastFact'
import TechnologyFAQ from 'components/faq/technology'

import Box from './box'
import Specs from './specs';

import './technology.scss';

export default class MyProduct extends React.Component {

  render() {
    return (
      <div>
        <MiniHero
          title="How does it work?"
          description="The Voltera V-One dispenses conductive ink and solder paste onto FR4, but really... you can use it for whatever you want."
          >
          <FastFact
            title="0 Day"
            label="Lead time"
            />
          <FastFact
            title="100's"
            label="Of iterations"
            />
          <FastFact
            title="~5 USD"
            label="Board cost."
            />
        </MiniHero>
        <section className="flex-row">
          <div className="description">
            <h2>A perfect print every time.</h2>
            <p>This high precision probe was developed from the ground up and creates a height map of your substrate. The V-One takes the map into account and makes micro adjustments to ensure a constant printing height of 100 microns. </p>
            <p>We do not need the substrate to be conductive, which means we can dispense on rigid materials like FR4, glass and ceramics, along with flexible substrates like Kapton (Polyimide).</p>
          </div>
          <img src="/voltera-probe.png"/>
        </section>
        <Box />
        <TechnologyFAQ title="F.A.Q." all />
        <Specs />
        <CallToAction
          title="Want to schedule a call?"
          subtitle="Let's find a time to talk!"
          label="Schedule Call"
          url="/requestCall/"
        />
      </div>
    )
  }
}
