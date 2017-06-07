import React from 'react'
import Button from 'components/common/button'
import './feature.scss'

export default class Feature extends React.Component {

  render() {

    return (<div className="feature">
      <img src="/assets/selector/prototyping-platform.jpg" />
      <div className="description">
        <h2>Boost your development speed!</h2>
        <p>Development platforms have become the easiest starting point for many projects. Take your breadboard projects to the next level with <strong>your own personal shields.</strong></p>
        <p>Get started quickly on projects with the <strong>Arduino® Uno, Arduino® Mega, Raspberry Pi™ B+, and the Particle Photon.</strong></p>
        <div className="button-wrap">
          <Button label="Learn More" internal url="/features/platform/" color="dark"/>
        </div>
    </div>
  </div>);
}
}
