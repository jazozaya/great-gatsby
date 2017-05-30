import React from 'react'
import './hero.scss'
import Button from 'components/common/button'

export default class Hero extends React.Component {

  render() {
    return (<div className="hero">
      <div className="hero-wrapper">
        <h1>Build hardware faster.</h1>
        <p>Prototype circuits on your desktop <br /> with the Voltera V-One.</p>
        <div className="buttons">
          <Button label="Learn More" url="/product/" internal color="clear"/>
          <Button label="Store" url="http://voltera.io/store" color="light" />
        </div>
      </div>
  </div>);
  }
}
