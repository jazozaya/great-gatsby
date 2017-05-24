import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Links extends React.Component {
  render() {
    return (<div className="links">
      <a href="http://voltera.io/blog">Blog</a>
      <a href="http://community.voltera.io">Forums</a>
      <a href="http://support.voltera.io">Support</a>
      <Link to={prefixLink('/faq/')}>FAQ</Link>
      <Link to={prefixLink('/contact/')}>Contact</Link>
      <a className="store-link" href="http://store.voltera.io">Store</a>
    </div>);
  }
}
