import React from "react";
import "./boxDrill.scss";

import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { isMobile } from "./../../../constants";

const summary = {
  // IMPORTANT - These names need to match class names in CSS
  drill: "drill",
  drillBitContainer: "drill-bit-container",
  smallSubstrates: "small-substrate",
  largeSubstrates: "large-substrate",
  rivetTools: "rivet-tools",
  rivetContainerSmall: "rivet-container-small",
  rivetContainerLarge: "rivet-container-large",
  sacrificial: "sacrificial",
  safetyGlasses: "safety-glasses"
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        tryMe: file(relativePath: { eq: "inBoxDrill/try-me-drill-min.png" }) {
          childImageSharp {
            fixed(width: 600, height: 400, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        mobileBox: file(relativePath: { eq: "inBoxDrill/drill-box-min.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <BoxDrill data={data} />}
  />
);

class BoxDrill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: summary.drill,
      hoverDescription: null,
      interacted: false,
      isMobile: true
    };
  }

  componentDidMount() {
    this.setState({ isMobile: isMobile() });
  }

  renderDrill() {
    return (
      <div>
        <h2>The V-One Drill</h2>
        <p>
          The V-One Drill attachment brings CNC drilling to the V-One platform. The V-One's unique magnetic attachments makes tool changing
          a breeze.
        </p>
        <p>Hover over the items on the left to learn more.</p>
        <i>Items not shown here: 4 Thumbscrews, 1 Hex key, 1 Punk Console starter kit.</i>
      </div>
    );
  }

  renderDrillBits() {
    return (
      <div>
        <h2>Drill Bit Set</h2>
        <p>A set of precision 1/8″ shank drill bits. Change bits in seconds with the included hex key.</p>
        <p>The most common PCB drill sizes are included: 0.70mm, 0.80mm, 0.90mm, 1.00mm, 1.60mm. Two drill bits for each size.</p>
        <i>1 set included.</i>
      </div>
    );
  }
  renderSmallSubstrates() {
    return (
      <div>
        <h2>2x3” FR1 Substrates</h2>
        <p>If you are going to be drilling, we recommend drilling on FR1 substrates.</p>
        <p>
          Unlike FR4, FR1 dust does not contain fiber glass which can be harmful to your lungs. It is also a softer material, which means a
          less wear and tear on the drill bits.
        </p>
        <i>10 substrates included</i>
      </div>
    );
  }

  renderLargeSubstrates() {
    return (
      <div>
        <h2>3x4” FR1 Substrates</h2>
        <p>
          When you start to run out of space in your design, migrate over to the larger substrates. These are also made of FR1 to extend the
          life of the drill bits.
        </p>
        <i>6 substrates included</i>
      </div>
    );
  }

  renderRivetTools() {
    return (
      <div>
        <h2>Rivet Tools</h2>
        <p>These steel rivet forming tools are used to install the rivets on the PCB after holes have been drilled.</p>
        <p>
          They have been designed for optimum performance on the ink and ensure an electrical connection between the top and bottom layers
          of your PCB.
        </p>
        <i>2 sizes included.</i>
      </div>
    );
  }

  renderRivetContainerLarge() {
    return (
      <div>
        <h2>1.0mm Rivets</h2>
        <p>
          These larger rivets are perfect for through-hole connections. Create secure mechanical connections for larger components like
          buttons, headers and connectors
        </p>
        <p>They have an internal diameter of 1.0mm and a head diameter of 2.2mm</p>
        <i>200 Pcs included.</i>
      </div>
    );
  }

  renderRivetContainerSmall() {
    return (
      <div>
        <h2>0.4mm Rivets</h2>
        <p>With rivets and the included rivet tool, you can effortlessly create vias in seconds.</p>
        <p>They have an internal diameter of 0.4mm and a head diameter of 0.9mm. </p>
        <i>200 Pcs included.</i>
      </div>
    );
  }

  renderSacrificalLayer() {
    return (
      <div>
        <h2>Sacrificial Layer</h2>
        <p>
          To protect the V-One from any damage during drilling, mount this piece of FR1 on the heated bed and clamp your substrate on top.
        </p>
        <p>Don't worry, the sacrifical layer can be reused for multiple projects before needing to be replaced.</p>
        <i>1 sacrificial board included</i>
      </div>
    );
  }

  renderSafetyGlasses() {
    return (
      <div>
        <h2>Safety Glasses</h2>
        <p>
          Safety first! The motor and drill bits will be rotating at very high speeds during operation. It is important to protect your eyes
          from any debris.
        </p>
        <p>Always wear eye protection when working with the V-One Drill!</p>
        <i>1 set included</i>
      </div>
    );
  }

  renderDescription() {
    const description = this.state.hoverDescription || this.state.description;

    switch (description) {
      case summary.drill:
        return this.renderDrill();
      case summary.drillBitContainer:
        return this.renderDrillBits();
      case summary.smallSubstrates:
        return this.renderSmallSubstrates();
      case summary.largeSubstrates:
        return this.renderLargeSubstrates();
      case summary.rivetTools:
        return this.renderRivetTools();
      case summary.rivetContainerSmall:
        return this.renderRivetContainerSmall();
      case summary.rivetContainerLarge:
        return this.renderRivetContainerLarge();
      case summary.sacrificial:
        return this.renderSacrificalLayer();
      case summary.safetyGlasses:
        return this.renderSafetyGlasses();
      default:
        return this.renderDrill();
    }
  }

  renderClassName(item) {
    const description = this.state.hoverDescription || this.state.description;
    if (item === description) {
      return `outline ${item} visible`;
    } else {
      return `outline ${item}`;
    }
  }

  renderItem(name) {
    return (
      <div
        className={this.renderClassName(name)}
        onMouseEnter={() => this.setState({ hoverDescription: name })}
        onMouseLeave={() => this.setState({ hoverDescription: null })}
        onClick={() => this.setState({ description: name })}
      />
    );
  }

  renderInTheBox() {
    if (!this.state.interacted) {
      const divStyle = { cursor: "pointer" };
      return (
        <div style={divStyle} onClick={() => this.setState({ interacted: true })}>
          <Img fixed={this.props.data.tryMe.childImageSharp.fixed} />
        </div>
      );
    }
    return (
      <div className="in-the-box">
        {this.renderItem(summary.drill)}
        {this.renderItem(summary.drillBitContainer)}
        {this.renderItem(summary.rivetTools)}
        {this.renderItem(summary.rivetContainerSmall)}
        {this.renderItem(summary.rivetContainerLarge)}
        {this.renderItem(summary.safetyGlasses)}
        {this.renderItem(summary.sacrificial)}
        {this.renderItem(summary.largeSubstrates)}
        {this.renderItem(summary.smallSubstrates)}
      </div>
    );
  }

  renderMobile() {
    return (
      <section id="drill-box" className="box-wrapper-drill">
        <h1>What is in the box?</h1>
        <p className="pull-center">The V-One Drill comes with everything you need to make double sided boards out of the box.</p>
        <Img fluid={this.props.data.mobileBox.childImageSharp.fluid} />
        <div className="mobile-contents">
          <p>
            <strong>1 - V-One Drill</strong>.<br />A drilling attachment for the Voltera V-One
          </p>
          <p>
            <strong>1 - Drill Bits Set</strong>.<br />A set of precision drill bits with 5 different sizes.
          </p>
          <p>
            <strong>200 - 0.4mm Rivets</strong>.<br />
            Copper tubes for making vias.
          </p>
          <p>
            <strong>200 - 1.0mm Rivets</strong>.<br />
            Copper tubes for making plated through holes.
          </p>
          <p>
            <strong>2 - Rivet Tools</strong>.<br />
            Steel tools for perfectly pressing your rivets.
          </p>
          <p>
            <strong>10 - 2x3” FR1 Substrates</strong>.<br />
            Made of FR1 - to extend the life of the bits.
          </p>
          <p>
            <strong>6 - 3x4” FR1 Substrates</strong>.<br />
            Larger boards for when you need more space.
          </p>
          <p>
            <strong>1 - Safety Glasses</strong>.<br />
            Safety first! The motor spins at high speeds.
          </p>
          <p>
            <strong>1 - Sacrificial Layer</strong>.<br />
            Mount it on the V-One to protect the heated bed.
          </p>
          <p>
            <strong>4 - 10mm Long thumbcrews</strong>.<br />
            Clamp your substrates down easier!
          </p>
          <p>
            <strong>1 - 1.5mm Hex Key</strong>.<br />
            Used to swap out our drill bits.
          </p>
        </div>
      </section>
    );
  }

  renderDesktop() {
    return (
      <section id="drill-box" className="box-wrapper-drill">
        <h1>What is in the box?</h1>
        <p className="pull-center">The V-One Drill comes with everything you need to make double sided boards out of the box.</p>
        <div className="flex-row">
          {this.renderInTheBox()}
          <div className="description">{this.renderDescription()}</div>
        </div>
      </section>
    );
  }
  render() {
    return this.state.isMobile ? this.renderMobile() : this.renderDesktop();
  }
}
