import React from 'react';

import './benefits.scss';

import Software from './software'
import Platform from './platform'
import Experiment from './experiment'

export default class Benefits extends React.Component {

  render() {
    return (<div className="benefits-wrapper">
      <div className="benefits">
        <Software />
        <Platform />
        <Experiment />
      </div>
  </div>);
}
}
