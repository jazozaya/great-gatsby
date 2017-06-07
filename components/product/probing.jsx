import React from 'react'

import './probing.scss'

export default class Software extends React.Component {

  render() {
    return (<div className="probing">
    <img className="probing-image" src="/assets/voltera-probe.png"/>
    <div className="description">
      <h2 className="pull-left">A perfect print every time.</h2>
      <p>This high precision probe was developed from the ground up. It magnetically attaches to the V-One and creates a height map of your substrate before printing. The V-One takes the map into account and makes micro adjustments to ensure a printing height of 100 microns. </p>
      <p>We do not need the substrate to be conductive, which means we can dispense on rigid materials like FR4, glass and ceramics, along with flexible substrates like Kapton (Polyimide).</p>
    </div>
  </div>);
}
}
