import React from 'react'
import Logo from 'components/common/logo'
import Links from './links'
import './header.scss'

export default class Header extends React.Component {

  render() {
    return (<div className="header">
      <div className="header-wrapper">
        <Logo />
        <Links />
      </div>
  </div>);
  }
}
