import React from 'react';
import './featureSelector.scss';

import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

import Bullet from 'components/common/bullet';

import Print from './feature/print'
import Paste from './feature/paste'
import Selector from './selector'
import { features } from './constants'



export default class FeatureSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      featureName: features.print.name
    };
    this.handler = this.handler.bind(this)
  }

  // Callback that will update our state.
  handler(name) {
    this.setState({
      featureName: name
    })
  }
  
  renderFeature() {
    // Depending on selection, rende a different feature.

    switch(this.state.featureName){
      case features.print.name:
        return <Print />
      case features.reflow.name:
        return <Paste />
      case features.paste.name:
        return <Paste />
      case features.software.name:
        return <Paste />
      case features.platform.name:
        return <Paste />
      case features.experiment.name:
        return <Paste />
    }
  }
  render() {

    return (<div className="feature-selector">
    <div className="feature-selector-wrapper">
      {this.renderFeature()}
      <Selector selected={this.state.featureName} handler={this.handler}/>
    </div>
  </div>);
}
}
