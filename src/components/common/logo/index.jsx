import React from 'react'
import Link from 'gatsby-link'

import logo from './voltera-logo.min.svg'
import logoEmblem from './voltera-emblem.min.svg'

export default class Logo extends React.Component {
  render() {
    const { emblem } = this.props;

    return (
      <div>
        <Link to='/'>
          { emblem ? <img src={logoEmblem}/> : <img src={logo} />}
        </Link>
      </div>
    );
  }
}
