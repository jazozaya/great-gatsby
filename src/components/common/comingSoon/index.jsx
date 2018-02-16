import React from 'react'
import Button from 'components/common/button'

import './comingSoon.scss'

export default class CallToAction extends React.Component {

  render() {
    const { title, subtitle, buttonOne, buttonTwo } = this.props;

    return (
      <div className="coming-soon-wrapper">
        <h1>Available February 27th</h1>
        <p>Get yours for only <strong>$499 USD</strong> until <strong>March 31st</strong>!</p>
      </div>
    );
  }
}
