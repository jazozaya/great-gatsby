import Link from 'gatsby-link'
import React from 'react'
import Bowser from 'bowser'

export default class LinkWrapper extends React.Component {

  render() {

    if (Bowser.msedge || Bowser.msie) {
      return <a className={this.props.className} href={this.props.to}>{this.props.children}</a>
    }
    else {
      return <Link className={this.props.className} to={this.props.to}>{this.props.children}</Link>
    }
  }
}
