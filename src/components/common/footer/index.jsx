import React from "react";
import Logo from "components/common/logo";
import "./footer.scss";

import twitterIcon from "./twitter-icon.min.svg";
import facebookIcon from "./facebook-icon.min.svg";
import instagramIcon from "./instagram-icon.min.svg";
import youtubeIcon from "./youtube-icon.min.svg";

import { isMobile, isMobileStart } from "./../../../constants";

import { Link } from "gatsby";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobileStart
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ isMobile: isMobile() });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer">
          {this.state.isMobile ? null: <Logo />}
          <div className="column">
            <p>V-One</p>
            <ul>
              <li>
                <Link to="/store/">Store</Link>
              </li>
              <li>
                <a href="http://support.voltera.io">Support</a>
              </li>
              <li>
                <Link to="/faq/">FAQ</Link>
              </li>
              <li>
                <Link to="/specs/">Specifications</Link>
              </li>
              <li>
                <a href="http://www.voltera.io/downloads">Downloads</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <p>Company</p>
            <ul>
              <li>
                <Link to="/about/">About Us</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
              <li>
                <a href="https://medium.com/@voltera">Blog</a>
              </li>
              <li>
                <a href="http://community.voltera.io">Forums</a>
              </li>
              <li>
                <a href="/pdfs/Official-Voltera-Presskit.zip">Press Kit</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <p>Sales & Inquiries</p>
            <ul>
              <li>sales@voltera.io</li>
              <li>+1 888-381-3332 ext 1</li>
            </ul>
            <div>
              <a target="_blank" href="https://www.facebook.com/voltera.io/" rel="noopener noreferrer">
                <img className="social-icon" src={facebookIcon} alt="" />
              </a>
              <a target="_blank" href="https://twitter.com/voltera_io" rel="noopener noreferrer">
                <img className="social-icon" src={twitterIcon} alt="" />
              </a>
              <a target="_blank" href="https://www.instagram.com/voltera.io/" rel="noopener noreferrer">
                <img className="social-icon" src={instagramIcon} alt="" />
              </a>
              <a target="_blank" href="https://www.youtube.com/channel/UCHANd33WPReNyQcsHPRgYjw/videos" rel="noopener noreferrer">
                <img className="social-icon" src={youtubeIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/docs/refund/">Refunds </Link> | <Link to="/docs/privacy/">Privacy</Link> | <Link to="/docs/tos">Terms of Service</Link>
        </div>
      </div>
    );
  }
}
