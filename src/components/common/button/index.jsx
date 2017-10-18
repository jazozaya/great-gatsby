import React from 'react';
import './button.scss';

import Link from 'gatsby-link'

export default class Button extends React.Component {

  render() {

    const { label, url, color, internal, onClick } = this.props;
    const type = `button ${color}`;

    // Internal links that link to another page
    if (internal) {
      return <Link className={type} to={url}>{label}</Link>;
    }

    // Button that initiates an action
    if (onClick) {
      return <div className={type} onClick={onClick}>{label}</div>;
    }

    // External link
    return <a className={type} href={url}>{label}</a>;
  }
}
