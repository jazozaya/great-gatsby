import React from 'react';
import Logo from 'components/common/logo';
import './footer.scss';

import Link from 'components/common/linkWrapper'


export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { windowWidth : 1920 };
  }

  componentDidMount() {
      this.setState({ windowWidth: window.innerWidth })
  }

  renderLogo() {
    if (this.state.windowWidth > 600) {
      return <Logo />
    }
  }


  render() {
    return (<div className="footer-wrapper">
      <div className="footer flex-row">
        {this.renderLogo()}
        <div className="column">
          <p>V-One</p>
          <ul>
            <li><a href="http://store.voltera.io">Store</a></li>
            <li><a href="http://support.voltera.io">Support</a></li>
            <li><Link to='/faq/'>FAQ</Link></li>
            <li><Link to='/specs/'>Specifications</Link></li>
            <li><a href="http://voltera.io/downloads">Downloads</a></li>
          </ul>
        </div>
        <div className="column">
          <p>Company</p>
          <ul>
            <li><Link to='/about/'>About Us</Link></li>
            <li><Link to='/contact/'>Contact</Link></li>
            <li><a href="http://voltera.io/blog">Blog</a></li>
            <li><a href="http://community.voltera.io">Forums</a></li>
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
      <div className="footer-links">
        <a href="/docs/V-One-Summary.pdf">Privacy Policy</a> |
        <a href="/docs/V-One-Summary.pdf">Terms of Service</a>
      </div>
    </div>);
  }
}
