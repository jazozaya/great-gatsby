import React from 'react'

export default class Button extends React.Component {

  render() {
    const { label, url } = this.props;
    return (<div>
      <a className="button" href={url}>{label}</a>
  </div>);
  }
}
