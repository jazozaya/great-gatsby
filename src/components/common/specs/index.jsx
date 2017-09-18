import React from 'react'
import Bowser from 'bowser'
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
      metric: true
    };
  }

  renderUnitChange(units) {
    if (Bowser.mobile) {
      return(
        <div className="units-wrapper">
          <a onClick={() => this.setState({metric: true})} className={units === "Metric" ? "units dark" : "units clear"}>Metric</a>
          <a onClick={() => this.setState({metric: false})} className={units === "Imperial" ? "units dark" : "units clear"}>Imperial</a>
        </div>
      )
    }
    return null;
  }

  render() {

    var units = "both";
    if (Bowser.mobile) {
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
          <p className="pull-center">Find the most up to date specifications about the Voltera V-One here. Send us an email if you cannot find what you are looking for.</p>
          {this.renderUnitChange(units)}
          <div className="table">
            <h3>Printing</h3>
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
              <p>Minimum pin-to-pin pitch</p>
              <p>0.65mm</p>
              <p>32 mil</p>
            </Row>
            <Row units={units} dark>
              <p>Resistivity</p>
              <p>	>12mΩ/sq @ 70um height</p>
              <p>	>12mΩ/sq @ 3mil height</p>
            </Row>
            <Row units={units}>
              <p>Supplied Substrate material</p>
              <p>FR4</p>
              <p>FR4</p>
            </Row>
            <Row units={units} dark>
              <p>Maximum board thickness</p>
              <p>3mm</p>
              <p>0.125”</p>
            </Row>
          </div>

          <div className="table">
            <h3>Soldering</h3>
            <Row units={units}>
              <p>Minimum Pin-to-Pin pitch</p>
              <p>0.5mm</p>
              <p>20 mil</p>
            </Row>
            <Row units={units} dark>
              <p>Solder Paste Alloy</p>
              <p>Sn42/Bi57.6/Ag0.4</p>
              <p>	Sn42/Bi57.6/Ag0.4</p>
            </Row>
            <Row units={units}>
              <p>Solder wire alloy</p>
              <p>SnBiAg1</p>
              <p>SnBiAg1</p>
            </Row>
            <Row units={units} dark>
              <p>Soldering Iron Temperature</p>
              <p>180-210°C</p>
              <p>355-410°F</p>
            </Row>
          </div>
          <div className="table">
            <h3>Print Bed</h3>
            <Row units={units}>
              <p>Print Area</p>
              <p>	128mm x 105mm</p>
              <p>5.0" x 4.1"</p>
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
