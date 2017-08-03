import React from 'react'
import Link from 'gatsby-link'

import Helmet from 'react-helmet'

import CallToAction from 'components/common/cta';
import Awards from 'components/common/awards'
import CustomerQuotes from 'components/common/customer'
import Hero from './heroExperiment'

import './experiment.scss'

export default class Index extends React.Component {
  render() {
    return (
      <div className="experiment">
        <Hero />
        <Awards />
        <section className="flex-row">
          <div className="description">
            <h2>Customize your setup.</h2>
            <ul>
              <li>
                <h3>Refillable Cartridges.</h3>
                <p>Our cartridges can be filled with any material you want. We even offer UV blocking cartridges for sensitive inks.</p>
              </li>
              <li>
                <h3>Robust Dispensing.</h3>
                <p>The software can handle most high viscosity fluids right out of the box with little or no tweaking.</p>
              </li>
              <li>
                <h3>Adjustable Resolution.</h3>
                <p>We offer a selection of stainless steel nozzles to accomodate your unique printing requirements.</p>
              </li>
            </ul>
          </div>
          <img src="/voltera-probe.png"/>
        </section>
        <CustomerQuotes />
        <section className="flex-row">
          <div className="description">
            <h2>A truly flexible platform.</h2>
            <p>Our standard substrate is FR4, but that doesn't mean you cannot print on other ridgid materials like glass, ceramics, or even on flexible films like Kapton or PET.  </p>
            <p>We are constantly experimenting with new inks and materials and aim to expand our ink offering in the future.</p>
            <p>Scientists all over the world are using the Voltera V-One to help them research faster. Send us an email to talk to our application experts!</p>
          </div>
          <img src="/experiment/flexible-electronics.jpg"/>
        </section>

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
