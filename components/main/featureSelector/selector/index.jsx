import React from 'react';
import './selector.scss';

import Bullet from './bullet';

import {  buttonDescriptions as f } from './constants'

export default class Selector extends React.Component {

  renderBullet(name, iconSvg, label) {
    const { selected } = this.props;

    if (selected === name) {
      return <Bullet highlight name={name} iconSvg={iconSvg} label={label} handler={this.props.handler} />
    } else {
      return <Bullet name={name} iconSvg={iconSvg} label={label} handler={this.props.handler} />
    }
  }

    render() {

      const { benefits } = this.props;
      return (
          <div className="selector">
            {this.renderBullet(f.print.name, f.print.iconSvg, f.print.label)}
            {this.renderBullet(f.paste.name, f.paste.iconSvg, f.paste.label)}
            {this.renderBullet(f.reflow.name, f.reflow.iconSvg, f.reflow.label)}
        </div>);
    }
  }
