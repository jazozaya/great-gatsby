import React from 'react'

export default class Links extends React.Component {
  render() {
    return (<div>
      <a href="http://voltera.io/blog">Blog</a>
      <a href="http://community.voltera.io">Forums</a>
      <a href="http://voltera.io/support">Support</a>
      <a href="http://voltera.io/contact">Contact</a>
      <a className="store-link" href="http://store.voltera.io">Store</a>
    </div>);
  }
}
