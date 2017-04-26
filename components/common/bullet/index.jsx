import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import './bullet.scss';

export default class Bullet extends React.Component {

  render(){
    const { name, highlight, iconSvg, label } = this.props;
    const wrapperName = highlight ? "bullet-wrapper highlight" : "bullet-wrapper"
    return(
      <div className="bullet">
        <div onClick={() => this.props.handler(name)} className={wrapperName}>
          <SVGInline svg={iconSvg} />
          <p>{label}</p>
        </div>
      </div>);
    }
  }
