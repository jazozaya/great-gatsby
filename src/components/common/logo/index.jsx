import React from 'react'
import { Link } from 'gatsby'

import logo from './voltera-logo.min.svg'
import logoEmblem from './voltera-emblem.min.svg'

export default class Logo extends React.Component {
  render() {
    const { emblem } = this.props;

    return (
      <Link to='/'>
        { emblem ? <img src={logoEmblem} alt=""/> : <img src={logo} alt=""/>}
      </Link>
    );
  }
}
