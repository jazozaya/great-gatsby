import Link from 'gatsby-link'
import React from 'react'
import Bowser from 'bowser'

export default class LinkWrapper extends React.Component {

  render() {

    if (Bowser.msedge || Bowser.msie) {
      return <a {...this.props} href={this.props.to}>{this.props.children}</a>
    }
    else {
      return <Link {...this.props} to={this.props.to}>{this.props.children}</Link>
    }
  }
}
