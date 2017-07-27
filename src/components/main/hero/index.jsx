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
          <Button label="Reserve Now" url="/requestReservation/" internal color="clear" />
          <Button label="Buy Now" url="https://store.voltera.io/products/voltera-v-one" color="light" />
        </div>
      </div>
  </div>);
  }
}
