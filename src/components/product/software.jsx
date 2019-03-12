import React from 'react';

import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import CallToAction from 'components/common/cta';
import FastFact from 'components/common/fastFact';
import MiniHero from 'components/common/minihero';
import Dots from 'components/common/dots';
import SoftwareFAQ from 'components/faq/software';
import Gallery from 'components/common/gallery';
import { softwareGallery } from 'components/common/gallery/constants';

import style from './common.module.scss';
import styleSW from './software.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        software: allFile(filter: { relativeDirectory: { eq: "software" } }, sort: { fields: [name] }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Software data={data} />}
  />
);

class Software extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0
    };

    this.overrideSelection = this.overrideSelection.bind(this);
  }

  overrideSelection(newIndex) {
    this.setState({ imgIndex: newIndex });
  }

  nextImage() {
    this.setState({ imgIndex: (this.state.imgIndex + 1) % 3 });
  }
  previousImage() {
    this.setState({ imgIndex: (this.state.imgIndex + 3 - 1) % 3 });
  }

  render() {
    const { software } = this.props.data;

    const imgHome = software.edges[0].node.childImageSharp.fluid;
    const imgLocate = software.edges[1].node.childImageSharp.fluid;
    const imgOutline = software.edges[2].node.childImageSharp.fluid;
    const imgPriming = software.edges[3].node.childImageSharp.fluid;
    const imgProbing = software.edges[4].node.childImageSharp.fluid;

    const SoftwareImages = [
      {
        fluid: imgHome,
        title: 'Meet our desktop application',
        caption:
          'The software has been designed with you in mind. A minimal interface and instructional videos guide you every step of the way so you can get started in minutes.'
      },
      {
        fluid: imgOutline,
        title: 'Works with your design tool',
        caption:
          "We support the Gerber format, so the same files you send to a factory can be used. Design with a program you're already comfortable with (EAGLE, Kicad, Altium, etc) and export the Gerbers to get started.  "
      },
      {
        fluid: imgPriming,
        title: 'A flat learning curve',
        caption:
          "Follow along the step by step instructions and learn how to calibrate your unit to get the perfect print. You'll be a pro in no time."
      }
    ];

    return (
      <div className={style.feature}>
        <MiniHero
          title='Master the software during a coffee break.'
          description='Skip the instruction manual, our desktop application has been designed for the first time user and will get you printing in minutes.'
        >
          <FastFact title='Free' label='to Use' />
          <FastFact title='Gerber' label='Support' />
          <FastFact title='Updates' label='Automatically' />
        </MiniHero>
        <section>
          <div className={styleSW.screenshotCaption}>
            <h1>{SoftwareImages[this.state.imgIndex].title}</h1>
            <p className='pull-center'>{SoftwareImages[this.state.imgIndex].caption}</p>
          </div>
          <div className='flex-row'>
            <div className={`${styleSW.navigation} ${styleSW.left}`} onClick={() => this.previousImage()}>
              &lt;
            </div>
            <Img className={styleSW.screenshot} fluid={SoftwareImages[this.state.imgIndex].fluid} />
            <div className={`${styleSW.navigation} ${styleSW.right}`} onClick={() => this.nextImage()}>
              &gt;
            </div>
          </div>
          <Dots
            selected={this.state.imgIndex.toString()}
            total={SoftwareImages.length.toString()}
            callback={this.overrideSelection}
          />
        </section>
        <div className={styleSW.downloadWrapper}>
          <section className={styleSW.download}>
            <h2>
              Looking for the software? <Link to='/docs/desktop-application/'>Download it here</Link> and start
              printing!
            </h2>
          </section>
        </div>
        <section className={`flex-row ${style.columnWrapper}`}>
          <div className='column'>
            <Img fluid={imgLocate} />
            <div className={style.description}>
              <h2>Smart Alignment.</h2>
              <p>
                We've developed a unique approach to alignment. Just tell the software the location of 2 key features in
                your board and it takes care the rest.
              </p>
              <p>
                This alignment method allows you to create two layer boards with ease, or dispense paste on boards that
                already have components.
              </p>
            </div>
          </div>
          <div className='column'>
            <Img fluid={imgProbing} />
            <div className={style.description}>
              <h2>Automatic Height Compensation.</h2>
              <p>Before you dispense, the software will measure the height of an array of points on the board.</p>
              <p>
                The software uses the height map to compensate for any inconsistencies and irregularities on the surface
                and makes micro adjustments in real time to ensure a perfect print.
              </p>
            </div>
          </div>
        </section>
        <SoftwareFAQ id='faq' title='F.A.Q.' all />
        <Gallery
          title='Learn by watching.'
          description='Whether you use the V-One once a day or once a month, you will be able to pick up right where you left off. These short video clips are built right into the app and will make the tricky parts easy.'
          gallery={softwareGallery}
        />
        <CallToAction
          title='Ready to build faster?'
          subtitle='We can help with that.'
          buttonOne={{
            label: 'Buy Now',
            url: '/store/',
            internal: true
          }}
          buttonTwo={{
            label: 'Get a Quote',
            url: '/request/quote/',
            internal: true
          }}
        />
      </div>
    );
  }
}
