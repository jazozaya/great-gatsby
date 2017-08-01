import React from 'react';
import SVGInline from 'react-svg-inline';
import './bullet.scss';

export default class Bullet extends React.Component {

  render(){
    const { name, highlight, iconSvg, label } = this.props;
    const wrapperName = highlight ? "bullet highlight" : "bullet"
    return(
        <div onClick={() => this.props.handler(name)} className={wrapperName}>
          <SVGInline svg={iconSvg} />
          <p>{label}</p>
        </div>);
    }
  }
