import React from 'react'

import MiniHero from 'components/common/minihero'
import FastFact from 'components/common/fastFact'

import './common.scss'

export default class Paste extends React.Component {

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
            title="Reflow"
            label="Built-in."
            />
          <FastFact
            title="15 mins"
            label="or less"
            />
        </MiniHero>
      </div>
    );
    }
  }
