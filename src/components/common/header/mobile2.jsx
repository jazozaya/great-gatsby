import React from 'react';
import Link from 'gatsby-link'
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

  renderSubheader() {

    if (this.state.subOpen) {
      return(
        <ul className="sub-header">
          <li><Link to={urls.technology}>How it works</Link></li>
          <li><Link to={urls.print}>Circuit Printing </Link></li>
          <li><Link to={urls.paste}>Paste Dispensing</Link></li>
          <li><Link to={urls.software}>Desktop Software</Link></li>
          <li><Link to={urls.experiment}>Experiment</Link></li>
        </ul>
      );
    }
  }

  catchProduct(event) {

    event.stopPropagation();
    this.setState({
      subOpen: !this.state.subOpen,
    })

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
