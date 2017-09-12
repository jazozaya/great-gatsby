import React from 'react'
import Bowser from 'bowser'

import YouTube from 'components/common/youtube'
import CallToAction from 'components/common/cta'
import FastFact from 'components/common/fastFact'
import MiniHero from 'components/common/minihero'
import Explore from 'components/common/explore'
import Dots from 'components/common/customer/dots'

import SoftwareFAQ from 'components/faq/software'

import Gallery from 'components/common/gallery'
import { softwareGallery } from 'components/common/gallery/constants'


import './common.scss'

const SoftwareImages = [
  {
    src: "/software/software-home.jpg",
    title: "Meet our desktop application",
    caption: "The software has been designed with you in mind. A minimal interface and instructional videos guide you every step of the way so you can get started in minutes."
  },
  {
    src: '/software/software-outline.jpg',
    title: "Works with your design tool",
    caption: "We support the Gerber format, so the same files you send to a factory can be used. Design with a program you're already comfortable with (EAGLE, Kicad, Altium, etc) and export the Gerbers to get started.  "
  },
  {
    src: '/software/software-priming.jpg',
    title: "A flat learning curve",
    caption: "Follow along the step by step instructions and learn how to calibrate your unit to get the perfect print. You'll be a pro in no time."
  }
]

export default class Software extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      screenshot: "visible"
    };
  }

  nextImage() {
    this.setState( { imgIndex: (this.state.imgIndex + 1) % SoftwareImages.length, screenshot: "hidden" })
  }
  previousImage() {
    this.setState( {imgIndex: (this.state.imgIndex + SoftwareImages.length - 1) % SoftwareImages.length, screenshot: "hidden" })
  }

  componentDidUpdate() {
    if (this.state.screenshot !== "visible") {
      setTimeout(() => this.setState( { screenshot: "visible" }) , 100);
    }
  }

  render() {

    const screenshotClass =`screenshot ${this.state.screenshot}`;
    const captionClass =`screenshot-caption ${this.state.screenshot}`;
    return (
      <div className="feature">
        <MiniHero
          title="Master the software during a coffee break."
          description="Skip the instruction manual, our desktop application has been designed for the first time user and will get you printing in minutes."
          >
          <FastFact
            title="Free"
            label="to Use"
            />
          <FastFact
            title="Gerber"
            label="Support"
            />
          <FastFact
            title="Updates"
            label="Automatically"
            />
        </MiniHero>
        <section>
          <div className={captionClass}>
            <h1>{SoftwareImages[this.state.imgIndex].title}</h1>
            <p className="pull-center test">{SoftwareImages[this.state.imgIndex].caption}</p>
          </div>
          <div className="flex-row screenshot-wrapper">
            <div className="navigation left" onClick={() => this.previousImage()}>&lt;</div>
            <img className={screenshotClass} src={SoftwareImages[this.state.imgIndex].src} />
            <div className="navigation right" onClick={() => this.nextImage()}>&gt;</div>
          </div>
          <Dots
            selected={this.state.imgIndex.toString()}
            total={SoftwareImages.length.toString()}
            />
        </section>
          <section className="flex-row column-wrapper">
            <div className="column">
              <img src="/software/software-locate-pad.jpg" />
              <div className="description">
                <h2>Smart Alignment.</h2>
                <p>We've developed a unique approach to alignment. Just tell the software the location of 2 key features in your board and it takes care the rest.</p>
                <p>This alignment method allows you to create two layer boards with ease, or dispense paste on boards that already have components.</p>
              </div>
            </div>
            <div className="column">
              <img src="/software/software-probing.jpg" />
              <div className="description">
                <h2>Automatic Height Compensation.</h2>
                <p>Before you dispense, the software will measure the height of an array of points on the board.</p>
                <p>The software uses the height map to compensate for any inconsistencies and irregularities on the surface and makes micro adjustments in real time to ensure a perfect print.</p>
              </div>
            </div>
          </section>
        <SoftwareFAQ title="F.A.Q." all />
        <Gallery
          title="Learn by watching."
          description="Whether you use the V-One once a day or once a month, you will be able to pick up right where you left off. These short video clips are built right into the app and will make the tricky parts easy."
          gallery= {softwareGallery}
          />
        <CallToAction
          title="Ready to build faster?"
          subtitle="We can help with that."
          buttonOne={
            {
              label: "Buy Now",
              url: "https://store.voltera.io/products/voltera-v-one",
              internal: false
            }
          }
          buttonTwo={
            {
              label: "Reserve Unit",
              url: "/request/reservation/",
              internal: true
            }
          }
          />
      </div>);
    }
  }
