import React from 'react'
import Bowser from 'bowser'
import Row from './row'
import Button from 'components/common/button'

import './specs.scss'


export default class Specs extends React.Component {

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
          <p className="pull-center">Find the most up to date specifications about the V-One Drill</p>
          {this.renderUnitChange(units)}
          <div className="table">
            <h3>Drilling</h3>
            <Row units={units}>
              <p>Runout (TIR)</p>
              <p>0.025mm</p>
              <p>0.001”</p>
            </Row>
            <Row units={units} dark>
              <p>Maximum Speed</p>
              <p>13,000 RPM</p>
              <p>13,000 RPM</p>
            </Row>
            <Row units={units}>
              <p>Drill Bit Size (maximum)</p>
              <p>2.0 mm</p>
              <p>0.078”</p>
            </Row>
            <Row units={units} dark>
              <p>Drill Bit Length (OAL)</p>
              <p>38.1mm</p>
              <p>1.5”</p>
            </Row>

          </div>
        </div>
      </div>

    );
  }
}
