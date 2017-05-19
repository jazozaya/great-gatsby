import React from 'react'
import Button from 'components/common/button'
import './feature.scss'

export default class Feature extends React.Component {

  render() {

    return (<div className="feature">
    <div className="feature-wrapper">
      <img src="/assets/features/prototyping-platform.jpg" />
      <div className="description">
        <h2>Build faster with templates!</h2>
        <p>Development platforms have become the easiest starting point for many projects. Take your breadboard projects to the next level with <strong>your own personal shields.</strong></p>
        <p>Get started quickly on projects with the <strong>Arduino® Uno, Arduino® Mega, Raspberry Pi™ B+, and the Particle Photon.</strong></p>
        <div className="wrap">
          <Button label="Learn More" url="learnMore" color="light"/>
        </div>
      </div>
    </div>
  </div>);
}
}
