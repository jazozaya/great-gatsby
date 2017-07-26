import React from 'react'

import './minihero.scss'

  export default class MiniHero extends React.Component {

    render() {
      const { title, description } = this.props;
      return (
        <div className="mini-hero-wrapper">
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