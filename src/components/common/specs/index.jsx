import React from 'react'
import Row from './row'
import Button from 'components/common/button'

import './specs.scss'


export default class Specs extends React.Component {

  // componentDidMount() {
  //
  //     setTimeout(function() {
  //       document.getElementById("specs").scrollIntoView();
  //     }, 0);
  // }

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 1920,
      metric: true
    };
  }

  componentDidMount() {
    this.setState( {windowWidth: window.innerWidth });
  }

  renderUnitChange(units) {
    if (this.state.windowWidth < 600) {
      return <p>Units: <strong>{units}</strong><br /><a onClick={() => this.setState({metric: !this.state.metric})}>Change...</a></p>
    }
  }

  render() {

    var units = "both";
    if (this.state.windowWidth < 600) {
      if (this.state.metric){
        units = "Metric";
      }
      else {
        units="Imperial"
      }
    }

    return(
      <div id="specs" className="specs-wrapper">
        <div className="specs">
          <h1>Technical Specifications</h1>
          <p className="pull-center">Find the most up to date specifications about the Voltera V-One here. If you can't find what you are looking for, send us an email at <strong>support@voltera.io</strong> with your question.</p>
          {this.renderUnitChange(units)}
          <div className="table">
            <h3>Printing Specifications</h3>
            <Row units={units}>
              <p>Minimum trace width</p>
              <p>0.2mm</p>
              <p>8 mil</p>
            </Row>
            <Row units={units} dark>
              <p>Minimum passive size</p>
              <p>1005</p>
              <p>0402</p>
            </Row>
            <Row units={units}>
              <p>Minimum pin-to-pin pitch (Conductive ink)</p>
              <p>0.65mm</p>
              <p>32 mil</p>
            </Row>
            <Row units={units} dark>
              <p>Minimum pin-to-pin pitch (Solder Paste)</p>
              <p>0.5mm</p>
              <p>20 mil</p>
            </Row>
            <Row units={units}>
              <p>Resistivity</p>
              <p>	>12mΩ/sq @ 70um height</p>
              <p>	>12mΩ/sq @ 3mil height</p>
            </Row>
            <Row units={units} dark>
              <p>Supplied Substrate material</p>
              <p>FR4</p>
              <p>FR4</p>
            </Row>
            <Row units={units}>
              <p>Maximum board thickness</p>
              <p>3mm</p>
              <p>0.125”</p>
            </Row>
          </div>

          <div className="table">
            <h3>Soldering Specifications</h3>
            <Row units={units}>
              <p>Solder Paste Alloy</p>
              <p>Sn42/Bi57.6/Ag0.4</p>
              <p>	Sn42/Bi57.6/Ag0.4</p>
            </Row>
            <Row units={units} dark>
              <p>Solder wire alloy</p>
              <p>SnBiAg1</p>
              <p>SnBiAg1</p>
            </Row>
            <Row units={units}>
              <p>Soldering Iron Temperature</p>
              <p>180-210°C</p>
              <p>355-410°F</p>
            </Row>
          </div>
          <div className="table">
            <h3>Print Bed</h3>
            <Row units={units}>
              <p>Print Area</p>
              <p>	135mm x 113.5mm</p>
              <p>5.3" x 4.4"</p>
            </Row>
            <Row units={units} dark>
              <p>Max. heated bed temperature</p>
              <p>240°C</p>
              <p>464°F</p>
            </Row>
          </div>
          <div className="table">
            <h3>Footprint</h3>
            <Row units={units}>
              <p>Dimensions (L &times; W &times; H)</p>
              <p>	390mm x 257mm x 207mm</p>
              <p>	15.4” x 10.1” x 8.2”</p>
            </Row>
            <Row units={units} dark>
              <p>Weight</p>
              <p>~7kg</p>
              <p>~15.4lbs</p>
            </Row>
          </div>
          <div className="table">
            <h3>Software Requirements</h3>
            <Row units={units}>
              <p>Operating Systems</p>
              <p>Windows 7, 8, 10 (64bit), OSX 10.11+ </p>
              <p>Windows 7, 8, 10 (64bit), OSX 10.11+</p>
            </Row>
            <Row units={units} dark>
              <p>Compatible file format</p>
              <p>Gerber</p>
              <p>Gerber</p>
            </Row>
            <Row units={units}>
              <p>Connection type</p>
              <p>Wired USB</p>
              <p>Wired USB</p>
            </Row>
          </div>
        </div>
      </div>

    );
  }
}