import React from 'react';
import Link from 'components/common/linkWrapper'
import SVGInline from "react-svg-inline"
import Logo from 'components/common/logo';

import './mobile.scss'
import { urls } from './constants'

var rawSVG = require('!raw-loader!./hamburger.min.svg');

export default class Mobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      subOpen: false
    };
  }

  // Small class that determines if we should highlight link.
  getClass(currentPage, pageName) {
    if(currentPage === pageName) {
      return "selected"
    }
  }

  renderSubheader() {
    const { pageName } = this.props;

    if (this.state.subOpen) {
      return(
        <ul className="sub-header">
          <li><Link className={this.getClass(pageName, urls.technology)} to={urls.technology}>How it works</Link></li>
          <li><Link className={this.getClass(pageName, urls.print)} to={urls.print}>Circuit Printing </Link></li>
          <li><Link className={this.getClass(pageName, urls.paste)} to={urls.paste}>Paste Dispensing</Link></li>
          <li><Link className={this.getClass(pageName, urls.software)} to={urls.software}>Desktop Software</Link></li>
          <li><Link className={this.getClass(pageName, urls.experiment)} to={urls.experiment}>Experiment</Link></li>
        </ul>
      );
    }
  }

  catchProduct(event) {
    event.stopPropagation();
    this.setState({ subOpen: !this.state.subOpen })
  }

  renderLinkPanel() {

    return (
      <div onClick= {() => this.setState({open : false})} className="link-panel-wrapper">
        <div className="link-panel">
          <ul>
            <li><Link to='/faq/'>FAQ</Link></li>
            <li><a onClick={(event) => this.catchProduct(event)}>Product</a></li>
            {this.renderSubheader()}
            <li><a href="http://community.voltera.io">Forums</a></li>
            <li><a href="http://support.voltera.io">Support</a></li>
            <li><a href="http://voltera.io/blog">Blog</a></li>
            <li><a href="http://store.voltera.io">Store</a></li>
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const hamburgerState = this.state.open ? "open" : "closed"
    return (
      <div className="header-mobile">
        <div>
          <a onClick= {() => this.setState({open : !this.state.open})} className={`hamburger ${hamburgerState}`}><SVGInline svg={rawSVG} /></a>
          {this.state.open ? this.renderLinkPanel() : null}
        </div>
        <Logo emblem="true" />
      </div>
    );
  }
}
