import React from 'react';
import Link from 'gatsby-link'


export default class Links extends React.Component {
  render() {
    return (<div className="links">
    <Link to='/faq/'>FAQ</Link>
      <a href="http://community.voltera.io">Forums</a>
      <a href="http://support.voltera.io">Support</a>
      <a href="http://voltera.io/blog">Blog</a>
      <Link to='/contact/'>Contact</Link>
      <a className="store-link" href="http://store.voltera.io">Store</a>
    </div>);
  }
}
