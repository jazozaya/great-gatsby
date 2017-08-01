import React from 'react'

import FastFact from './fastFact'
import BuyNow from './buyNow'
import YouTube from 'components/common/youtube'

import MiniHero from 'components/common/minihero'
import Explore from 'components/common/explore'
import Gallery from 'components/gallery'
import { printGallery } from 'components/gallery/constants'

import './common.scss'

const SoftwareImages = [
  {
    src: "/software/software-home.jpg",
    title: "Meet our desktop application",
    caption: "The software has been designed with you in mind. A minimal interface and instructional videos guide you every step of the way so you can get started in minutes."
  },
  {
    src: '/software/software-outline.jpg',
    title: "Load your files.",
    caption: "We support the Gerber format, so the same files you send to a factory can be used. Design with a program you're already comfortable with (Eagle, Kicad, Altium, etc) and export the Gerbers to get started.  "
  },
  {
    src: '/software/software-priming.jpg',
    title: "Easy to follow instructions",
    caption: "Follow along the step by step instructions and learn how to calibrate your unit to get the perfect print. You'll be a pro in no time."
  },
  {
    src: '/software/software-printing.jpg',
    title :"my title",
    caption: "On startup the software automatically connects to the unit and lets you pick your feature"
  },
  {
    src: '/software/software-locate-pad.jpg',
    title: "Smart board calibration.",
    caption: "If you are printing a two layer board or dispensing solder paste, you just need to teach the software the location of two points. The software figures out the rest."
  },
  {
   src:'/software/software-locate-pad-2.jpg',
   title: "my second title",
   caption: "On startup the software automatically connects to the unit and lets you pick your feature"
  }
]


class Clip extends React.Component {
  render() {
    const { src, subtitle }  = this.props;
    return(
      <div className="clip">
        <video width="370" height="208" autoPlay loop>
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <p><i>{subtitle}</i></p>
      </div>
    );
  }
}

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
          title="Master the software in an afternoon."
          description="Ditch the instruction manual, our desktop application has been designed for the first time user and will get you printing in minutes."
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
          <div className="screenshot-wrapper">
            <div className="navigation" onClick={() => this.previousImage()}>&lt;</div>
            <img className={screenshotClass} src={SoftwareImages[this.state.imgIndex].src} />
            <div className="navigation" onClick={() => this.nextImage()}>&gt;</div>
          </div>
        </section>
        <section>
          <h1>Learn by watching.</h1>
          <p className="pull-center">Whether you use the V-One once a day or once a month, you will be able to pick up right where you left off. These short video clips are built right into the app and will make the tricky parts easy.</p>
          <div className="flex-row clips-wrapper">
            <Clip
              src="/features/MountDispenser.webm"
              subtitle="Mount the dispenser"
              />
            <Clip
              src="/features/PrintPaste.webm"
              subtitle="Select your pads"
              />
            <Clip
              src="/features/Outline.webm"
              subtitle="Position your print"
              />
          </div>
        </section>
        <Explore activePage="software"/>
        <BuyNow />
      </div>);
    }
  }


  // Big Title with a big image.
  // - Built in videos in the app. | Extremely easy to learn
  // - Link to our community forums | Follow along with the conversation
  // - Print preview focus shot | Loads your Gerber files (list compatible cad tools)


  // focuse on 3 main things
  // - Extremely easy to Learn
  // -- Step by step instructions
  // -- Guided videos.
  //
  // -- Calibration for 2 sided boards is easy.
  //
  // - automatic updates.
