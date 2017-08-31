import React from 'react'
import './contact.scss'

import GoogleMap from './googleMap'

export default class Contact extends React.Component {

  render() {

    return (<div className="contact">
    <div className="contact-wrapper">
      <h1>Contact Us!</h1>
      <p className="pull-center">We are here to help! Please do not hesitate to email or call us. We normally reply within 1 business day.</p>
      <div className="email-wrapper">
        <div className="column">
          <ul>
            <h4>Sales & Technical Inquiries</h4>
            <li><a href="mailto:sales@voltera.io">sales@voltera.io</a></li>
            <li>+1 888-381-3332 ext: 1</li>
          </ul>
          <ul>
            <h4>Customer Support</h4>
            <li><a href="mailto:support@voltera.io">support@voltera.io</a></li>
            <li>+1 888-381-3332 ext: 2</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <h4>General Inquiries</h4>
            <li><a href="mailto:hello@voltera.io">hello@voltera.io</a></li>
          </ul>
          <ul>
            <h4>Press Inquiries</h4>
            <li><a href="mailto:press@voltera.io">press@voltera.io</a></li>
          </ul>
          <ul>
            <h4>Career Inquiries</h4>
            <li><a href="mailto:work@voltera.io">work@voltera.io</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="location-wrapper">
      <div className="address">
        <div className="address-wrapper">
          <h2>Office Location</h2>
          <ul>
            <li>Voltera Inc</li>
            <li>113 Breithaupt St, Suite 100</li>
            <li>Kitchener, Ontario</li>
            <li>Canada</li>
            <li>N2H 5G9</li>
          </ul>
        </div>
      </div>
      <GoogleMap />
    </div>

  </div>);
}
}
