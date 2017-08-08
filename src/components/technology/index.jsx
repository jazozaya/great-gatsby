import React from 'react'

import Button from 'components/common/button'
import Explore from 'components/common/explore';
import CallToAction from 'components/common/cta';
import Subheader from 'components/common/subheader'
import DummyHeaderMini from 'components/common/dummyHeaderMini';

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
        <DummyHeaderMini />
        <Subheader selected="technology" />
        <MiniHero
          title="Leap into the future."
          description="Experiment with new materials using the Voltera V-One platform. Print with your own inks onto the substrates you want."
          >
          <FastFact
            title="0 Day"
            label="Lead time"
            />
          <FastFact
            title="&#x221e;"
            label="Iterations"
            />
          <FastFact
            title="~5 USD"
            label="Board cost."
            />
        </MiniHero>
        <div className="software">
          <div className="description">
            <h2 className="pull-left">Software you want to use.</h2>
            <p>The software has been designed with you in mind. A minimal interface and instructional videos guide you every step of the way.</p>
            <p>It processes Gerber files - the same files you would send to a factory - so you can use a program that you're already comfortable with. (Eagle, Kicad, Altium, etc). Just generate your Gerbers to get started.</p>
          </div>
          <img className="software-image" src="/voltera-software.png" />
        </div>
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
