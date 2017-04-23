import React from 'react'
import Row from './row'

import './specs.scss'


export default class Specs extends React.Component {

  render() {

    return (<div className="specs">
    <div className="specs-wrapper">
      <h1>Detailed Specifications</h1>
      <div className="table">
        <h3>Printing Specifications</h3>
        <Row>
          <p>Minimum trace width</p>
          <p>0.2mm</p>
          <p>8 mil</p>
        </Row>
        <Row light>
          <p>Minimum passive size</p>
          <p>1005</p>
          <p>0402</p>
        </Row>
        <Row>
          <p>Minimum pin-to-pin pitch (Conductve ink)</p>
          <p>0.65mm</p>
          <p>32 mil</p>
        </Row>
        <Row light>
          <p>Minimum pin-to-pin pitch (Solder Paste)</p>
          <p>0.5mm</p>
          <p>20 mil</p>
        </Row>
        <Row>
          <p>Resistivity</p>
          <p>	>12mΩ/sq @ 70um height</p>
          <p>	>12mΩ/sq @ 3mil height</p>
        </Row>
        <Row light>
          <p>Supplied Substrate material</p>
          <p>FR4</p>
          <p>FR4</p>
        </Row>
        <Row>
          <p>Maximum board thickness</p>
          <p>3mm</p>
          <p>0.125”</p>
        </Row>
      </div>

      <div className="table">
        <h3>Soldering Specifications</h3>
        <Row>
          <p>Solder Paste Alloy</p>
          <p>Sn42/Bi57.6/Ag0.4</p>
          <p>	Sn42/Bi57.6/Ag0.4</p>
        </Row>
        <Row light>
          <p>Solder wire alloy</p>
          <p>SnBiAg1</p>
          <p>SnBiAg1</p>
        </Row>
        <Row>
          <p>Soldering Iron Temperature</p>
          <p>180-210°C</p>
          <p>355-410°F</p>
        </Row>
      </div>

      <div className="table">
        <h3>Print Bed</h3>
        <Row>
          <p>Print Area</p>
          <p>	135mm x 113.5mm</p>
          <p>5.3" x 4.4"</p>
        </Row>
        <Row light>
          <p>Max. heated bed temperature</p>
          <p>240°C</p>
          <p>464°F</p>
        </Row>
      </div>

      <div className="table">
        <h3>Footprint</h3>
        <Row>
          <p>Dimensions (L x W x H)</p>
          <p>	390mm x 257mm x 207mm</p>
          <p>	15.4” x 10.1” x 8.2”</p>
        </Row>
        <Row light>
          <p>Weight</p>
          <p>~7kg</p>
          <p>~15.4lbs</p>
        </Row>
      </div>

      <div className="table">
        <h3>Software Requirements</h3>
        <Row>
          <p>Operating Systems</p>
          <p>Windows 7, 8, 10 (64bit), OSX 10.11+ </p>
          <p>	15.4” x 10.1” x 8.2”</p>
        </Row>
        <Row light>
          <p>Compatible file format</p>
          <p>Gerber</p>
          <p>Gerber</p>
        </Row>
        <Row>
          <p>Connection type</p>
          <p>Wired USB</p>
          <p>Wired USB</p>
        </Row>
      </div>

    </div>
  </div>);
}
}
