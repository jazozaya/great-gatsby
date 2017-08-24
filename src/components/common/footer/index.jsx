import React from 'react';
import Bowser from 'bowser'
import Logo from 'components/common/logo';
import './footer.scss';

import twitterIcon from './twitter-icon.min.svg'
import facebookIcon from './facebook-icon.min.svg'
import instagramIcon from './instagram-icon.min.svg'
import youtubeIcon from './youtube-icon.min.svg'

import Link from 'components/common/linkWrapper'


export default class Footer extends React.Component {

  renderLogo() {
    if (!Bowser.mobile) {
      return <Logo />
    }
    return null;
  }

  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer flex-row">
          {this.renderLogo()}
          <div className="column">
            <p>V-One</p>
            <ul>
              <li><a href="https://store.voltera.io/">Store</a></li>
              <li><a href="http://support.voltera.io">Support</a></li>
              <li><Link to='/faq/'>FAQ</Link></li>
              <li><Link to='/specs/'>Specifications</Link></li>
              <li><a href="http://www.voltera.io/downloads">Downloads</a></li>
            </ul>
          </div>
          <div className="column">
            <p>Company</p>
            <ul>
              <li><Link to='/about/'>About Us</Link></li>
              <li><Link to='/contact/'>Contact</Link></li>
              <li><a href="http://blog.voltera.io">Blog</a></li>
              <li><a href="http://community.voltera.io">Forums</a></li>
            </ul>
          </div>
          <div className="column">
            <p>Sales & Inquiries</p>
            <ul>
              <li>sales@voltera.io</li>
              <li>+1 888-381-3332 ext 1</li>
            </ul>
            <div>
              <a target="_blank" href="https://www.facebook.com/voltera.io/"><img className="social-icon" src={facebookIcon}/></a>
              <a target="_blank" href="https://twitter.com/voltera_io"><img className="social-icon" src={twitterIcon}/></a>
              <a target="_blank" href="https://www.instagram.com/voltera.io/"><img className="social-icon" src={instagramIcon}/></a>
              <a target="_blank" href="https://www.youtube.com/channel/UCHANd33WPReNyQcsHPRgYjw/videos"><img className="social-icon" src={youtubeIcon}/></a>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <a href="/docs/privacy/">Privacy Policy</a> | <a href="/docs/tos">Terms of Service</a>
        </div>
      </div>);
    }
  }
