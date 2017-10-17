import React from 'react'
import './hero.scss'
import Button from 'components/common/button'

export default class Hero extends React.Component {

  render() {
    return (<div className="hero">
      <div className="hero-wrapper">
        <h1>Build hardware faster.</h1>
        <p>Prototype on your desktop with the<br />Voltera V-One PCB Printer.</p>
        <div className="buttons">
          <Button label="Buy Now - $3,499" url="/store/" internal color="light" />
          <Button label="Learn More" url="/product/technology/" internal color="clear" />
        </div>
      </div>
  </div>);
  }
}
