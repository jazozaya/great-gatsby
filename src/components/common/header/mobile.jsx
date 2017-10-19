import React from 'react';
import Link from 'gatsby-link'
import SVGInline from "react-svg-inline"
import Logo from 'components/common/logo';

import './mobile.scss'
import { urls } from './constants'
import { collections as c } from 'components/store/constants'

var rawSVGHamburger = require('!raw-loader!./hamburger.min.svg');
var rawSVGCart = require('!raw-loader!./cart.min.svg');

export default class Mobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSubProduct: false,
      openSubStore: false,
    };
  }

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
  renderSubheaderProduct() {
    const { pageName } = this.props;

    if (!this.state.openSubProduct) {
      return null
    }

    return(
      <ul className="sub-header">
        <li><Link className={this.startsWith(pageName, urls.technology)} to={urls.technology}>How it works</Link></li>
        <li><Link className={this.startsWith(pageName, urls.print)} to={urls.print}>Circuit Printing </Link></li>
        <li><Link className={this.startsWith(pageName, urls.paste)} to={urls.paste}>Paste Dispensing</Link></li>
        <li><Link className={this.startsWith(pageName, urls.software)} to={urls.software}>Desktop Software</Link></li>
        <li><Link className={this.startsWith(pageName, urls.experiment)} to={urls.experiment}>Experiment</Link></li>
      </ul>
    );
  }

  renderSubheaderStore() {
    const { pageName } = this.props;

    if (!this.state.openSubStore) {
      return null
    }
    return(
      <ul className="sub-header">
          <li><Link className={pageName === "/store" || pageName === "/store/" ? "selected" : null} to={'/store/'}>{c.vOne.title}</Link></li>
          <li><Link className={this.includes(pageName, c.bundles.handle)} to={`/store/collection/${c.bundles.handle}/`}>{c.bundles.title}</Link></li>
          <li><Link className={this.includes(pageName, c.accessories.handle)} to={`/store/collection/${c.accessories.handle}/`}>{c.accessories.title}</Link></li>
          <li><Link className={this.includes(pageName, c.inks.handle)} to={`/store/collection/${c.inks.handle}/`}>{c.inks.title}</Link></li>
          <li><Link className={this.includes(pageName, c.solder.handle)} to={`/store/collection/${c.solder.handle}/`}>{c.solder.title}</Link></li>
          <li><Link className={this.includes(pageName, c.substrates.handle)} to={`/store/collection/${c.substrates.handle}/`}>{c.substrates.title}</Link></li>
          <li><Link className={this.includes(pageName, c.swag.handle)} to={`/store/collection/${c.swag.handle}/`}>{c.swag.title}</Link></li>
          <li><Link className={this.includes(pageName, '/cart')} to={`/store/cart/`}><SVGInline className="cart-icon" svg={rawSVGCart} />Cart</Link></li>
      </ul>
    );
  }

  catchProduct(event) {
    event.stopPropagation();
    this.setState({
      openSubProduct: !this.state.openSubProduct,
      openSubStore: false
     })
  }
  catchStore(event) {
    event.stopPropagation();
    this.setState({
      openSubProduct: false,
      openSubStore: !this.state.openSubStore
     })
  }

  renderLinkPanel() {
    const { pageName } = this.props;

    return (
      <div onClick= {() => this.setState({open : false})} className="link-panel-wrapper">
        <div className="link-panel">
          <ul>
            <li><Link className={this.startsWith(pageName, "/faq")} to='/faq/'>FAQ</Link></li>
            <li><a className={this.startsWith(pageName, "/product")} onClick={(event) => this.catchProduct(event)}>Product</a></li>
            {this.renderSubheaderProduct()}
            <li><a href="http://community.voltera.io">Forums</a></li>
            <li><a href="http://support.voltera.io">Support</a></li>
            <li><Link to='/contact/'>Contact</Link></li>
            <li><a className={this.startsWith(pageName, "/store")} onClick={(event) => this.catchStore(event)}>Store</a></li>
            {this.renderSubheaderStore()}
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
          <a onClick= {() => this.setState({open : !this.state.open})} className={`hamburger ${hamburgerState}`}><SVGInline svg={rawSVGHamburger} /></a>
          {this.state.open ? this.renderLinkPanel() : null}
        </div>
        <Logo emblem="true" />
      </div>
    );
  }
}
