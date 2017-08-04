import React from 'react'

import Button from 'components/common/button'
import Explore from 'components/common/explore';
import CallToAction from 'components/common/cta';
import Subheader from 'components/common/subheader'
import DummyHeaderMini from 'components/common/dummyHeaderMini';

import Box from './box'
import Specs from './specs';

import './technology.scss';

export default class MyProduct extends React.Component {

  render() {
    return (
      <div>
        <DummyHeaderMini />
        <Subheader selected="experiment" />
        <div className="banner-wrapper">
          <div className="banner">
              <div className="description">
                <h1>Meet the<br /> Voltera V-One</h1>
              </div>
              <div className="subtitle">
                <p>You favorite prototyping tool.</p>
              </div>
          </div>
        </div>
        <div className="software">
          <div className="description">
            <h2 className="pull-left">Software you want to use.</h2>
            <p>The software has been designed with you in mind. A minimal interface and instructional videos guide you every step of the way.</p>
            <p>It processes Gerber files - the same files you would send to a factory - so you can use a program that you're already comfortable with. (Eagle, Kicad, Altium, etc). Just generate your Gerbers to get started.</p>
          </div>
          <img className="software-image" src="/voltera-software.png" />
        </div>
        <Box />
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
