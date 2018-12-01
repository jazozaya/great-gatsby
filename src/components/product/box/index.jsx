import React from "react";
import MediaQuery from "react-responsive";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import { mobileThreshold } from './../../../constants'

import "./box.scss";

const summary = {
  // IMPORTANT - These names need to match class names in CSS
  vOne: "v-one",
  burnishingPad: "burnishing-pad",
  nozzles: "nozzles",
  substrates: "substrates",
  dispenserPaste: "dispenser-paste",
  dispenserInk: "dispenser-ink",
  solderWire: "solder-wire",
  cartridgePaste: "cartridge-paste",
  cartridgeInk: "cartridge-ink",
  probe: "probe",
  clamps: "clamps"
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        tryMe: file(relativePath: { eq: "inBox/try-me-min.png" }) {
          childImageSharp {
            fixed(width: 600, height: 400, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        mobileBox: file(relativePath: { eq: "inBox/v-one-box-min.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <InTheBox data={data} />}
  />
);

class InTheBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: summary.vOne,
      hoverDescription: null,
      interacted: false
    };
  }

  renderVOne() {
    return (
      <div>
        <h2>The Voltera V-One</h2>
        <p>The V-One is a 3 axis machine, about the same size as a laptop and can fit on your desk. </p>
        <p>It is equipped with a heated platform used to cure conductive ink and to reflow solder paste.</p>
        <p>Hover over the items on the left to learn more.</p>
        <i>Items not shown here: 3g Tube of Flux, 1 Hello World starter kit.</i>
      </div>
    );
  }

  renderBurnishingPad() {
    return (
      <div>
        <h2>Burnishing Pad</h2>
        <p>
          After your circuit is printed and cured, the silver traces need a quick burnishing step to remove any organic matter left behind.
          The burnishing pad contains micro­pores that can remove even the smallest contaminants.
        </p>
        <p>Just give the board a scrub and watch the traces turn silver!</p>
        <i>1 pad included</i>
      </div>
    );
  }

  renderNozzles() {
    return (
      <div>
        <h2>Dispensing Nozzles</h2>
        <p>
          With an inner diameter of ~230 microns (9 mil), these stainless steel dispensing tips are crucial for accurate deposition of ink
          and solder paste. Do you want ultra fine resolution? Visit our store for even smaller nozzles.
        </p>
        <p>
          They are installed directly on the cartridges and should be treated with care. The V-One ships with 2 extra nozzles in case you
          need them.
        </p>
        <i>4 nozzles included</i>
      </div>
    );
  }

  renderSolderWire() {
    return (
      <div>
        <h2>Solder Wire</h2>
        <p>
          Done printing? Let’s add some components! If you are working with through hole components, use this solder wire and plenty of flux
          to ensure a strong solder joint. We’ve chemically tested it to be most compatible with our nanoparticle ink.
        </p>
        <i>1 5g spool included</i>
      </div>
    );
  }

  renderSubstrates() {
    return (
      <div>
        <h2>Substrates</h2>
        <p>
          Every circuit needs a place to live. Once your design is finished, export the Gerbers and mount your substrate on the V-One to
          start printing.
        </p>
        <p>
          These substrates are standard FR4 boards coated with solder mask to make hand soldering and reflowing easier. We have several
          sizes to suit your needs, visit our store to see them all!
        </p>
        <i>Ten 2” x 3” and six 3” x 4” FR4 Substrates included.</i>
      </div>
    );
  }

  renderDispenser() {
    return (
      <div>
        <h2>Dispensers</h2>
        <p>
          This dispensing head is used to deposit ink or solder paste onto your board. An internal leadscrew is the key for extremely fine
          control over the ink flow.
        </p>
        <p>
          Installing them on the machine is a snap. Literally! The finger grips and magnets allow for seamless mounting and removal. No
          tools required.
        </p>
        <i>2 dispensers included</i>
      </div>
    );
  }

  renderCartridgeInk() {
    return (
      <div>
        <h2>Ink Cartridge</h2>
        <p>Watch the V-One draw your circuit in minutes as ink is dispensed trace by trace, pad by pad.</p>
        <p>
          This ink cartridge is over 90% pure silver and can print up to 85 simple boards. That means 85 unique designs with no lead time.
        </p>
        <i>1 ink cartridge included</i>
      </div>
    );
  }

  renderCartridgePaste() {
    return (
      <div>
        <h2>Solder Paste Cartridge</h2>
        <p>
          Whether you got the circuit boards from a factory or you made them with the V-One, this lead free solder paste cartridge will make
          board assembly a breeze.
        </p>
        <p>A single cartridge is able to populate over 10,000 0603 pads, that is more than plenty for a small batch of PCBA.</p>
        <i>1 solder paste cartridge included</i>
      </div>
    );
  }

  renderProbe() {
    return (
      <div>
        <h2>Height Probe</h2>
        <p>How do you achieve a perfect print every time?</p>
        <p>
          The probe is used to measure the height of your substrate. Right before a print the V-One will probe an array of points to create
          a height map.
        </p>
        <p>During printing, the V-One software uses the map and makes micro adjustments to the height to keep a constant height.</p>
        <i>1 probe included</i>
      </div>
    );
  }

  renderClamps() {
    return (
      <div>
        <h2>Substrate Clamps & Thumbscrews</h2>
        <p>
          These aluminum clamps will hold your board down securely for either printing or paste dispensing. They have been designed with
          flexibility in mind, allowing you to mount a wide range of board sizes and thicknesses.
        </p>
        <p>
          Clamping down the substrate is easy. The machine comes with a set of thumbscrews so no need to fiddle with screwdrivers or allen
          keys.
        </p>
        <i>2 clamps, 4 thumbscrews included</i>
      </div>
    );
  }
  renderDescription() {
    const description = this.state.hoverDescription || this.state.description;

    switch (description) {
      case summary.vOne:
        return this.renderVOne();
      case summary.burnishingPad:
        return this.renderBurnishingPad();
      case summary.nozzles:
        return this.renderNozzles();
      case summary.substrates:
        return this.renderSubstrates();
      case summary.dispenserInk:
        return this.renderDispenser();
      case summary.dispenserPaste:
        return this.renderDispenser();
      case summary.solderWire:
        return this.renderSolderWire();
      case summary.cartridgePaste:
        return this.renderCartridgePaste();
      case summary.cartridgeInk:
        return this.renderCartridgeInk();
      case summary.probe:
        return this.renderProbe();
      case summary.clamps:
        return this.renderClamps();
      default:
        return this.renderVOne();
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
        {this.renderItem(summary.vOne)}
        {this.renderItem(summary.probe)}
        {this.renderItem(summary.clamps)}
        {this.renderItem(summary.burnishingPad)}
        {this.renderItem(summary.dispenserInk)}
        {this.renderItem(summary.dispenserPaste)}
        {this.renderItem(summary.cartridgePaste)}
        {this.renderItem(summary.cartridgeInk)}
        {this.renderItem(summary.nozzles)}
        {this.renderItem(summary.substrates)}
        {this.renderItem(summary.solderWire)}
      </div>
    );
  }

  renderMobile() {
    return (
      <section id="v-one-box" className="box-wrapper">
        <h1>What is in the box?</h1>
        <p className="pull-center">The V-One comes with all the accessories and consumables you need to start building hardware faster.</p>
        <Img fluid={this.props.data.mobileBox.childImageSharp.fluid} />
        <div className="mobile-contents">
          <p>
            <strong>1 - Voltera V-One</strong>.<br />A protoyping tool that can fit on your desk.
          </p>
          <p>
            <strong>1 - Probe</strong>.<br />A sensor that maps the height of your board.
          </p>
          <p>
            <strong>2 - Clamps</strong>.<br />
            Hold your board in place while dispensing
          </p>
          <p>
            <strong>1 - Burnishing pad</strong>.<br />
            Scrub your board to see the traces turn silver!
          </p>
          <p>
            <strong>2 - Dispensers</strong>.<br />
            Pop the cartridges in and start dispensing!
          </p>
          <p>
            <strong>1 - Conductive ink</strong>.<br />
            Over 90% silver and fully solderable.
          </p>
          <p>
            <strong>1 - Solder paste</strong>.<br />
            Lead free paste that makes assembly a breeze.
          </p>
          <p>
            <strong>1 - Solder wire spool</strong>.<br />A special alloy to attach your components.
          </p>
          <p>
            <strong>10 - Small substrates</strong>.<br />
            Every circuit needs a place to live!
          </p>
          <p>
            <strong>6 - Large substrates</strong>.<br />
            To help you protoype larger circuits.
          </p>
        </div>
      </section>
    );
  }

  renderDesktop() {
    return (
      <section id="v-one-box" className="box-wrapper">
        <h1>What is in the box?</h1>
        <p className="pull-center">The V-One comes with all the accessories and consumables you need to start building hardware faster.</p>
        <div className="flex-row">
          {this.renderInTheBox()}
          <div className="description">{this.renderDescription()}</div>
        </div>
      </section>
    );
  }
  render() {
    return (
      <div>
        <MediaQuery maxWidth={mobileThreshold}>
          {matches => {
            return matches ? this.renderMobile() : this.renderDesktop();
          }}
        </MediaQuery>
      </div>
    );
  }
}
