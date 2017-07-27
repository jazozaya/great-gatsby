import React from 'react'
import Link from 'gatsby-link'

import logo from './voltera-logo.min.svg'

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo-wrapper">
        <Link to='/'>
          <img src={logo} />

        </Link>
      </div>
    );
  }
}
