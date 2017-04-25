import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import './bullet.scss';

// React tends to complain if we have dynamic imports.
// So load them all into an object and use pass in key.
const svgList = {
  software:  require('!raw-loader!./icons/software.min.svg'),
  circuit: require('!raw-loader!./icons/circuit.min.svg'),
  experiment:  require('!raw-loader!./icons/experiment.min.svg'),
  ic: require('!raw-loader!./icons/ic.min.svg'),
  platform: require('!raw-loader!./icons/platform.min.svg'),
  reflow: require('!raw-loader!./icons/reflow.min.svg')
}

const rawSVG = require('!raw-loader!./icons/software.min.svg'); // Reads the raw file.

export default class Bullet extends React.Component {

  render(){
    const { icon, label } = this.props;
    return(
      <div className="bullet">
        <a href="voltera.io">
          <SVGInline svg={svgList[icon]} />
          <p>{label}</p>
        </a>
      </div>);
    }
  }
