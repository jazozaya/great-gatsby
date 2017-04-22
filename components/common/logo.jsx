import React from 'react'
import './logo.scss'

export default class Logo extends React.Component {
  render() {
    return (
      <a className="logo-wrapper" href="http:voltera.io">
        <img className="logo-image" src="assets/voltera-logo.png"/>
      </a>
    );
  }
}
