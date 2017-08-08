import React from 'react'
import Link from 'gatsby-link'

import FastFact from 'components/common/fastFact'
import MiniHero from 'components/common/minihero'
import Subheader from 'components/common/subheader'
import DummyHeaderMini from 'components/common/dummyHeaderMini';

import Explore from 'components/common/explore'
import Gallery from 'components/gallery'
import { printGallery } from 'components/gallery/constants'

import PrintFAQ from 'components/faq/print'

import BuyNow from './buyNow'
import Workflow from './workflow'

import './common.scss'

export default class Software extends React.Component {

  render() {
    return (
      <div className="feature">
        <DummyHeaderMini />
        <Subheader selected="print" />
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
        <section className="flex-row">
          <img src="/v-one.png"/>
          <div className="description">
            <h2>Up to two layers.</h2>
            <p>The V-One comes equipped with all the consumables and accessories you need to get started. Setup is a breeze and in just minutes you will be printing your very first circuit board.</p>
          </div>
        </section>
        <Workflow workflowType="print" />
        <section className="flex-row">
          <div className="description">
            <h2>A perfect print every time.</h2>
            <p>This high precision probe was developed from the ground up and creates a height map of your substrate. The V-One takes the map into account and makes micro adjustments to ensure a constant printing height of 100 microns. </p>
            <p>We do not need the substrate to be conductive, which means we can dispense on rigid materials like FR4, glass and ceramics, along with flexible substrates like Kapton (Polyimide).</p>
          </div>
          <img src="/voltera-probe.png"/>
        </section>
        <div className="shadow-banner">
          <section className="flex-row column-wrapper">
            <div className="column">
              <img src="/features/conductive-ink-printing.jpg" />
              <div className="description">
                <h2>Silver based ink.</h2>
                <p>Our ink is over 90% silver and has excellent electrical properties, perfect for digital and low power applications. Even high frequency applications up to 5 GHz are possible.</p>
                <p>A single cartridge can print almost 100 simple circuits. That means 100 unique designs with no lead time.</p>
                <p>Visit our <Link to='/specs/'>specifications</Link> page to learn more!</p>
              </div>
            </div>
            <div className="column">
              <img src="/features/hand-soldering-ink.jpg" />
              <div className="description">
                <h2>Solder without compromise.</h2>
                <p>You don't have to use conductive adhesives or glue to secure your components. Our ink is fully hand solderable with our provided solder wire alloy.</p>
                <p>Once the ink is printed and cured, you can place your components on and start building!</p>
              </div>
            </div>
          </section>
        </div>
        <PrintFAQ title="F.A.Q." all />
        <Gallery
          title="A platform for all of your needs."
          description="The V-One is a versatile tool that will help you in any stage of development"
          gallery= {printGallery}
          />
        <BuyNow />
      </div>);
    }
  }
