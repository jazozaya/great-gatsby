import React from 'react'
import Bowser from 'bowser'
import './box.scss'

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
}

export default class InTheBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: summary.vOne,
    };
  }

  setDescription(name) {
    this.setState({
      description: name
    })
  }

  renderVOne() {
    return(
      <div>
        <h2>The Voltera V-One</h2>
        <p>The V-One is a 3 axis machine, it is about the same size as a laptop and can fit on your desk. </p>
        <p>It is equipped with a heated platform to used to cure conductive ink and to reflow solder paste. </p>
      </div>
    )
  }

  renderBurnishingPad() {
    return(
      <div>
        <h2>Burnishing Pad</h2>
        <p>After your circuit is printed and cured, the silver traces need a quick burnishing step to remove any organic matter left behind. The burnishing pad contains micro­pores that can remove even the smallest contaminants. </p>
        <p>Just give the board a scrub and watch the traces turn silver!</p>
      </div>
    )
  }

  renderNozzles(){
    return (
      <div>
        <h2>Dispensing Nozzles</h2>
        <p>With an inner diameter of 200 microns (9 mil), these stainless steel dispensing tips are crucial for accurate deposition of ink and solder paste. Do you want ultra fine resolution? Visit our store for even smaller nozzles.</p>
        <p>They are installed directly on the cartridges and should be treated with care. The V-One ships with 2 extra nozzles in case you need them. </p>
      </div>
    )
  }

  renderSolderWire() {
    return (
      <div>
        <h2>Solder Wire</h2>
        <p>Done printing? Let’s add some components! If you are working with through hole components, use this solder wire and plenty of flux to ensure a strong solder joint. We’ve chemically tested it to be most compatible with our nanoparticle ink.</p>
      </div>
    )
  }

  renderSubstrates() {
    return (
      <div>
        <h2>Substrates</h2>
        <p>Every circuit needs a place to live. Once your design is finished, export the Gerbers and mount your substrate on the V-One to start printing.</p>
        <p>These substrates are standard FR4 boards coated with solder mask to make hand soldering and reflowing easier. We have several sizes to suit your needs, visit our store to see them all!</p>
      </div>
    )
  }

  renderDispenser() {
    return(
      <div>
        <h2>Dispensers</h2>
        <p>This dispensing head is used to deposit ink or solder paste onto your board. An internal leadscrew is the key for extremely fine control over the ink flow.</p>
        <p>Installing them on the machine is a snap. Literally! The finger grips and magnets allow for seamless mounting and removal. No tools required.</p>
      </div>
    )
  }

  renderCartridgeInk() {
    return(
      <div>
        <h2>Ink Cartridge</h2>
        <p>Watch the V-One draw your circuit in minutes as ink is dispensed trace by trace, pad by pad.</p>
        <p>This ink cartridge is over 90% pure silver and can print up to 85 simple boards. That means 85 unique designs with no lead time.</p>
      </div>
    )
  }

  renderCartridgePaste() {
    return(
      <div>
        <h2>Solder Paste Cartridge</h2>
        <p>Whether you got the circuit boards from a factory or you made them with the V-One, this lead free solder paste cartridge will make board assembly a breeze.</p>
        <p>A single cartridge is able to populate over 10,000 0603 pads, that is more than plenty for a small batch of PCBA.</p>
      </div>
    )
  }

  renderProbe() {
    return(
      <div>
        <h2>Height Probe</h2>
        <p>How do you achieve a perfect print every time?</p>
        <p>The probe is used to measure the height of your substrate. Right before a print the V-One will probe an array of points to create a height map.</p>
        <p>During printing, the V-One software uses the map and makes micro adjustments to the height to keep a constant height.</p>
      </div>
    )
  }

  renderClamps() {
    return(
      <div>
        <h2>Substrate Clamps</h2>
        <p>These aluminum clamps will hold your board down securely for either printing or paste dispensing. They have been designed with flexibility in mind, allowing you to mount a wide range of board sizes and thicknesses.</p>
        <p>Clamping down the substrate is easy. The machine comes with a set of thumbscrews so no need to fiddle with screwdrivers or allen keys. </p>
      </div>
    )
  }
  renderDescription() {

    switch(this.state.description) {
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
    }
  }

  renderClassName(item) {
    if (item === this.state.description) {
      return `outline ${item} visible`;
    } else {
      return `outline ${item}`;
    }
  }

  renderMobile() {
    return(
        <div className="box-wrapper shadow-banner">
          <h1>What is in the box?</h1>
          <p className="pull-center">The V-One comes with all the accessories and consumables you need to start building hardware faster.</p>
          <img src="/v-one-box-min.png" />
          <div className="mobile-contents">
            <p><strong>1 - Voltera V-One</strong>.<br />A protoyping tool that can fit on your desk.</p>
            <p><strong>1 - Probe</strong>.<br />A sensor that maps the height of your board.</p>
            <p><strong>2 - Clamps</strong>.<br />Hold your board in place while dispensing</p>
            <p><strong>1 - Burnishing pad</strong>.<br />Scrub your board to see the traces turn silver!</p>
            <p><strong>2 - Dispensers</strong>.<br />Pop the cartridges in and start dispensing! </p>
            <p><strong>1 - Conductive ink</strong>.<br />Over 90% silver and fully solderable.</p>
            <p><strong>1 - Solder paste</strong>.<br />Lead free paste that makes assembly a breeze.</p>
            <p><strong>1 - Solder wire spool</strong>.<br />A special alloy to attach your components.</p>
            <p><strong>10 - Small substrates</strong>.<br />Every circuit needs a place to live!</p>
            <p><strong>6 - Large substrates</strong>.<br />To help you protoype larger circuits.</p>
          </div>
      </div>
    );
  }

  renderDesktop() {
    return (
      <div className="box-wrapper shadow-banner">
        <div className="center-wide">
          <h1>What is in the box?</h1>
          <p className="pull-center">The V-One comes with all the accessories and consumables you need to start building hardware faster.</p>
          <div className="flex-row">
            <div className="in-the-box">
              <div className={this.renderClassName(summary.vOne)} onClick={() => this.setDescription(summary.vOne)}></div>
              <div className={this.renderClassName(summary.probe)} onClick={() => this.setDescription(summary.probe)}></div>
              <div className={this.renderClassName(summary.clamps)} onClick={() => this.setDescription(summary.clamps)}></div>
              <div className={this.renderClassName(summary.burnishingPad)} onClick={() => this.setDescription(summary.burnishingPad)}></div>
              <div className={this.renderClassName(summary.dispenserInk)} onClick={() => this.setDescription(summary.dispenserInk)}></div>
              <div className={this.renderClassName(summary.dispenserPaste)} onClick={() => this.setDescription(summary.dispenserPaste)}></div>
              <div className={this.renderClassName(summary.cartridgePaste)} onClick={() => this.setDescription(summary.cartridgePaste)}></div>
              <div className={this.renderClassName(summary.cartridgeInk)} onClick={() => this.setDescription(summary.cartridgeInk)}></div>
              <div className={this.renderClassName(summary.nozzles)} onClick={() => this.setDescription(summary.nozzles)}></div>
              <div className={this.renderClassName(summary.substrates)} onClick={() => this.setDescription(summary.substrates)}></div>
              <div className={this.renderClassName(summary.solderWire)} onClick={() => this.setDescription(summary.solderWire)}></div>
            </div>
            <div className="description">
              {this.renderDescription()}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    if (Bowser.mobile) {
      return this.renderMobile()
    }
    return this.renderDesktop()
  }
}
