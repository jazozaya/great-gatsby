import React from 'react'

import './software.scss'

export default class Software extends React.Component {

  render() {
    return (<div className="software">
      <div className="software-wrapper">
        <div className="software-image">
        </div>
      <div className="description">
        <h2>Software you want to use.</h2>
        <p>The software has been designed with you in mind. A simplified interface and instructional videos guide you every step of the way. You&#39;ll quickly learn how to mount your dispenser, probe your board, print your circuit and more.</p>
        <p>It processes Gerber files - the same files you would send to a factory - so you can use a program that you're already comfortable with. (Eagle, Kicad, Altium, etc). Just generate your Gerbers to get started.</p>

      </div>
    </div>
  </div>);
}
}
