import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import YouTube from 'components/common/youtube';
import CallToAction from 'components/common/cta';
import Specs from 'components/common/specs';
import MiniHero from 'components/common/minihero';
import FastFact from 'components/common/fastFact';
import CustomerQuotes from 'components/common/customer';

import TechnologyFAQ from 'components/faq/technology';
import Box from './box';

import style from './common.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        technology: allFile(filter: { relativeDirectory: { eq: "technology" } }, sort: { fields: [name] }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
        youtube: file(relativePath: { eq: "youtubeScreen/print-conductive-silver-ink.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <Technology data={data} />}
  />
);

class Technology extends React.Component {
  render() {
    // Prepare our files
    const { technology, youtube } = this.props.data;
    const imgDispenserRender = technology.edges[0].node.childImageSharp.fluid;
    const imgProbeRender = technology.edges[1].node.childImageSharp.fluid;
    const imgPrintYoutube = youtube.childImageSharp.fluid;

    return (
      <div className={style.feature}>
        <MiniHero
          title='How does it work?'
          description='The Voltera V-One dispenses conductive ink and solder paste onto FR4, but really... you can use it for whatever you want.'
        >
          <FastFact title='0 Day' label='Lead time' />
          <FastFact title="100's" label='Of iterations' />
          <FastFact title='~5 USD' label='Board cost' />
        </MiniHero>
        <section className={style.movieTime}>
          <h2>A prototyping platform for electronics.</h2>
          <p className='pull-center'>
            On your desktop and on your schedule, the Voltera V-One gets you from prototype to production faster than
            ever before.
          </p>
          <div className={style.promo}>
            <YouTube width='800' videoId='mOzt_sbODZg' fluid={imgPrintYoutube} />
          </div>
        </section>
        <section className='flex-row'>
          <Img className={style.imageWrapper} fluid={imgDispenserRender} />
          <div className={style.description}>
            <h2>Anyone can use it.</h2>
            <p>
              The ink cartridge is installed in the dispenser, and the dispenser is mounted on the V-One. All of our
              attachments are magnetically mounted, so you do not need any special tools to swap them.
            </p>
            <p>
              During a print, the dispenser gear will rotate to apply and relieve pressure to accurately control the ink
              flow. With the click of a few buttons you can be printing 8 mil (200 micron) traces, but don't worry the
              software will guide you every step of the way.
            </p>
          </div>
        </section>
        <section className='flex-row reverse-wrap'>
          <div className={style.description}>
            <h2>A perfect print every time.</h2>
            <p>
              This high precision probe was developed from the ground up and creates a height map of your substrate. The
              V-One takes the map into account and makes micro adjustments to ensure a constant printing height of 100
              microns.{' '}
            </p>
            <p>
              Since we do not need the substrate to be conductive, we can dispense on rigid materials like FR4, glass
              and ceramics, along with flexible substrates like Kapton (Polyimide).
            </p>
          </div>
          <Img className={style.imageWrapper} fluid={imgProbeRender} />
        </section>
        <Box />
        <CustomerQuotes />
        <TechnologyFAQ id='faq' title='F.A.Q.' all />
        <Specs display='vOne' />
        <CallToAction
          title='Want to get specifics?'
          subtitle="Let's build a quote for you!"
          buttonOne={{
            label: 'Get A Quote',
            url: '/request/quote/',
            internal: true,
          }}
        />
      </div>
    );
  }
}
