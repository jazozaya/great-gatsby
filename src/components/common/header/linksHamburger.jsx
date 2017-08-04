import React from 'react';
import Link from 'gatsby-link'
import SVGInline from "react-svg-inline"

var rawSVG = require('!raw-loader!./hamburger.min.svg');

export default class Links extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  renderLinkPanel() {
    return (
      <div onClick= {() => this.setState({open : !this.state.open})} className="link-panel-wrapper">
        <div className="link-panel">
          <ul>
            <li><Link to='/faq/'>FAQ</Link></li>
            <li><a href="http://community.voltera.io">Forums</a></li>
            <li><a href="http://support.voltera.io">Support</a></li>
            <li><a href="http://voltera.io/blog">Blog</a></li>
            <li><Link to='/contact/'>Contact</Link></li>
            <li><a href="http://store.voltera.io">Store</a></li>
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const hamburgerState = this.state.open ? "open" : "closed"
    return (
      <div>
        <a onClick= {() => this.setState({open : !this.state.open})} className={`hamburger ${hamburgerState}`}><SVGInline svg={rawSVG} /></a>
        {this.state.open ? this.renderLinkPanel() : null}
      </div>
    )
  }
}
