import React from 'react'
import './about.scss'

import Awards from 'components/awards'

export default class About extends React.Component {

  render() {
    return (<div className="about">
    <div className="about-image"></div>
    <div className="about-wrapper">
    <h1>Our Story</h1>
    <p>The Voltera team is on a mission to modernize the electronics industry. What began as an idea – that it is time for rapid prototyping to reach the electronics industry – has evolved into a growing company delivering on that vision. Every day people are using the Voltera V-One to prototype innovative electronics, discover new things, and learn more about electronics.</p>
    </div>
    <Awards />
    </div>);
  }
}
