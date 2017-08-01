import React from 'react';
import './featureSelector.scss';

import Print from './teaser/print'
import Paste from './teaser/paste'
import Software from './teaser/software'
import Selector from './selector'
import { buttonDescriptions as f } from './selector/constants'

export default class FeatureSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      featureName: f.print.name,
      windowWidth: 1920,
      visible: true
    };
    this.handler = this.handler.bind(this)
  }

  // Callback that will update our state.
  handler(name) {

    if (this.state.featureName !== name) {
      this.setState({
        featureName: name,
        visible: false
      })
    }
  }

  renderFeature() {
    // Depending on selection, rende a different feature.
    switch(this.state.featureName){
      case f.print.name:
        return <Print />
      case f.paste.name:
        return <Paste />
      case f.software.name:
        return <Software />
    }
  }

  componentDidUpdate() {
    if (!this.state.visible) {
      setTimeout(() => this.setState( { visible: true}) , 100);
    }
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
  }

  renderMobile() {
    return(
      <section>
        <Print />
        <Paste />
        <Software />
      </section>
    );
  }

  render() {

    if (this.state.windowWidth < 600) {
      return this.renderMobile();
    }

    const visible = this.state.visible ? "visible": "";

    return (
      <section>
        <div className= {`feature-select ${visible}`}>
          {this.renderFeature()}
        </div>
        <Selector selected={this.state.featureName} handler={this.handler}/>
      </section>
    );
  }
}
