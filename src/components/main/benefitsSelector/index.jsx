import React from 'react';

import './benefits.scss';

import Software from './software'
import Platform from './platform'
import Experiment from './experiment'

export default class BenefitsSelector extends React.Component {

  render() {
    return (<div className="benefits-selector-wrapper">
      <div className="benefits-selector">
        <Software />
        <Platform />
        <Experiment />
      </div>
  </div>);
}
}
