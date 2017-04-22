import React from 'react'

export default class Title extends React.Component {

  render() {
    const { title, subtitle } = this.props;

    return (<div>
      <h1 className="title">{title}</h1>
      <p>{subtitle}</p>
  </div>);
  }
}
