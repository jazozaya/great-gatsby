import React from 'react'
import Link from 'gatsby-link'

import './comingSoon.scss'

export default class ComingSoon extends React.Component {

  render() {
    const { title, subtitle, buttonOne, buttonTwo } = this.props;

    return (
      <div className="coming-soon-wrapper">
        <h1>Available Now!</h1>
        <p>Get yours for only <strong><Link to="/store/#drill">$499 USD</Link></strong> until <strong>March 31st</strong>!</p>
      </div>
    );
  }
}
