import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import SVGInline from "react-svg-inline"

var rawSVG = require('!raw-loader!./hamburger.min.svg');

export default class Links extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  renderLinkPanel() {
    return (<div className="link-panel-wrapper">
              <ul>
                <li><a href="http://voltera.io/blog">Blog</a></li>
                <li><a href="http://community.voltera.io">Forums</a></li>
                <li><a href="http://support.voltera.io">Support</a></li>
                <li><Link to={prefixLink('/faq/')}>FAQ</Link></li>
                <li><Link to={prefixLink('/contact/')}>Contact</Link></li>
                <li><a href="http://store.voltera.io">Store</a></li>
                </ul>
            </div>)
  }

  render() {
    const hamburgerState = this.state.open ? "open" : "closed"
    return (
      <div onClick= {() => this.setState({open : !this.state.open})}>
        <a className={`hamburger ${hamburgerState}`}><SVGInline svg={rawSVG} /></a>
        {this.state.open ? this.renderLinkPanel() : null}
      </div>
    )
  }
}
