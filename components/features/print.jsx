import React from 'react'
import MiniHero from 'components/common/minihero'
import FastFact from 'components/features/fastFact'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Gallery from 'components/gallery'
import { printGallery } from 'components/gallery/constants'

import BuyNow from 'components/buyNow'

import './common.scss'

export default class Software extends React.Component {

  render() {
    return (
      <div className="feature">
        <MiniHero
          title="Printing circuit boards is easy."
          description="The Voltera V-One uses an additive approach to create circuit boards. Ink is dispensed precisely where it is needed without any waste."
          >
          <FastFact
            title="8 mil"
            label="Min. width"
            />
          <FastFact
            title="0.5 mm"
            label="Pin pitch"
            />
          <FastFact
            title="1 hour"
            label="or less"
            />

        </MiniHero>
        <div className="row-wrapper center-wide">
          <img src="/assets/v-one.png"/>
          <div className="description">
            <h2>Up to two layers.</h2>
            <p>The V-One comes equipped with all the consumables and accessories you need to get started. Setup is a breeze and in just minutes you will be printing your very first circuit board.</p>
          </div>
        </div>
        <div className="row-wrapper center-wide">
          <div className="description">
            <h2>A perfect print every time.</h2>
            <p>This high precision probe was developed from the ground up and creates a height map of your substrate. The V-One takes the map into account and makes micro adjustments to ensure a constant printing height of 100 microns. </p>
            <p>We do not need the substrate to be conductive, which means we can dispense on rigid materials like FR4, glass and ceramics, along with flexible substrates like Kapton (Polyimide).</p>
          </div>
          <img src="/assets/voltera-probe.png"/>
        </div>
        <BuyNow />
        <div className="column-wrapper center-wide">
          <div className="column">
            <img src="/assets/features/conductive-ink-printing.jpg" />
            <div className="description">
              <h2>Silver based ink.</h2>
              <p>Our ink is over 90% silver and has excellent electrical properties, perfect for digital and low power applications. Even high frequency applications up to 5 GHz are possible.</p>
              <p>A single cartridge can print almost 100 simple circuits. That means 100 unique designs with no lead time.</p>
              <p>Visit our <Link to={prefixLink('/specs/')}>specifications</Link> page to learn more!</p>
            </div>
          </div>
          <div className="column">
            <img src="/assets/features/hand-soldering-ink.jpg" />
            <div className="description">
              <h2>Solder without compromise.</h2>
              <p>You don't have to use conductive adhesives or glue to secure your components. Our ink is fully hand solderable with our provided solder wire alloy.</p>
              <p>Once the ink is printed and cured, you can place your components on and start building!</p>
            </div>
          </div>
        </div>
        <Gallery
          title="A platform for all of your needs."
          description="The V-One is a versatile tool that will help you in any stage of development"
          gallery= {printGallery}
          />
      </div>);
    }
  }
