import React from 'react'
import './workflow.scss'

import resistorIcon from './resistor.min.svg'
import machineIcon from './machine.min.svg'
import solderIcon from './iron.min.svg'
import factoryIcon from './factory.min.svg'
import solderedIcon from './soldered.min.svg'

import arrowRight from './arrow-right.min.svg'
import arrowDown from './arrow-down.min.svg'


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

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 1920,
    };
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
  }

  renderArrow() {
    if (this.state.windowWidth < 600) {
      return <img className="icon-arrow" src={arrowDown}></img>
    }
    return <img className="icon-arrow" src={arrowRight}></img>

  }

  renderPrintWorkflow() {
    return(
      <div className="workflow">
        <Step
          icon={resistorIcon}
          description="Design your circuit with the software you already use."
          />
        {this.renderArrow()}
        <Step
          icon={machineIcon}
          description="Load your gerbers in our software and print your circuit"
          />
        {this.renderArrow()}
        <Step
          icon={solderIcon}
          description="Mount or components on and reflow, or hand solder away!"
          />
      </div>
    );
  }

  renderSolderWorkflow() {
    return(
      <div className="workflow">
        <Step
          icon={factoryIcon}
          description="Order your boards from a factory or print them on the V-One."
          />
        {this.renderArrow()}
        <Step
          icon={machineIcon}
          description="Pop your board on and dispense solder paste in minutes."
          />
        {this.renderArrow()}
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

      <div className="workflow-wrapper">
        {workflowType === "print" ? this.renderPrintWorkflow() : this.renderSolderWorkflow() }
      </div>
    );
  }
}
