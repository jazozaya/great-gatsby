import React from "react";
import Bowser from "bowser";

import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import CallToAction from "components/common/cta";
import FastFact from "components/common/fastFact";
import MiniHero from "components/common/minihero";
import YouTube from "components/common/youtube";
import Specs from "components/common/specs";

import BoxDrill from "components/product/boxDrill";
import DrillFAQ from "components/faq/drill";
import Workflow from "./workflow";

import imgAnimation from "images/drilling/v-one-drill.webm";

import style from "./common.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        drilling: allFile(filter: { extension: {ne: "webm"}, relativeDirectory: { eq: "drilling" } }, sort: { fields: [name] }) {
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
        youtube: file(relativePath: { eq: "youtubeScreen/v-one-drill-attachment.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <Drill data={data} />}
  />
);

class Drill extends React.Component {
  renderAnimation() {
    if (Bowser.msedge) {
      return <Img className={style.imageWrapper} fluid={this.props.data.drilling.edges[3].node.childImageSharp.fluid} />;
    } else {
      return (
        <video playsInline muted width="600" height="500" autoPlay loop>
          <source src={imgAnimation} type="video/webm" />
        </video>
      );
    }
  }

  render() {
    const { drilling, youtube } = this.props.data;

    const imgDrillAttachment = drilling.edges[0].node.childImageSharp.fluid;
    const imgBit = drilling.edges[1].node.childImageSharp.fluid;
    const imgRivet = drilling.edges[2].node.childImageSharp.fluid;
    const imgDrillYoutube = youtube.childImageSharp.fluid;

    return (
      <div className={style.feature}>
        <MiniHero title="Double sided boards just got easier." description="Automate your PCB drilling with the V-One Drill attachment">
          <FastFact title="3 mil" label="Runout" />
          <FastFact title="0.4 mm" label="Min. Diam." />
          <FastFact title="13,000" label="RPM." />
        </MiniHero>
        <section className={style.movieTime}>
          <h2>An automated drilling attachment.</h2>
          <p className="pull-center">Easy on the eyes and ears, the V-One Drill mounts directly on the V-One </p>
          <div className={style.promo}>
            <YouTube width="800" videoId="fNGT2Iz0UcE" fluid={imgDrillYoutube} />
          </div>
        </section>
        <section className="flex-row reverse-wrap">
          <div className={style.description}>
            <h2>Made for your V-One.</h2>
            <p>
              Reduce the number of machines and interfaces in your workflow. The V-One Drill attachment brings CNC drilling to the V-One
              platform.
            </p>
            <p>
              The V-One's unique magnetic attachments makes tool changing a breeze. Use the drilling attachment to make quickly vias and
              through holes in your double sided boards.
            </p>
          </div>
          <Img className={style.imageWrapper} fluid={imgDrillAttachment} />
        </section>
        <section className="flex-row">
          {this.renderAnimation()}
          <div className={style.description}>
            <h2>Compact and elegant design.</h2>
            <p>
              It was designed to be as compact as possible, but don't let its small size fool you - the V-One Drill can spin at 13,000 RPM
              with a runout of 3 mil (~75 microns).
            </p>
            <p>Everything you need to get started is included: Drill bits of various sizes, FR1 substrates, rivets and more!</p>
          </div>
        </section>
        <Workflow workflowType="drill" />
        <section className={`flex-row ${style.columnWrapper}`}>
          <div className={style.column}>
            <Img fluid={imgRivet} />
            <div className={style.description}>
              <h2>Unlock design freedom with rivets!</h2>
              <p>Design with two layers and easily make connections without compromises.</p>
              <p>
                Copper rivets make an electrical connection between top and bottom layers and eliminates single layer design limitations.
                Rivets also provide strong mechanical connections for headers and connectors.
              </p>
            </div>
          </div>
          <div className={style.column}>
            <Img fluid={imgBit} />
            <div className={style.description}>
              <h2>The right bit for the job.</h2>
              <p>A range of high precision drill bits are included. Change drill bits in seconds with the included hex key.</p>
              <p>
                The following 1/8″ shank drill bits are included (2 of each): 0.70mm, 0.80mm, 0.90mm, 1.00mm, 1.60mm. If you need different
                sizes, let us know!
              </p>
            </div>
          </div>
        </section>
        <BoxDrill />
        <DrillFAQ id="faq" title="F.A.Q." all />
        <Specs display="drill" />
        <CallToAction
          title="Ready to build faster?"
          subtitle="We can help with that."
          buttonOne={{
            label: "Buy Now",
            url: "/store/",
            internal: true
          }}
          buttonTwo={{
            label: "Get a Quote",
            url: "/request/quote/",
            internal: true
          }}
        />
      </div>
    );
  }
}
