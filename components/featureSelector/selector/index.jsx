import React from 'react';
import './selector.scss';

import Bullet from 'components/common/bullet';

import { features as f } from './../constants'

export default class Selector extends React.Component {

  renderBullet(name, url, iconSvg, label) {
    const { selected } = this.props;

    if (selected === name) {
      return <Bullet highlight name={name} url={url} iconSvg={iconSvg} label={label} handler={this.props.handler} />
    } else {
      return <Bullet url={url} name={name} iconSvg={iconSvg} label={label} handler={this.props.handler} />
    }
  }

  render() {
    return (<div className="selector">
    <div className="selector-wrapper">
      {this.renderBullet(f.print.name, f.print.url, f.print.iconSvg, f.print.label)}
      <div className="vertical"></div>
      {this.renderBullet(f.paste.name, f.paste.url, f.paste.iconSvg, f.paste.label)}
      <div className="vertical"></div>
      {this.renderBullet(f.reflow.name, f.reflow.url, f.reflow.iconSvg, f.reflow.label)}
    </div>
    <div className="selector-wrapper">
      {this.renderBullet(f.software.name, f.software.url, f.software.iconSvg, f.software.label)}
      <div className="vertical"></div>
      {this.renderBullet(f.platform.name, f.platform.url, f.platform.iconSvg, f.platform.label)}
      <div className="vertical"></div>
      {this.renderBullet(f.experiment.name, f.experiment.url, f.experiment.iconSvg, f.experiment.label)}
    </div>
  </div>);
}
}
