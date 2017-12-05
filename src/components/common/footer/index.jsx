import React from 'react';
import Bowser from 'bowser'
import Logo from 'components/common/logo';
import './footer.scss';

import twitterIcon from './twitter-icon.min.svg'
import facebookIcon from './facebook-icon.min.svg'
import instagramIcon from './instagram-icon.min.svg'
import youtubeIcon from './youtube-icon.min.svg'

import Link from 'gatsby-link'


export default class Footer extends React.Component {

  renderLogo() {
    if (!Bowser.mobile) {
      return <Logo />
    }
    return null;
  }

  render() {

    let style = {
      position: "absolute",
      left: "-5000px",
    }
    return (
      <div className="footer-wrapper">
        <div className="footer flex-row">
          {this.renderLogo()}
          <div className="column">
            <p>V-One</p>
            <ul>
              <li><Link to='/store/'>Store</Link></li>
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
              <li><a href="https://www.voltera.io/blog">Blog</a></li>
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
            <form action="https://voltera.us7.list-manage.com/subscribe/post?u=5e2801d5f399b19d163b280f7&amp;id=4ab4eb46aa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form" target="_blank" noValidate>
              {/*-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
              <div style={style} aria-hidden="true">
                <input type="text" name="b_5e2801d5f399b19d163b280f7_4ab4eb46aa" tabIndex="-1" value=""/>
              </div>
              <input className="form-email"type="email" defaultValue="" name="EMAIL"  id="mce-EMAIL" placeholder="Email address" required/>
              <input className="form-button" type="submit" value="Sign Up!" name="subscribe" id="mc-embedded-subscribe" />
            </form>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/docs/refund/">Refunds </Link> | <Link to="/docs/privacy/">Privacy</Link> | <Link to="/docs/tos">Terms of Service</Link>
        </div>
      </div>);
    }
  }
