import React from 'react'
import Link from 'gatsby-link'
import SVGInline from 'react-svg-inline';

import './explore.scss'

const f = {
  print: {
    name: "print",
    url: "/features/print/",
    label: "Circuit Printing",
    iconSvg: require('!raw-loader!./icons/circuit.min.svg'),
  },
  paste: {
    name: "paste",
    url: "/features/paste/",
    label: "Dispensing Paste",
    iconSvg: require('!raw-loader!./icons/ic.min.svg'),
  },
  software: {
    name: "software",
    url: "/features/software/",
    label: "Desktop Software",
    iconSvg: require('!raw-loader!./icons/software.min.svg'),
  },
  technology: {
    name: "technology",
    url: "/technology/",
    label: "Technology",
    iconSvg: require('!raw-loader!./icons/technology.min.svg'),
  },
}

class Bullet extends React.Component {

  render() {
    const { url, iconSvg, label, highlight } = this.props;
    const type = highlight ? "explore-button highlight" : "explore-button" ;

    return(
      <Link className={type} to={url}>
        <SVGInline svg={iconSvg} />
        <p>{label}</p>
      </Link>
    );
  }
}

export default class Explore extends React.Component {


    isMatch(activePage, bulletName) {
      return activePage === bulletName;
    }

    render() {

      const { activePage } = this.props;
      return (
        <div className="explore-wrapper">
          <div className="explore">
            <div className="flex-row">
              <Bullet highlight={this.isMatch(f.print.name, activePage)} url={f.print.url} iconSvg={f.print.iconSvg} label={f.print.label}/>
              <Bullet highlight={this.isMatch(f.paste.name, activePage)} url={f.paste.url} iconSvg={f.paste.iconSvg} label={f.paste.label}/>
              <Bullet highlight={this.isMatch(f.software.name, activePage)} url={f.software.url} iconSvg={f.software.iconSvg} label={f.software.label}/>
              <Bullet highlight={this.isMatch(f.technology.name, activePage)} url={f.technology.url} iconSvg={f.technology.iconSvg} label={f.technology.label}/>
            </div>
          </div>
        </div>
      );
    }
  }
