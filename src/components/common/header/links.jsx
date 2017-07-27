import React from 'react';
import Link from 'gatsby-link'


export default class Links extends React.Component {
  render() {
    return (<div className="links">
      <a href="http://voltera.io/blog">Blog</a>
      <a href="http://community.voltera.io">Forums</a>
      <a href="http://support.voltera.io">Support</a>
      <Link to='/faq/'>FAQ</Link>
      <Link to='/contact/'>Contact</Link>
      <a className="store-link" href="http://store.voltera.io">Store</a>
    </div>);
  }
}
