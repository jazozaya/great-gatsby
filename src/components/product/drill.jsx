import React from 'react'
import Link from 'gatsby-link'

import CallToAction from 'components/common/cta'
import FastFact from 'components/common/fastFact'
import MiniHero from 'components/common/minihero'
import YouTube from 'components/common/youtube'
import Specs from 'components/common/specs';

import BoxDrill from 'components/product/boxDrill'
import DrillFAQ from 'components/faq/drill'
import Workflow from './workflow'

import './common.scss'

export default class Print extends React.Component {

  render() {
    return (
      <div className="feature">
        <MiniHero
          title="Double sided boards just got easier."
          description="The V-One Drill is an attachment to the V-One. Just mount it on like the probe and load your drill file."
          >
          <FastFact
            title="1mil"
            label="Runout"
            />
          <FastFact
            title="0.4mm"
            label="Min. Diam."
            />
          <FastFact
            title="13,000"
            label="RPM."
            />
        </MiniHero>
        <section className="movie-time">
          <h2>A compact and automated drilling attachment.</h2>
          <p className="pull-center">Easy on the eyes and ears, the V-One Drill is an attachment to the V-One </p>
          <div className="promo">
            <YouTube
              width="800"
              videoId="fNGT2Iz0UcE"
              url="/selector/v-one-drill-attachment.jpg"
              />
          </div>
        </section>
        <section className="flex-row reverse-wrap">
          <div className="description">
            <h2>Compatible with your V-One.</h2>
            <p>Creating double sided boards just got easier. Use the drilling attachment to make vias and through holes; then secure the connection with rivets.</p>
            <p>The drill mounts on the V-One just like the probe or dispenser but is externally powered. The operation is automated and surprisingly quiet. Just be sure to wear the safety glasses provided!</p>
          </div>
          <img src="/product/drilling/drill-attachment.jpg"/>
        </section>
        <section className="flex-row">
          <video playsInline muted width="600" height="500" autoPlay loop>
            <source src="/product/drilling/v-one-drill.webm" type="video/webm"/>
          </video>
          <div className="description">
            <h2>Compact and mighty.</h2>
            <p>It was designed to be as compact as possible, but don't let looks fool you - this drill packs a punch with a measured runout (TIR) of 1 mil (25 microns)</p>
            <p>Everything you need to get started is included: Drill bits of various sizes, FR1 substrates, rivets and more!</p>
          </div>
        </section>
        <Workflow workflowType="drill" />
        <section className="flex-row column-wrapper">
          <div className="column">
            <img src="/product/drilling/rivet.jpg" />
            <div className="description">
              <h2>Rivets to the rescue!</h2>
              <p>Once holes are drilled and the top and bottom layer are printed, it is time to connect them!</p>
              <p>Rivets are little copper tubes that make a mechanical connection between the top and bottom layer. Rivets are by far the easiest way to create vias by hand.</p>
            </div>
          </div>
          <div className="column">
            <img src="/product/drilling/drill-bit.jpg" />
            <div className="description">
              <h2>The right bit for the right hole.</h2>
              <p>A range of high precision drill bits are included which cover the most common hole sizes.</p>
              <p>Swapping out the bits is straightforward, only a hex key is needed.</p>
              <p>The following sizes are included (2 of each): 0.70mm, 0.80mm, 0.90mm, 1.00mm, 1.60mm. If you need different sizes, let us know!</p>
            </div>
          </div>
        </section>
        <BoxDrill />
        <DrillFAQ id="faq" title="F.A.Q." all />
        <Specs display="drill" />
        <CallToAction
          title="Ready to build faster?"
          subtitle="We can help with that."
          buttonOne={
            {
              label: "Buy Now",
              url: "/store/",
              internal: true
            }
          }
          buttonTwo={
            {
              label: "Get a Quote",
              url: "/request/quote/",
              internal: true
            }
          }
          />
      </div>);
    }
  }