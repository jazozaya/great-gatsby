import React from 'react'
import './workflow.scss'

import resistorIcon from './resistor.min.svg'
import machineIcon from './machine.min.svg'
import solderIcon from './iron.min.svg'
import arrowRight from './arrow-right.min.svg'

export default class Workflow extends React.Component {

  render() {
    return (<div className="workflow-wrapper">
      <div className="workflow">
        <div className="step">
          <img className="icon" src={resistorIcon}></img>
          <p>Design your circuit with the software you already use.</p>
        </div>
        <img className="icon-arrow" src={arrowRight}></img>
        <div className="step">
          <img className="icon" src={machineIcon}></img>
          <p>Load your gerbers in our software and print your circuit</p>
        </div>
        <img className="icon-arrow" src={arrowRight}></img>
        <div className="step">
          <img className="icon" src={solderIcon}></img>
          <p>Mount your components and solder away!</p>
        </div>

      </div>
    </div>);
  }
}
