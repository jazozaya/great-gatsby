import React from 'react'
import Button from 'components/common/button'

import './buyNow.scss'

export default class Testimonial extends React.Component {

  render() {
    return (

      <div className="buyNow-wrapper">
      <div className="buyNow flex-row center-wide">
        <div>
          <h2>Ready to build hardware faster?</h2>
          <p>We can help with that.</p>
        </div>
        <div className="buttons">
          <Button label="Buy Now" url="https://store.voltera.io/products/voltera-v-one" color="dark" />
          <Button label="Reserve" url="/requestReservation/" internal color="white"/>
        </div>
      </div>
    </div>

  );
}
}
