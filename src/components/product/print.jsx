import React from 'react'
import Link from 'gatsby-link'

import CallToAction from 'components/common/cta'
import FastFact from 'components/common/fastFact'
import MiniHero from 'components/common/minihero'
import YouTube from 'components/common/youtube'

import Gallery from 'components/common/gallery'
import { printGallery } from 'components/common/gallery/constants'

import PrintFAQ from 'components/faq/print'

import Workflow from './workflow'
import HelpMe from './helpMe'

import './common.scss'

export default class Print extends React.Component {

  render() {
    return (
      <div className="feature">
        <MiniHero
          title="Printing circuit boards is easy."
          description="The Voltera V-One uses an additive approach to create circuit boards. Ink is dispensed precisely where it is needed without any waste."
          >
          <FastFact
            title="8 mil"
            label="Trace/space"
            />
          <FastFact
            title="0.65 mm"
            label="Pin pitch"
            />
          <FastFact
            title="1 hour"
            label="or less"
            />
        </MiniHero>
        <section className="flex-row">
          <img src="/product/printing/double-sided-printing.jpg"/>
          <div className="description">
            <h2>Single and double layer circuits.</h2>
            <p>Create a single or two layer board and keep designing like you're used to. You can mix surface mount and through hole technologies with no difficulty.</p>
            <p>The V-One comes equipped with all the consumables and accessories you need to get started. Setup is a breeze and in just minutes you will be printing your very first circuit board on the V-One.</p>
          </div>
        </section>
        <section className="flex-row reverse-wrap">
          <div className="description">
            <h2>Works with your favorite platform.</h2>
            <p>Development platforms have become the easiest starting point for many projects. Take your breadboard projects to the next level with your own personal shields.</p>
            <p>Get started quickly on projects with the Arduino&reg; Uno, Arduino&reg; Mega, Raspberry Pi&trade; B+, and the Particle Photon.</p>
          </div>
          <img src="/product/printing/prototyping-platform.jpg"/>
        </section>
        <Workflow workflowType="print" />
        <section className="flex-row column-wrapper">
          <div className="column">
            <img src="/product/printing/conductive-ink-printing.jpg" />
            <div className="description">
              <h2>Silver based ink.</h2>
              <p>Our ink is over 90% silver and has excellent electrical properties, perfect for digital and low power applications. Even high frequency applications up to 5 GHz are possible.</p>
              <p>A single cartridge can print almost 100 simple circuits. That means 100 unique designs with no lead time.</p>
              <p>Visit our <Link to='/specs/'>specifications</Link> page to learn more!</p>
            </div>
          </div>
          <div className="column">
            <img src="/product/printing/hand-soldering-ink.jpg" />
            <div className="description">
              <h2>Solder without compromise.</h2>
              <p>You don't have to use conductive adhesives or glue to secure your components. Our ink is fully hand solderable with our provided solder wire alloy.</p>
              <p>Once the ink is printed and cured, you can place your components on and start building!</p>
            </div>
          </div>
        </section>
        <section className="movie-time">
          <h2>See the V-One in action!</h2>
          <p className="pull-center">Learn how to create a double sided circuit using the V-One Drill in this detailed walkthrough.</p>
          <div className="promo">
            <YouTube
              width="800"
              videoId="N6nEgN4THRE"
              url="/product/printing/walkthrough.jpg"
              />
          </div>
        </section>
        <PrintFAQ id="faq" title="F.A.Q." all />
        <HelpMe/>
        <Gallery
          title="A platform for all of your needs."
          description="The V-One is a versatile tool that will help you in any stage of development"
          gallery= {printGallery}
          />
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
