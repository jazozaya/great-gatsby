import React from 'react'

import YouTube from 'components/common/youtube'
import Button from 'components/common/button'
import Explore from 'components/common/explore';
import CallToAction from 'components/common/cta';
import Specs from 'components/common/specs';
import MiniHero from 'components/common/minihero'
import FastFact from 'components/common/fastFact'
import AskUs from 'components/common/askUs'
import CustomerQuotes from 'components/common/customer'

import TechnologyFAQ from 'components/faq/technology'
import Box from './box'

import './common.scss'

export default class Technology extends React.Component {

  render() {
    return (
      <div className="feature">
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
            label="Board cost"
            />
        </MiniHero>
        <section className="movie-time">
            <h2>A prototyping platform for electronics.</h2>
            <p className="pull-center">On your desktop and on your schedule, the Voltera V-One gets you from prototype to production faster than ever before.</p>
            <div className="promo">
            <YouTube
              width="800"
              videoId="PeW1nURJ5ww"
              url="/selector/print-conductive-silver-ink.jpg"
            />
          </div>
        </section>
        <section className="flex-row">
          <img src="/voltera-dispenser-min.png"/>
          <div className="description">
            <h2>Anyone can use it.</h2>
            <p>The ink cartridge is installed in the dispenser, and the dispenser is mounted on the V-One. All of our attachments are magnetically mounted, so you do not need any special tools to swap them.</p>
            <p>During a print, the dispenser gear will rotate to apply and relieve pressure to accurately control the ink flow. With the click of a few buttons you can be printing 8 mil (200 micron) traces, but don't worry the software will guide you every step of the way.</p>
          </div>
        </section>
        <AskUs example="Eg - What is the print area of the V-One?" />
        <section className="flex-row reverse-wrap">
          <div className="description">
            <h2>A perfect print every time.</h2>
            <p>This high precision probe was developed from the ground up and creates a height map of your substrate. The V-One takes the map into account and makes micro adjustments to ensure a constant printing height of 100 microns. </p>
            <p>Since we do not need the substrate to be conductive, we can dispense on rigid materials like FR4, glass and ceramics, along with flexible substrates like Kapton (Polyimide).</p>
          </div>
          <img src="/voltera-probe-min.png"/>
        </section>
        <Box />
        <CustomerQuotes />
        <TechnologyFAQ id="faq" title="F.A.Q." all />
        <Specs display="vOne" />
        <CallToAction
          title="Want to schedule a call?"
          subtitle="Let's find a time to talk!"
          buttonOne={{
            label: "Book a Call",
            url: "/request/call/",
            internal: true
          }}
          buttonTwo={{
            label: "Get A Quote",
            url: "/request/quote/",
            internal: true
          }}
          />
      </div>
    )
  }
}
