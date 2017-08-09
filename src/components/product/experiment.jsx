import React from 'react'
import Link from 'gatsby-link'

import Helmet from 'react-helmet'

import CallToAction from 'components/common/cta';
import Awards from 'components/common/awards'
import CustomerQuotes from 'components/common/customer'
import ExperimentFAQ from 'components/faq/experiment';


import MiniHero from 'components/common/minihero'
import FastFact from 'components/common/fastFact'

import Gallery from 'components/gallery'
import { experimentGallery } from 'components/gallery/constants'

import './common.scss'

export default class Index extends React.Component {
  render() {
    return (
      <div className="feature">
        <MiniHero
          title="Print anything on everything."
          description="Experiment with new fluids using the Voltera V-One platform. Print with your own materials onto the substrates you want."
          >
          <FastFact
            title="Standard"
            label="Cartridges"
            />
          <FastFact
            title="Flexibility"
            label="Built-in"
            />
          <FastFact
            title="240°C"
            label="Max Temp."
            />
        </MiniHero>
        <Awards />
        <section className="flex-row">
          <div className="description">
            <h2>Use your own inks.</h2>
            <p>The Voltera V-One uses standard 5cc syringes. This means cartridges can be filled with any material you want to dispense with. We even offer UV blocking cartridges for sensitive inks!</p>
            <p>Our robust dispensing system can handle most high viscosity fluids right out of the box. Contact us today to find how we can help you!</p>
          </div>
          <img src="/voltera-probe.png"/>
        </section>
        <section className="flex-row">
          <img src="/product/flexible-electronics.jpg"/>
          <div className="description">
            <h2>A flexible platform.</h2>
            <p>Our standard substrate is FR4, but that doesn't mean you cannot print on other ridgid materials like glass, ceramics, or even on flexible films like Kapton or PET.</p>
            <p>Scientists all over the world are using the Voltera V-One to help them experiment faster.</p>
          </div>
        </section>
        <section className="flex-row">
          <img src="/product/flexible-electronics.jpg"/>
          <div className="description">
            <h2>A flexible platform.</h2>
            <p>Our standard substrate is FR4, but that doesn't mean you cannot print on other ridgid materials like glass, ceramics, or even on flexible films like Kapton or PET.</p>
            <p>Scientists all over the world are using the Voltera V-One to help them experiment faster.</p>
          </div>
        </section>
        <CustomerQuotes />
        <ExperimentFAQ title="F.A.Q." all />
        <Gallery
          title="Simplify your life."
          description="The V-One cuts your development in half and gets you to market faster."
          gallery= {experimentGallery} />
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

// Experiment page
// - Refillable Cartridges (UV Blocking) (cartridge switching)
// - Finer Printing (150 microns)
// - Heated bed, not just for reflow.
// - Custom Substrates (and substrates with pre-defined features)


// - Need to get another quote, maybe use the one from Nina ???
// - Logo's of universities that have used the V-One.
//// Harvard, MIT, Oxford University, Stanford.

// Mini case study about how a researcher is using it.
//// Profile pic, area of research

// - Picture of multiple inks on multiple substrates.
// - Mention that we can print on flexible ink
