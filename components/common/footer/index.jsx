import React from 'react';
import Logo from 'components/common/logo';
import './footer.scss';

import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Footer extends React.Component {

  render() {
    return (<div className="footer">
      <div className="footer-wrapper">
        <Logo />
        <div className="column">
          <p>Company</p>
          <ul>
            <li><a href="http://voltera.io/about">About Us</a></li>
            <li><a href="http://voltera.io/contact">Contact</a></li>
            <li><a href="http://voltera.io/blog">Blog</a></li>
            <li><a href="http://community.voltera.io">Forums</a></li>
          </ul>
        </div>
        <div className="column">
          <p>V-One</p>
          <ul>
            <li><a href="http://store.voltera.io">Store</a></li>
            <li><a href="http://support.voltera.io">Support</a></li>
            <li><Link to={prefixLink('/faq/')}>FAQ</Link></li>
            <li><Link to={prefixLink('/gallery/')}>Gallery</Link></li>
          </ul>
        </div>
        <div className="column">
          <p>Contact Sales</p>
          <ul>
            <li>sales@voltera.io</li>
            <li>+1 888-381-3332 ext 1</li>
          </ul>
        </div>
      </div>
    </div>);
  }
}
