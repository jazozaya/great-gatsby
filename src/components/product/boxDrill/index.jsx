import React from 'react'
import Bowser from 'bowser'
import './box.scss'

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
  safetyGlasses: "safety-glasses",
}

export default class InTheBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: summary.drill,
      hoverDescription: null,
      interacted: false
    };
  }

  renderDrill() {
    return(
      <div>
        <h2>The V-One Drill Attachment</h2>
        <p>This attachment snaps onto the V-One just like the probe and dispenser. The V-One </p>
        <p>Hover over the items on the left to learn more.</p>
        <i>Items not listed here: 4 Thumbscrews, 1 Hex key, 1 drilling starter circuit.</i>
      </div>
    )
  }

  renderDrillBits() {
    return(
      <div>
        <h2>Drill Bit Set</h2>
        <p>A set of precision drill bits. Installing them is easy and only needs a single 2.5mm hex key to install them in coupler.</p>
        <p>The most common PCB drill sizes are included: 0.70mm, 0.80mm, 0.90mm, 1.00mm, 1.60mm. Two drill bits for each size.</p>
        <i>1 set included.</i>
      </div>
    )
  }
  renderSmallSubstrates() {
    return(
      <div>
        <h2>2x3” FR1 Substrates</h2>
        <p>If you are going to be drilling, we recommend drilling on FR1 substrates.</p>
        <p>Unlike FR4, FR1 dust does not contain fiber glass which can be harmful to your lungs. It is also a softer material, which means a less wear and tear on the drill bits.</p>
        <i>10 substrates included</i>
      </div>
    )
  }

  renderLargeSubstrates(){
    return (
      <div>
        <h2>3x4” FR1 Substrates</h2>
        <p></p>
        <p>TODO - fix this text </p>
        <i>6 substrates included</i>
      </div>
    )
  }

  renderRivetTools() {
    return (
      <div>
        <h2>Rivet Tools</h2>
        <p>Use the right tool for the right job. These steel tools are used to press the rivets on the PCB after holes have been drilled.</p>
        <p>They have been designed for optimum performance on the ink and ensures an electrical connection between the top and bottom layers of your PCB.</p>
        <i>2 sizes included.</i>
      </div>
    )
  }

  renderRivetContainerLarge() {
    return (
      <div>
        <h2>1.0mm Rivets</h2>
        <p>Every circuit needs a place to live. Once your design is finished, export the Gerbers and mount your substrate on the V-One to start printing.</p>
        <p>These substrates are standard FR4 boards coated with solder mask to make hand soldering and reflowing easier. We have several sizes to suit your needs, visit our store to see them all!</p>
        <i>200 Pcs included.</i>
      </div>
    )
  }

  renderRivetContainerSmall() {
    return(
      <div>
        <h2>0.4mm Rivets</h2>
        <p>This dispensing head is used to deposit ink or solder paste onto your board. An internal leadscrew is the key for extremely fine control over the ink flow.</p>
        <p>Installing them on the machine is a snap. Literally! The finger grips and magnets allow for seamless mounting and removal. No tools required.</p>
        <i>200 Pcs incldued.</i>
      </div>
    )
  }

  renderSacrificalLayer() {
    return(
      <div>
        <h2>Sacrificial Layer</h2>
        <p>The heated platform of the v-one needs to be protected. Mount this board on and then mount your substrate on top.</p>
        <p>it will protect the heated bed of the V-One and the drill bits from any damage.</p>
        <i>1 sacrificial board included</i>
      </div>
    )
  }

  renderSafetyGlasses() {
    return(
      <div>
        <h2>Safety Glasses</h2>
        <p>talk about safety first! We want to make sure you do things right</p>
        <i>1 set included</i>
      </div>
    )
  }

  renderDescription() {

    const description = this.state.hoverDescription || this.state.description

    switch(description) {
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
    }
  }

  renderClassName(item) {
    const description = this.state.hoverDescription || this.state.description
    if (item === description ) {
      return `outline ${item} visible`;
    } else {
      return `outline ${item}`;
    }
  }

  renderItem(name) {
    return (<div
      className={this.renderClassName(name)}
      onMouseEnter={() => this.setState({hoverDescription: name})}
      onMouseLeave={() => this.setState({hoverDescription: null})}
      onClick={() => this.setState({description: name})}
    />)
  }

  renderInTheBox(){

    if(!this.state.interacted) {
      return <div className="try-me" onClick={() => this.setState({interacted: true})}/>
    }
    return(
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
    )
  }

  renderMobile() {
    return(
        <div className="box-wrapper-drill">
          <h1>What is in the box?</h1>
          <p className="pull-center">The V-One Drill comes with everything you need to make double sided boards out of the box.</p>
          <img src="/v-one-box-min.png" />
          <div className="mobile-contents">
            <p><strong>1 - V-One Drill</strong>.<br />A drilling attachment for the Voltera V-One</p>
            <p><strong>1 - Drill Bits Set</strong>.<br />--</p>
            <p><strong>200 - 0.4mm Rivets</strong>.<br />--</p>
            <p><strong>200 - 1.0mm Rivets</strong>.<br />--</p>
            <p><strong>1 - 0.4mm Rivet Tool</strong>.<br />--</p>
            <p><strong>1 - 1.0mm Rivet Tool</strong>.<br />--</p>
            <p><strong>10 - 2x3” FR1 Substrates</strong>.<br />--</p>
            <p><strong>6 - 3x4” FR1 Substrates</strong>.<br />--</p>
            <p><strong>1 - Safety Glasses</strong>.<br />--</p>
            <p><strong>1 - Sacrificial Layer</strong>.<br />--</p>
            <p><strong>4 - 10mm Long thumbcrews</strong>.<br />--</p>
            <p><strong>1 - 2.5mm Hex Key</strong>.<br />--</p>

          </div>
      </div>
    );
  }

  renderDesktop() {
    return (
      <div className="box-wrapper-drill">
        <h1>What is in the box?</h1>
        <p className="pull-center">The V-One Drill comes with everything you need to make double sided boards out of the box.</p>
        <div className="flex-row">
          {this.renderInTheBox()}
          <div className="description">
            {this.renderDescription()}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return Bowser.mobile ? this.renderMobile() : this.renderDesktop();
  }
}
