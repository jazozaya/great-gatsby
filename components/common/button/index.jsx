import React from 'react';
import './button.scss';

export default class Button extends React.Component {

  render() {
    const { label, url, color } = this.props;

    const type = `button ${color}`;
    return (<div className="button-wrapper">
      <a className={type} href={url}>{label}</a>
    </div>);
  }
}
