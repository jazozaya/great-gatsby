import React from 'react';
import Link from 'gatsby-link'
import Logo from 'components/common/logo';
import SVGInline from "react-svg-inline"
import './desktop.scss'

var rawSVG = require('!raw-loader!./cart.min.svg');


import { urls } from './constants'
import { collections as c } from 'components/store/constants'

export default class Desktop extends React.Component {

  // Small class that determines if we should highlight link.
  getClass(currentPage, pageName) {
    if(currentPage.indexOf(pageName) !== -1) { //IE does not support includes...
      return "selected"
    }
  }

  renderProductLinks(pageName) {
    return (
      <div className="child-wrapper">
        <div className="child-header">
          <Link className={this.getClass(pageName, urls.technology)} to={urls.technology}>How it works</Link>
          <Link className={this.getClass(pageName, urls.print )} to={urls.print}>Circuit Printing </Link>
          <Link className={this.getClass(pageName, urls.paste)} to={urls.paste}>Paste Dispensing</Link>
          <Link className={this.getClass(pageName, urls.software)} to={urls.software}>Desktop Software</Link>
          <Link className={this.getClass(pageName, urls.experiment)} to={urls.experiment}>Experiment</Link>
        </div>
      </div>
    )
  }

  renderStoreLinks(pageName) {
    return(
      <div className="child-wrapper">
        <div className="child-header">
          <Link className={pageName === "/store/" ? "selected" : null} to={'/store/'}>{c.vOne.title}</Link>
          <Link className={this.getClass(pageName, c.bundles.handle)} to={`/store/collection/${c.bundles.handle}/`}>{c.bundles.title}</Link>
          <Link className={this.getClass(pageName, c.accessories.handle)} to={`/store/collection/${c.accessories.handle}/`}>{c.accessories.title}</Link>
          <Link className={this.getClass(pageName, c.inks.handle)} to={`/store/collection/${c.inks.handle}/`}>{c.inks.title}</Link>
          <Link className={this.getClass(pageName, c.solder.handle)} to={`/store/collection/${c.solder.handle}/`}>{c.solder.title}</Link>
          <Link className={this.getClass(pageName, c.substrates.handle)} to={`/store/collection/${c.substrates.handle}/`}>{c.substrates.title}</Link>
          <Link className={this.getClass(pageName, c.swag.handle)} to={`/store/collection/${c.swag.handle}/`}>{c.swag.title}</Link>
          <div className="divider"></div>
          <Link className={this.getClass(pageName, 'cart')} to={`/store/cart/`}><SVGInline className="cart-icon" svg={rawSVG} />Cart</Link>
        </div>
      </div>
    )
  }

  renderChild() {
    const { pageName } = this.props;

    if (pageName.startsWith('/product/')){
      return this.renderProductLinks(pageName)
    }

    if (pageName.startsWith('/store/')) {
      return this.renderStoreLinks(pageName)
    }
    return null;
  }

  render() {
    const { pageName } = this.props;
    return (
      <div className="header-wrapper">
        <div className="parent-wrapper">
          <div className="parent-header">
            <Logo />
            <div className="links">
              <Link className={this.getClass(pageName, "/faq/")} to="/faq/">FAQ</Link>
              <Link className={this.getClass(pageName, "/product/")} to={urls.technology}>Product</Link>
              <a href="http://community.voltera.io">Forums</a>
              <a href="http://support.voltera.io">Support</a>
              <Link className={this.getClass(pageName, "/contact/")}to="/contact/">Contact</Link>
              <Link className={`store-link ${this.getClass(pageName,"/store/")}`} to="/store/">Store</Link>
            </div>
          </div>
        </div>
        {this.renderChild()}
    </div>
    );
  }
}
