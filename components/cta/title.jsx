import React from 'react'

export default class Title extends React.Component {

  render() {
    const { title, subtitle } = this.props;

    return (<div className="title">
      <h1>{title}</h1>
      <p>{subtitle}</p>
  </div>);
  }
}
