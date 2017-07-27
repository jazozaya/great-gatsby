import React from 'react'

import YouTube from 'components/common/youtube'
import Gallery from 'components/gallery'
import { printGallery } from 'components/gallery/constants'

import './common.scss'

const SoftwareImages = [
  '/software/software-home.jpg',
  '/software/software-outline.jpg',
  '/software/software-priming.jpg',
  '/software/software-printing.jpg',
  '/software/software-locate-pad.jpg',
  '/software/software-locate-pad-2.jpg'

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

    const screenshotClass =`software-screen ${this.state.screenshot}`;
    return (
      <div className="benefit-wrapper">
        <div className="benefit">

          <div className="row-wrapper">
          <div className="description">
            <h2>Software that makes sense.</h2>
            <p>Voltera’s software is designed to be understood. From importing your Gerber files to the moment you press print, the software walks you though each step of the prototyping process so you don’t have to worry about what comes next.</p>
            <p>It processes Gerber files - the same files you would send to a factory - so you can use a program that you're already comfortable with. (Eagle, Kicad, Altium, etc).</p>
          </div>
          <YouTube
            width="500"
            videoId="3oCkXdwWpUY"
            url="/software/software-home-video.jpg"
          />
        </div>
        <h1>Flat learning curve.</h1>
        <p className="pull-center">The software has been designed with you in mind. A minimal interface and instructional videos guide you every step of the way so you can get started in minutes.</p>
        <div className="software-gallery">
          <div className="navigation" onClick={() => this.previousImage()}>&lt;</div>
          <img className={screenshotClass} src={SoftwareImages[this.state.imgIndex]} />
          <div className="navigation" onClick={() => this.nextImage()}>&gt;</div>
        </div>


        </div>
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
