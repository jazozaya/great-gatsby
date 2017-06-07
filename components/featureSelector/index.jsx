import React from 'react';
import './featureSelector.scss';

import Print from './feature/print'
import Paste from './feature/paste'
import Software from './feature/software'
import Platform from './feature/platform'
import Reflow from './feature/reflow'
import Experiment from './feature/experiment'


import Selector from './selector'
import { features } from './constants'

export default class FeatureSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      featureName: features.print.name,
      visible: true
    };
    this.handler = this.handler.bind(this)
  }

  // Callback that will update our state.
  handler(name) {
    this.setState({
      featureName: name,
      visible: false
    })
  }

  renderFeature() {
    // Depending on selection, rende a different feature.
    switch(this.state.featureName){
      case features.print.name:
      return <Print />
      case features.reflow.name:
      return <Reflow />
      case features.paste.name:
      return <Paste />
      case features.software.name:
      return <Software />
      case features.platform.name:
      return <Platform />
      case features.experiment.name:
      return <Experiment />
    }
  }

  componentDidUpdate() {
    if (!this.state.visible) {
      setTimeout(() => this.setState( { visible: true}) , 100);
    }
  }

  render() {

    const visible = this.state.visible ? "visible": "";

    return (<div className="feature-select">
    <Selector selected={this.state.featureName} handler={this.handler}/>
    <div className= {`feature-select-wrapper ${visible}`}>
      {this.renderFeature()}
    </div>
  </div>);
}
}
