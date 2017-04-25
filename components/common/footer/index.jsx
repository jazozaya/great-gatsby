import React from 'react';
import CallToAction from 'components/cta';
import Logo from 'components/common/logo';
import './footer.scss';

export default class Footer extends React.Component {

  render() {
    return (<div className="footer">
      <CallToAction
        title="Want to request a quote?"
        subtitle="We can help you with that!"
        label="Request Quote"
        url="this is my url"
      />
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
            <li><a href="http://voltera.io/support">Support</a></li>
          </ul>
        </div>
        <div className="column">
          <p>Company</p>
          <ul>
            <li>sales@voltera.io</li>
            <li>+1 888-381-3332</li>
          </ul>
        </div>
      </div>
    </div>);
  }
}
