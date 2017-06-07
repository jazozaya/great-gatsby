import React from 'react'

import './software.scss'

export default class Software extends React.Component {

  render() {
    return (<div className="software">
      <div className="description">
        <h2 className="pull-left">Software you want to use.</h2>
        <p>The software has been designed with you in mind. A minimal interface and instructional videos guide you every step of the way.</p>
        <p>It processes Gerber files - the same files you would send to a factory - so you can use a program that you're already comfortable with. (Eagle, Kicad, Altium, etc). Just generate your Gerbers to get started.</p>
      </div>
      <img className="software-image" src="/assets/voltera-software.png" />
  </div>);
}
}
