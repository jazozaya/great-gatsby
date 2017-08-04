import React from 'react'
import './workflow.scss'

import cadIcon from './cad.min.svg'
import machineIcon from './machine.min.svg'
import solderIcon from './iron.min.svg'
import factoryIcon from './factory.min.svg'
import solderedIcon from './soldered.min.svg'

import arrowRight from './arrow-right.min.svg'

class Step extends React.Component {

  render() {
    const { icon, description } = this.props;
    return (
      <div className="step">
        <img className="icon" src={icon}></img>
        <p>{description}</p>
      </div>
    );
  }
}


export default class Workflow extends React.Component {

  renderPrintWorkflow() {
    return(
      <div className="flex-row center-wide workflow">
        <Step
          icon={cadIcon}
          description="Design your circuit with the software you already use."
          />
        <img className="icon-arrow" src={arrowRight}></img>
        <Step
          icon={machineIcon}
          description="Load your gerbers in our software and print your circuit"
          />
        <img className="icon-arrow" src={arrowRight}></img>
        <Step
          icon={solderIcon}
          description="Mount your components on and reflow, or hand solder away!"
          />
      </div>
    );
  }

  renderSolderWorkflow() {
    return(
      <div className="flex-row center-wide workflow">
        <Step
          icon={factoryIcon}
          description="Order your boards from a factory or print them on the V-One."
          />
        <img className="icon-arrow" src={arrowRight}></img>
        <Step
          icon={machineIcon}
          description="Pop your board on and dispense solder paste in minutes."
          />
        <img className="icon-arrow" src={arrowRight}></img>
        <Step
          icon={solderedIcon}
          description="Place your components on and watch them reflow!"
          />
      </div>
    );
  }

  render() {
    const { workflowType } = this.props;
    return (

      <div className="shadow-banner workflow-wrapper ">
        {workflowType === "print" ? this.renderPrintWorkflow() : this.renderSolderWorkflow() }
      </div>
    );
  }
}
