import React from 'react'
import Button from 'components/common/button'

import './buyNow.scss'

export default class Testimonial extends React.Component {

  render() {
    return (<div className="buyNow-wrapper">
    <div className="buyNow">
      <h1>Ready to build hardware faster?</h1>
      <div className="buttons">
        <Button label="Buy Now" url="https://store.voltera.io/products/voltera-v-one" color="light" />
        <Button label="Reserve" url="/requestReservation/" internal color="clear"/>
      </div>
    </div>
  </div>);
}
}
