import React from 'react'
import YouTube from 'components/common/youtube'
import './print.scss'

export default class Software extends React.Component {

  render() {
    return (
      <div className="print">
        <div className="mini-hero-wrapper">
          <div className="mini-hero">
            <h1>Create circuit boards in minutes.</h1>
            <p>The Voltera V-One uses an additive approach to create circuit boards. Ink is dispensed precisely where it is needed.</p>
            <p></p>
          </div>
        </div>
        <div className="content">
          <div className="column-wrapper">
            <div className="column">
              <img src="/assets/features/conductive-ink-printing.jpg" />
              <div className="description">
                <h2>Silver based ink</h2>
                <p>Our ink is over 90% silver and has excellent electrical properties, perfect for digital and low power applications. Even high frequency applications up to 5 GHz are possible.</p>
                <p>A single cartridge can print almost 100 simple circuits. That means 100 unique designs with no lead time.</p>
              </div>
            </div>
            <div className="column">
              <img src="/assets/features/hand-soldering-ink.jpg" />
              <div className="description">
                <h2>Solder without compromise.</h2>
                <p>You don't have to use conductive adhesives or glue to secure your components. Our ink is fully hand solderable with our provided solder wire alloy.</p>

              </div>
            </div>
          </div>
        </div>
      </div>);
    }
  }
