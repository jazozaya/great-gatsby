import React from 'react';
import Logo from 'components/common/logo';
import Links from './links';
import LinksHamburger from './linksHamburger'
import './header.scss';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: 1920 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  renderHeader() {
    return (
      <div className="header-wrapper">
        <Logo />
        <Links />
      </div>
    );
  }

  renderHamburger() {
    return (
      <div className="header-wrapper-hamburger">
        <LinksHamburger />
        <Logo />
      </div>
    );
  }

  render() {
    return (<div className="header">
    {this.state.width < 600 ? this.renderHamburger() : this.renderHeader()}
  </div>);
}
}
