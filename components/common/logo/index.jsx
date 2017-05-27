import React from 'react'
import './logo.scss'
import SVGInline from "react-svg-inline"
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

// We have to override the configured lower (url-loader) so that we get the raw SVG as a text file.
var rawSVG = require('!raw-loader!./voltera-logo.min.svg');

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo-wrapper">
        <Link to={prefixLink('/')}>
          <SVGInline svg={rawSVG} />
        </Link>
      </div>
    );
  }
}
