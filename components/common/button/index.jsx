import React from 'react';
import './button.scss';

import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Button extends React.Component {

  render() {
    const { label, url, color, internal } = this.props;

    const type = `button ${color}`;
    return (<div className="button-wrapper">
      {internal ? <Link className={type} to={prefixLink(url)}>{label}</Link> : <a className={type} href={url}>{label}</a>}
    </div>);
  }
}
