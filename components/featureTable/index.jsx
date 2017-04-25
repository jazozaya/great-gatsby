import React from 'react';
import './feature-table.scss';

import Bullet from 'components/common/bullet';

// <Bullet svg="experiment.min.svg" label="Experiment with the V-One"/>
export default class FeatureTable extends React.Component {

  render() {
    return (<div className="feature-table">
    <div className="feature-table-wrapper">
      <Bullet url="myUrl" icon="circuit" label="Create circuit boards" />
      <div className="vertical"></div>
      <Bullet url="myUrl" icon="ic" label="Dispense solder paste" />
      <div className="vertical"></div>
      <Bullet url="myUrl" icon="reflow" label="Reflow Your Parts on" />
    </div>
    <div className="feature-table-wrapper">
      <Bullet url="myUrl" icon="software" label="Software you want to use" />
      <div className="vertical"></div>
      <Bullet url="myUrl" icon="platform" label="Build faster with templates" />
      <div className="vertical"></div>
      <Bullet url="myUrl" icon="experiment" label="Experiment with the V-One" />
    </div>
  </div>);
}
}
