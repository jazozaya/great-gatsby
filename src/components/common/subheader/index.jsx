import React from 'react'
import Link from 'gatsby-link'

import './subheader.scss'

const urls = {
  print: '/features/print/',
  paste: '/features/paste/',
  software: '/features/software/',
  experiment: '/experiment/',
  technology: '/technology/'
}

  export default class Subheader extends React.Component {

    getClass(selected, pageName) {
      if(selected === pageName) {
        return "selected"
      }
    }

    render() {
      const { selected } = this.props;
      return (
        <div className="subheader-wrapper">
          <div className="subheader">
            <Link className={this.getClass(selected, "technology")} to={urls.technology}>How it works</Link>
            <Link className={this.getClass(selected, "print" )} to={urls.print}>Circuit Printing </Link>
            <Link className={this.getClass(selected, "paste")} to={urls.paste}>Paste Dispensing</Link>
            <Link className={this.getClass(selected, "software")} to={urls.software}>Desktop Software</Link>
            <Link className={this.getClass(selected, "experiment")} to={urls.experiment}>Experiment</Link>
          </div>
        </div>
      );
    }
  }
