import React from 'react'
import './logo.scss'
import SVGInline from "react-svg-inline"

// We have to override the configured lower (url-loader) so that we get the raw SVG as a text file.
var rawSVG = require('!raw-loader!./voltera-logo.svg');

export default class Logo extends React.Component {
  render() {
    return (
      <div className="logo-wrapper">
        <a href="http://voltera.io">
          <SVGInline svg={rawSVG} />
        </a>
      </div>
    );
  }
}
