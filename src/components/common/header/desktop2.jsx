import React from 'react';
import Link from 'gatsby-link'
import Logo from 'components/common/logo';

import './desktop.scss'

import { urls, urlArray } from './constants'

export default class Desktop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subOpen: false,
      pageName: '/'
    };
  }

  // Small class that determines if we should highlight link.
  getClass(currentPage, pageName) {
    if(currentPage === pageName) {
      return "selected"
    }
  }

  componentWillMount() {

    // Apparently Array.includes() is not supported in I.E, so can't use it.
    if (urlArray.indexOf(this.props.pageName) !== -1) {
      this.setState({subOpen: true})
      return
    }
  }

  componentWillReceiveProps(nextProps) {

    const { pageName } = this.props;

    // If url matches the 'feature' pages
    if (urlArray.indexOf(nextProps.pageName) !== -1) {
      this.setState({subOpen: true})
      return
    }

    // If loading a brand new page, start with it off.
    if (nextProps.pageName !== pageName) {
      this.setState({subOpen: false})
      return
    }

  }

  renderChild() {
    const { pageName } = this.props;

    if (this.state.subOpen) {
      return(
        <div className="child-wrapper">
          <div className="child-header">
            <Link className={this.getClass(pageName, urls.technology)} to={urls.technology}>How it works</Link>
            <Link className={this.getClass(pageName, urls.print )} to={urls.print}>Circuit Printing </Link>
            <Link className={this.getClass(pageName, urls.paste)} to={urls.paste}>Paste Dispensing</Link>
            <Link className={this.getClass(pageName, urls.software)} to={urls.software}>Desktop Software</Link>
            <Link className={this.getClass(pageName, urls.experiment)} to={urls.experiment}>Experiment</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="parent-wrapper">
          <div className="parent-header">
            <Logo />
            <div className="links">
              <Link to='/faq/'>FAQ</Link>
              <a onClick={() => this.setState({subOpen: true})}>Product</a>
              <a href="http://community.voltera.io">Forums</a>
              <a href="http://support.voltera.io">Support</a>
              <a href="http://voltera.io/blog">Blog</a>
              <a className="store-link" href="http://store.voltera.io">Store</a>
            </div>
          </div>
        </div>
        {this.renderChild()}
    </div>
    );
  }
}
