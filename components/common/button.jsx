import React from 'react'
import './button.scss'

export default class Button extends React.Component {

  render() {
    const { label, url } = this.props;
    return (<div>
      <a  className="button" href={url}>{label}</a>
    </div>);
  }
}
