import React from 'react';
import Bowser from 'bowser'
import "./reminder.scss"

import Link from 'gatsby-link'

export default class Header extends React.Component {

  render() {
    let wrapperName = Bowser.mobile ? "reminder-wrapper mobile": "reminder-wrapper"
    return(
    <div className={wrapperName}>
      <Link className="tab buy-now" to="/store/">Buy Now</Link>
      <Link className="tab request-quote" to="/request/quote/">Get Quote</Link>
    </div>
  )
  }
}
