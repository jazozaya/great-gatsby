import React from 'react';
import Media from 'react-media';
import Logo from 'components/common/logo';
import './footer.scss';

import twitterIcon from './twitter-icon.min.svg';
import facebookIcon from './facebook-icon.min.svg';
import instagramIcon from './instagram-icon.min.svg';
import youtubeIcon from './youtube-icon.min.svg';

import { mobileThreshold } from './../../../constants';

import { Link } from 'gatsby';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'footer-0'
    };
  }

  componentDidMount() {
    this.setState({ key: 'footer-1' });
  }
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='footer'>
          <Media query={{ minWidth: mobileThreshold }} key={this.state.key}>
            <Logo />
          </Media>
          <div className='column'>
            <p>V-One</p>
            <ul>
              <li>
                <Link to='/store/'>Store</Link>
              </li>
              <li>
                <a href='/docs/'>Docs</a>
              </li>
              <li>
                <Link to='/faq/'>FAQ</Link>
              </li>
              <li>
                <Link to='/specs/'>Specifications</Link>
              </li>
              <li>
                <Link to='/docs/desktop-application/'>Downloads</Link>
              </li>
            </ul>
          </div>
          <div className='column'>
            <p>Company</p>
            <ul>
              <li>
                <Link to='/about/'>About Us</Link>
              </li>
              <li>
                <Link to='/contact/'>Contact</Link>
              </li>
              <li>
                <a href='https://medium.com/@voltera'>Blog</a>
              </li>
              <li>
                <a href='https://careers.jobscore.com/careers/voltera'>Careers</a>
              </li>
              <li>
                <a href='/pdfs/Official-Voltera-Presskit.zip'>Press Kit</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <p>Sales & Inquiries</p>
            <ul>
              <li>sales@voltera.io</li>
              <li>+1 888-381-3332 ext 1</li>
            </ul>
            <div>
              <a target='_blank' href='https://www.facebook.com/voltera.io/' rel='noopener noreferrer'>
                <img className='social-icon' src={facebookIcon} alt='' />
              </a>
              <a target='_blank' href='https://twitter.com/voltera_io' rel='noopener noreferrer'>
                <img className='social-icon' src={twitterIcon} alt='' />
              </a>
              <a target='_blank' href='https://www.instagram.com/voltera.io/' rel='noopener noreferrer'>
                <img className='social-icon' src={instagramIcon} alt='' />
              </a>
              <a
                target='_blank'
                href='https://www.youtube.com/channel/UCHANd33WPReNyQcsHPRgYjw/videos'
                rel='noopener noreferrer'
              >
                <img className='social-icon' src={youtubeIcon} alt='' />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-links'>
          <Link to='/legal/refund/'>Refunds </Link> | <Link to='/legal/privacy/'>Privacy</Link> |{' '}
          <Link to='/legal/tos'>Terms of Service</Link>
        </div>
      </div>
    );
  }
}
