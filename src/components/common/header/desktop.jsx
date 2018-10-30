import React from 'react';
import { Link } from 'gatsby'
import Logo from 'components/common/logo';
import SVGInline from "react-svg-inline"
import './desktop.scss'

import { urls } from './constants'
import { collections as c } from 'components/store/constants'

var rawSVG = require('!raw-loader!./cart.min.svg');

export default class Desktop extends React.Component {

  // Small class that determines if we should highlight link.
  startsWith(currentPage, query) {
    if(currentPage.indexOf(query) === 0){
      return "selected"
    }
  }
  includes(currentPage, query) {
    if(currentPage.indexOf(query) !== -1){
      return "selected"
    }
  }

  renderProductLinks(pageName) {
    return (
      <div className="child-wrapper">
        <div className="child-header">
          <Link className={this.startsWith(pageName, urls.technology)} to={urls.technology}>How it works</Link>
          <Link className={this.startsWith(pageName, urls.print )} to={urls.print}>Circuit Printing </Link>
          <Link className={this.startsWith(pageName, urls.drill)} to={urls.drill}>Drilling</Link>
          <Link className={this.startsWith(pageName, urls.paste)} to={urls.paste}>Paste Dispensing</Link>
          <Link className={this.startsWith(pageName, urls.software)} to={urls.software}>Desktop Software</Link>
          <Link className={this.startsWith(pageName, urls.experiment)} to={urls.experiment}>Experiment</Link>
        </div>
      </div>
    )
  }

  renderStoreLinks(pageName) {
    return(
      <div className="child-wrapper">
        <div className="child-header">
          <Link className={pageName === "/store/" ? "selected" : null} to={'/store/'}>{c.vOne.title}</Link>
          <Link className={this.includes(pageName, c.newItems.handle)} to={`/store/collection/${c.newItems.handle}/`}>{c.newItems.title}</Link>
          <Link className={this.includes(pageName, c.bundles.handle)} to={`/store/collection/${c.bundles.handle}/`}>{c.bundles.title}</Link>
          <Link className={this.includes(pageName, c.accessories.handle)} to={`/store/collection/${c.accessories.handle}/`}>{c.accessories.title}</Link>
          <Link className={this.includes(pageName, c.inks.handle)} to={`/store/collection/${c.inks.handle}/`}>{c.inks.title}</Link>
          <Link className={this.includes(pageName, c.drilling.handle)} to={`/store/collection/${c.drilling.handle}/`}>{c.drilling.title}</Link>
          <Link className={this.includes(pageName, c.solder.handle)} to={`/store/collection/${c.solder.handle}/`}>{c.solder.title}</Link>
          <Link className={this.includes(pageName, c.substrates.handle)} to={`/store/collection/${c.substrates.handle}/`}>{c.substrates.title}</Link>
          <Link className={this.includes(pageName, c.swag.handle)} to={`/store/collection/${c.swag.handle}/`}>{c.swag.title}</Link>
          <div className="divider"></div>
          <Link className={this.includes(pageName, 'cart')} to={`/store/cart/`}><SVGInline className="cart-icon" svg={rawSVG} />Cart</Link>
        </div>
      </div>
    )
  }

  renderChild() {
    const { pageName } = this.props;

    if (pageName.indexOf("/product") === 0) {
      return this.renderProductLinks(pageName)
    }

    if (pageName.indexOf("/store") === 0) {
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
              <Link className={this.startsWith(pageName, "/product/")} to={urls.technology}>Product</Link>
              <a href="http://community.voltera.io">Forums</a>
              <a href="http://support.voltera.io">Support</a>
              <Link className={this.startsWith(pageName, "/faq/")} to="/faq/">FAQ</Link>
              <Link className={this.startsWith(pageName, "/contact/")}to="/contact/">Contact</Link>
              <Link className={`store-link ${this.startsWith(pageName,"/store/")}`} to="/store/">Store</Link>
            </div>
          </div>
        </div>
        {this.renderChild()}
    </div>
    );
  }
}
