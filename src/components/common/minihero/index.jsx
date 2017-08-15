import React from 'react'
import Bowser from 'bowser'

import './minihero.scss'

  export default class MiniHero extends React.Component {

    render() {
      const { title, description } = this.props;
      const spacer =  !Bowser.mobile ? "mini-spacer" : "";
      
      return (
        <div className={`mini-hero-wrapper ${spacer}`}>
          <div className="mini-hero">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="fast-fact-wrapper">
            {this.props.children}
            </div>
          </div>
        </div>
      );
    }
  }
